<template>
  <div id="app">
    <Search v-on:city-name="getCityWeather($event)" />
    <Weather v-if="this.weatherData" :weather="this.weatherData" />
  </div>
</template>

<script>
import axios from "axios";
import Search from "@/components/SearchForm/Search";
import Weather from "@/components/WeatherCard/Weather";

export default {
  name: "App",

  components: {
    Search,
    Weather
  },

  data() {
    return {
      weatherData: null,
      error: null
    }
  },

  methods: {
    async getCityWeather(city) {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=fr&units=metric&appid=942b001a12073846ceb89fb33e10be0b`);
      this.weatherData = response.data;
    }
  }   
};
</script>

<style lang="scss">
#app {
  background-image: url("./assets/images/day.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
</style>
