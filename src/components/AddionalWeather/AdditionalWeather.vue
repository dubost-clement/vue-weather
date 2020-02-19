<template>
  <div class="row">
    <div class="col-12 mt-5">
      <div class="card card-opacity">
        <div class="card-header">
          <p>Plus d'informations</p>
        </div>
        <div class="card-body">
          <p class="card-text">{{ sunrise | moment("HH:mm") }}</p>
          <p class="card-text">{{ sunset | moment("HH:mm") }}</p>

          <p class="card-text">{{speed}} km/h</p>
          <p class="card-text">{{windDirection}} direction</p>

          <p class="card-text">{{pressure}} hpa</p>
          <p class="card-text">{{humidity}} humidity</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdditionalWeather",

  props: {
    sunrise: Number,
    sunset: Number,
    windSpeed: Number,
    windDirection: Number,
    pressure: Number,
    humidity: Number
  },

  computed: {
    speed() {
      return Math.round(this.windSpeed * 3.6);
    }
  }
}
</script>

<style lang="scss">
</style>