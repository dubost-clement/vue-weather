<template>
  <div class="row">
    <div class="col-12">
      <div class="card card-opacity">
        <div class="card-header">
          <div class="float-left">
            <font-awesome-icon icon="globe-americas" />
            {{ city }}
          </div>
          <div class="float-right">
            <font-awesome-icon icon="thermometer-half" />
            {{ temp }}°
          </div>
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ weatherDescription }}</h5>
          <WeatherIcon :description="weatherDescription" />
          <p class="card-text">{{ date | moment("dddd Do MMMM") }}</p>
          <p class="card-text">mise à jour: {{ date | moment("HH:mm") }}</p>
          <button class="btn btn-primary" v-on:click="moreInfos">
            plus d'informations
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WeatherIcon from "./WeatherIcon";
import "weather-icons-npm/css/weather-icons.min.css";

export default {
  name: "WeatherCard",

  components: {
    WeatherIcon
  },

  props: {
    city: String,
    temperature: Number,
    weatherDescription: String,
    date: Number
  },

  computed: {
    temp() {
      return Math.round(this.temperature);
    }
  },

  methods: {
    moreInfos() {
      this.$emit("more-infos");
    }
  }
}
</script>

<style lang="scss">
.card-opacity {
  background-color: rgba(255, 255, 255, .6);
}
</style>