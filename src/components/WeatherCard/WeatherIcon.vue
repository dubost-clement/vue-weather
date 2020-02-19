<template>
  <div class="weather-icon">
    <i :class="weatherIcon"></i>
  </div>
</template>

<script>
export default {
  props: {
    description: String
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
    }
  },

  methods: {
    iconCondition() {
      if (this.description === "ciel dégagé") {
        this.icon = "wi wi-day-sunny";
      }
    
      if (this.description === "brume") {
        this.icon = "wi wi-fog";
      }

      if (this.description === "brouillard") {
        this.icon = "wi wi-fog";
      }

      if (this.description === "nuageux") {
        this.icon = "wi wi-cloudy";
      }

      if (this.description === "peu nuageux") {
        this.icon = "wi wi-day-cloudy";
      }

      if (this.description === "partiellement nuageux") {
        this.icon = "wi wi-day-cloudy";
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