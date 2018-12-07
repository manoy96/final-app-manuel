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
      <h2>Meet the OG</h2>
      
      <!-- <v-image
      :src="item[1].image"></v-image> -->
    </v-flex>



  </v-layout>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: "home",
  components: {

  },
  data () {
    return {
      // info: [null]
      info: [],
      ourQuery: 'zelda',
      //ourQuery=<character>
      showing: true
    }
  },
  methods: {
    getData(myCharacter) {
      this.ourQuery = myCharacter
          axios
      .get(`http://www.amiiboapi.com/api/amiibo/?character=${this.ourQuery}`)
      .then(response => {
        console.log(response.data.amiibo);
        this.info = response.data.amiibo;
      })
  },
  },
  filters: {
    allCaps(value) {
      return value.toUpperCase()
    }
  },
}
</script>


<style scoped>
.about {
  margin-top: 164px;
}
</style>


