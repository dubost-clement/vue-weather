<template>
  <div class="container">
    <div class="card card-opacity">
      <div class="card-header">
        <div class="float-left">
          <font-awesome-icon icon="globe-americas" />
          {{ weather.name }}
        </div>
        <div class="float-right">
          <font-awesome-icon icon="thermometer-half" />
          {{ temperature }}°
        </div>
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ weather.weather[0].description }}</h5>
        <WeatherIcon :description="weather.weather[0].description" />
        <p class="card-text">levé du soleil{{ weather.sys.sunrise | moment("HH:mm") }}</p>
        <p class="card-text">cocuhé du soleil{{ weather.sys.sunset | moment("HH:mm") }}</p>
        <p class="card-text">{{ weather.dt | moment("dddd Do MMMM") }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import WeatherIcon from "./WeatherIcon";
import "weather-icons-npm/css/weather-icons.min.css";

export default {
  props: {
    weather: Object
  },

  components: {
    WeatherIcon
  },

  computed: {
    temperature() {
      return Math.round(this.weather.main.temp);
    }
  }
}
</script>

<style lang="scss" scoped>
.card-opacity {
  background-color: rgba(255, 255, 255, .6);
}
</style>