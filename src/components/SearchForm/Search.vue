<template>
  <form class="container mb-5" v-on:submit.prevent="searchCity">
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Rechercher une ville" v-model="cityName" required>
      <div class="input-group-append">
        <button class="btn btn-secondary">rechercher</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "SearchForm",

  data() {
    return {
      cityName: ""
    }
  },

  methods: {
    searchCity() {
      this.$emit("city-name", this.cityName);
    }
  }
}
</script>

<style>

</style>