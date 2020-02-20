<template>
  <div class="row">
    <div class="col-12">
      <div class="card card-opacity">
        <div class="card-header">
          <div class="float-left">
            <div class="d-flex align-items-center">
              <font-awesome-icon icon="globe-americas" size="2x" />
              <span class="ml-2 font-weight-bold">{{ city }}</span>
            </div>
          </div>
          <div class="float-right">
            <div class="d-flex align-items-center">
              <font-awesome-icon icon="thermometer-half" size="2x" />
              <span class="ml-2 font-weight-bold">{{ temp }}°</span>
            </div>
          </div>
        </div>
        <div class="card-body">
          <WeatherIcon :description="weatherDescription" />
          <h1 class="card-title text-center">{{ weatherDescription }}</h1>
          <div class="row mt-5">
            <div class="col-md-4 my-auto d-none d-md-block">
              <p class="card-text">{{ date | moment("dddd Do MMMM") }}</p>
            </div>
            <div class="col-md-4 text-center">
              <button class="btn btn-success" v-on:click="moreInfos">
                {{ btnText }} d'informations
              </button>
            </div>
            <div class="col-md-4 my-auto d-none d-md-block">
              <p class="card-text text-right">mise à jour: {{ date | moment("HH:mm") }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WeatherIcon from "./WeatherIcon";
import "weather-icons-npm/css/weather-icons.min.css";
import { mapGetters } from "vuex";

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
    },

    btnText() {
      return this.showInfo == true ? "moins" : "plus";
    },

    ...mapGetters([
      'showInfo'
    ])
  },

  methods: {
    moreInfos() {
      this.$store.commit("showMoreInfo", !this.showInfo);
    }
  }
}
</script>

<style lang="scss">
.card-opacity {
  background-color: rgba(255, 255, 255, .6);
}
</style>