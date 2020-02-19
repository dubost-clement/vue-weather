<template>
  <div class="content">
    <div class="container">
      <WeatherCard
        :weather="weather"
        :city="weather.name"
        :temperature="weather.main.temp"
        :weatherDescription="weather.weather[0].description"
        :date="weather.dt"
        v-on:more-infos="moreInfos"
      />
    </div>
    <div class="container">
      <AdditionalWeather
        v-if="show"
        :sunrise="weather.sys.sunrise"
        :sunset="weather.sys.sunset"
        :windSpeed="weather.wind.speed"
        :windDirection="weather.wind.deg"
        :pressure="weather.main.pressure"
        :humidity="weather.main.humidity"
      />
    </div>
  </div>
</template>

<script>
import WeatherCard from "./WeatherCard";
import AdditionalWeather from "../AddionalWeather/AdditionalWeather";

export default {
  name: "Weather",

  components: {
    WeatherCard,
    AdditionalWeather
  },

  props: {
    weather: Object
  },

  data() {
    return {
      show: false
    }
  },

  methods: {
    moreInfos() {
      this.show = true;
    }
  }
}
</script>

<style lang="scss"></style>