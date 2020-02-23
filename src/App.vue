<template>
  <div id="app" v-bind:style="{backgroundImage: background}">
    <Search v-on:city-name="getCityWeather($event)" />
    <Weather v-if="this.weatherData" :weather="this.weatherData" />
  </div>
</template>

<script>
import axios from "axios";
import Search from "@/components/SearchForm/Search";
import Weather from "@/components/WeatherCard/Weather";
import { mapGetters } from "vuex";
import "animate.css/animate.min.css";

export default {
  name: "App",

  components: {
    Search,
    Weather,
  },

  data() {
    return {
      weatherData: null,
      error: null,
      sunrise: null,
      sunset: null,
      date: null,
      background: "",
    }
  },

  methods: {
    async getCityWeather(city) {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=fr&units=metric&appid=942b001a12073846ceb89fb33e10be0b`);
      this.weatherData = response.data;
    },

    async getSunInfos() {
      const response = await axios.get("https://api.ipgeolocation.io/astronomy?apiKey=69eb1e46b8244b139eaa411b23306282");
      const {date, sunrise, sunset} = response.data;

      this.sunrise = new Date(date + " " + sunrise).getTime()/1000;
      this.sunset = new Date(date + " " + sunset).getTime()/1000;
      this.date = Math.round(new Date().getTime()/1000);
      this.$store.commit("setDate", Math.round(new Date().getTime()/1000));
      
      this.backgroundCondition();
    },

    backgroundCondition() {
      if(this.getDate > this.sunrise && this.getDate < this.sunset) {
        this.background = 'url(' + require('@/assets/images/day.png') + ')';
      }else {
        this.background = 'url(' + require('@/assets/images/night.png') + ')';
      }
    }
  },

  computed: {
    ...mapGetters([
      "getDate"
    ])
  },

  created() {
    this.getSunInfos();
  }  
};
</script>

<style lang="scss">
#app {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
}
</style>
