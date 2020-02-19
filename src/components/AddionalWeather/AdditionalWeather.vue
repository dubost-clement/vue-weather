<template>
  <div class="row">
    <div class="col-12 my-5">
      <div class="card card-opacity">
        <div class="card-header">
          <h2 class="text-center">Plus d'informations</h2>
        </div>
        <div class="card-body">
          <div class="row text-center">
            <div class="col-sm-12 col-md-4 py-2 py-md-0">
              <h3 class="mb-3">Soleil</h3>
              <p class="card-text">Lever {{ sunrise | moment("HH:mm") }}</p>
              <p class="card-text">Coucher {{ sunset | moment("HH:mm") }}</p>
            </div>
            <div class="col-sm-12 col-md-4 py-2 py-md-0 custom-border">
              <h3 class="mb-3">Vent</h3>
              <p class="card-text">{{speed}} km/h</p>
              <p class="card-text">Direction {{windDirection}}</p>
            </div>
            <div class="col-sm-12 col-md-4 py-2 py-md-0">
              <h3 class="mb-3">Divers</h3>
              <p class="card-text">Pression {{pressure}} hPa</p>
              <p class="card-text">Humidité {{humidity}} %</p>
            </div>
          </div> 
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
.custom-border {
  border-top: 1px solid rgba(0, 0, 0, .125);
  border-bottom:  1px solid rgba(0, 0, 0, .125);
  border-left: none;
  border-right: none;

  @media screen and (min-width: 768px) {
    border-right: 1px solid rgba(0, 0, 0, .125);
    border-left:  1px solid rgba(0, 0, 0, .125);
    border-top: none;
    border-bottom: none;
  }
}
</style>