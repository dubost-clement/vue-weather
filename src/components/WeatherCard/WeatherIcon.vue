<template>
  <div class="weather-icon text-center">
    <i :class="weatherIcon"></i>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Weathericon",

  props: {
    description: String,
    sunrise: Number,
    sunset: Number
  },

  data() {
    return {
      icon: ""
    }
  },

  computed: {
    weatherIcon() {
      this.iconCondition();
      return this.icon;
    },
    ...mapGetters([
      "getDate"
    ])
  },

  methods: {
    iconCondition() {
      if (this.description === "ciel dégagé") {
        if(this.getDate > this.sunrise && this.getDate < this.sunset) {
          this.icon = "wi wi-day-sunny";
        }else {
          this.icon = "wi wi-night-clear";
        }
      }
    
      if (this.description === "brouillard" || this.description === "brume") {
        if(this.getDate > this.sunrise && this.getDate < this.sunset) {
          this.icon = "wi wi-fog";
        }else {
          this.icon = "wi wi-night-fog";
        }
      }

      if (this.description === "nuageux") {
        if(this.getDate > this.sunrise && this.getDate < this.sunset) {
          this.icon = "wi wi-cloudy";
        }else {
          this.icon = "wi wi-night-alt-cloudy";
        }
      }

      if (this.description === "peu nuageux" || this.description === "partiellement nuageux") {
        if(this.getDate > this.sunrise && this.getDate < this.sunset) {
          this.icon = "wi wi-day-cloudy";
        }else {
          this.icon = "wi wi-night-fog";
        }
      }

      if (this.description === "couvert") {
        this.icon = "wi wi-cloud";
      }

      if (this.description === "légère pluie") {
        this.icon = "wi wi-rain";
      }

      if (this.description === "pluie très fine") {
        this.icon = "wi wi-rain";
      }

      if (this.description === "pluie modérée") {
        this.icon = "wi wi-rain";
      }

      if (this.description === "forte pluie") {
        this.icon = "wi wi-rain";
      }

      if (this.description === "orage et pluie fine") {
        this.icon = "wi wi-thunderstorm";
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.weather-icon {
  font-size: 60px;
}
</style>