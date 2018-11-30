<template>
  <div class="about">
    <v-layout row>
    <!-- <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
        >
        </v-img>

        <v-card-title primary-title>
          <div>
            <div class="headline">Top western road trips</div>
            <span class="grey--text">1,000 miles of wonder</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat>Share</v-btn>
          <v-btn flat color="purple">Explore</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show">
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex> -->


    <v-flex>
      <p>hello</p>
      <!-- <p> {{ info.data.amiibo[9].character }} </p> -->
      <p> {{ info.data }} </p>
      <!-- <v-img
      :src="info.data.amiibo[1].image"></v-img> -->
      <!-- <ul>
      <li v-for="amiibo in allAmiibos" :key="amiibo.mario">
        {{ film.title }}
      </li>
    </ul> -->
    </v-flex>



  </v-layout>
  </div>
</template>

<script>
import axios from 'axios'

export default {
   data () {
    return {
      // info: [null]
      info: []
    }
  },
  mounted () {
    axios
      .get('http://www.amiiboapi.com/api/amiibo')
      .then(response => (this.info = response))
  },
}
</script>

<style scoped>
.about {
  margin-top: 164px;
}
</style>


