<template>
  <div class="content">
    <div class="container">
      <WeatherCard
        :weather="weather"
        :city="weather.name"
        :temperature="weather.main.temp"
        :weatherDescription="weather.weather[0].description"
        :date="weather.dt"
      />
    </div>
    <div class="container">
      <transition 
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <AdditionalWeather
          v-if="moreInfo"
          :sunrise="weather.sys.sunrise"
          :sunset="weather.sys.sunset"
          :windSpeed="weather.wind.speed"
          :windDirection="weather.wind.deg"
          :pressure="weather.main.pressure"
          :humidity="weather.main.humidity"
        />
      </transition>
    </div>
  </div>
</template>

<script>
import WeatherCard from "./WeatherCard";
import AdditionalWeather from "../AddionalWeather/AdditionalWeather";
import { mapState } from "vuex";

export default {
  name: "Weather",

  components: {
    WeatherCard,
    AdditionalWeather
  },

  props: {
    weather: Object
  },

  computed: mapState([
    'moreInfo'
  ])
}
</script>

<style lang="scss"></style>