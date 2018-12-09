<template>
  <v-footer
    height="auto"
    color="blue-grey darken-2"
    dark
    class="my-5"
  >
    <v-layout
      justify-center
      row
      wrap
    >
      <v-flex
        py-3
        text-xs-center
        white--text
        xs12
      >
        &copy;2018 — <strong>Manuel Espinoza</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
p {
  color: #fff;
}
</style>