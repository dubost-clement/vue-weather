<template>
  <span>{{ convertDirection }}</span>
</template>

<script>
export default {
  name: "WindDirection",

  props: {
    angle: Number
  },

  data() {
    return {
      direction: ""
    }
  },
  
  computed: {
    convertDirection() {
      this.convert();
      return this.direction;
    }
  },

  methods: {
    convert() {
      if(this.angle >= 0 && this.angle < 22.5) {
        this.direction = "Nord"
      }

      if(this.angle >= 22.5 && this.angle < 67.5) {
        this.direction = "Nord-Ouest"
      }

      if(this.angle >= 67.5 && this.angle < 112.5) {
        this.direction = "Est"
      }

      if(this.angle >= 112.5 && this.angle < 157.5) {
        this.direction = "Sud-Est"
      }

      if(this.angle >= 157.5 && this.angle < 202.5) {
        this.direction = "Sud"
      }

      if(this.angle >= 202.5 && this.angle < 247.5) {
        this.direction = "Sud-Ouest"
      }

      if(this.angle >= 247.5 && this.angle < 292.5) {
        this.direction = "Ouest"
      }

      if(this.angle >= 292.5 && this.angle < 337) {
        this.direction = "Nord-Ouest"
      }

      if(this.angle >= 337 && this.angle < 360) {
        this.direction = "Nord"
      }
    }
  }
}
</script>

<style lang="scss">

</style>