<template>
  <div class="about">
    <!-- <app-user></app-user> -->

    <v-layout row>


    <v-flex>
      <h2></h2>
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
    // appUser: User
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


