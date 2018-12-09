<template>
  <v-app>
    <!-- <v-layout justify-end> -->
      <!-- <p> Hello, {{ userName }} </p> -->
      <!-- </v-layout> -->


<v-layout row justify-center>
<v-layout class="my-3">
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          contain
          class="white--text"
          height="150px"
          src="data:image/png;base64,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"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <v-card-title primary-title >
                  <v-layout justify-center align-center> <h1>Link</h1> </v-layout></v-card-title>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title>
        </v-card-title>
        <v-card-actions>
          <!-- <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn> -->
          <v-layout justify-center align-center>
          <v-btn @click="getData('link')" v-nintendo="8" dark>Find Amiibo</v-btn>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>

  <v-layout class="my-3">
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          class="white--text"
          height="150px"
          src="http://www.ubuntu-ast.org/largeimages/72/721418_super-mario-bros-wallpaper.png"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <v-card-title primary-title >
                  <v-layout justify-center align-center> <h1>Mario</h1> </v-layout></v-card-title>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title>
        </v-card-title>
        <v-card-actions>
          <!-- <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn> -->
          <v-layout justify-center align-center>
          <v-btn @click="getData('mario')" v-nintendo="8" dark>Find Amiibo</v-btn>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>

  <v-layout class="my-3">
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          class="white--text"
          height="150px"
          src="https://i.redd.it/kvdxr5i00ipz.png"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <v-card-title primary-title >
                  <v-layout justify-center align-center> <h1>Samus</h1> </v-layout></v-card-title>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title>
        </v-card-title>
        <v-card-actions>
          <!-- <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn> -->
          <v-layout justify-center align-center>
          <v-btn @click="getData('samus')" v-nintendo="8" dark>Find Amiibo</v-btn>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</v-layout> <!-- end main layout -->



<v-layout column justify-content-center align-content center class="my-3">
  <!-- <v-container>
    
    <v-btn @click="getData('mario')" v-nintendo="10">Click me</v-btn>
    <v-btn @click="getData('link')" v-nintendo="10">Click me</v-btn>
    <v-btn @click="getData('samus')" v-nintendo="10">Click me</v-btn>
  </v-container> -->
          <v-container v-for='(item, i) in info' :key="i" lg3>
            <v-card color="blue-grey darken-2" class="white--text pa-4" >
              <v-layout column justify-start align-content-start>
                <v-flex align-self-center xs7>
                  <h1>{{ item.name | allCaps }}</h1>
                </v-flex>

                <v-layout row align-center justify-center xs5 fill-height>
                  <v-img
                    :src="item.image"
                    aspect-ratio="1"
                    height="400"
                    contain
                    fill-height>
                  </v-img>
                  <v-flex align-self-start> 
                    <v-btn @click="showing = !showing" class="animated infinite flipOutY delay-2s">Info</v-btn>
                    <transition name="flip" mode="out-in">
                    <v-card v-if="showing" class="py-3">
                      <p>Name: {{ item.name }} </p>
                      <p>Game: {{ item.gameSeries }} </p>
                      <p>Amiibo Series: {{ item.amiiboSeries }} </p>
                      <p>Released: {{ item.release.na }} </p>
                    </v-card>
                    </transition>
                  </v-flex>
                </v-layout>
                
              </v-layout>
            </v-card>
          </v-container>
        <!-- <p> {{ userName }} </p> -->

</v-layout>







  
  </v-app>
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
#app {
  margin-top: 164px;
}
#app p {
  font-size: 2rem;
}
#app h1 {
  font-size: 3rem;
  font-weight: 200;
}
.flip-enter-active {
  animation: flip-in 0.5s ease-out forwards
}
.flip-leave-active {
  animation: flip-out 0.5s ease-out backwards
}
@keyframes flip-in {
  from {
    transform: rotateY(90deg)
  }
  to {
    transform: rotateY(0deg)
  }
}
@keyframes flip-out {
  from {
    transform: rotateY(0deg)
  }
  to {
    transform: rotateY(90deg)
  }
}
span.headline {
  color: #666;
}
p{
  margin-right: 3rem;
}
</style>

