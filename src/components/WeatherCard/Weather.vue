<template>
  <div class="container">
    <p>Ville {{ weather.name }}</p>
    <p>température {{ temperature }}°</p>
    <p>{{ weather.weather[0].description }}</p>
    <p>levé du soleil{{ weather.sys.sunrise | moment("HH:mm") }}</p>
    <p>couché du soleil{{ weather.sys.sunset | moment("HH:mm") }}</p>
    <p>{{ weather.dt | moment("dddd Do MMMM") }}</p>
  </div>
</template>

<script>
export default {
  props: {
    weather: Object
  },

  computed: {
    temperature() {
      return Math.round(this.weather.main.temp);
    }
  }
}
</script>

<style>

</style>