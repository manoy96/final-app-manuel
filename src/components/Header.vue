<template>
<div>
  <v-app>
    <v-toolbar color="blue" dark app clipped-left>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/login">Login</router-link>
      </div>
    </v-toolbar>
  </v-app>
</div> 
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>

</style>