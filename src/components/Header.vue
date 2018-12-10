<template>
  <div class="header">
    <v-toolbar color="blue-grey darken-2" app clipped-left>
      <v-layout justify-start align-center class="pa-2 my-2">
        <p>Amiibo Finder</p>
      </v-layout>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">Learn</router-link> |
        <router-link to="/login">Sign Up</router-link>
      </div>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
p {
  color: #fff;
}
</style>