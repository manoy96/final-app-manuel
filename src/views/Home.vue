<template>
  <v-app>
    <p> Hello, {{ userName }} </p>
<v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          class="white--text"
          height="400px"
          src="https://images-na.ssl-images-amazon.com/images/I/617mdF-0c0L.jpg"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Top 10 Australian beaches</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title>
          <div>
            <span class="grey--text">Number 10</span><br>
            <span>Whitehaven Beach</span><br>
            <span>Whitsunday Island, Whitsunday Islands</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>




<v-layout column justify-content-center align-content center>
  <v-container>
    
    <v-btn @click="getData('mario')" v-nintendo="10">Click me</v-btn>
    <v-btn @click="getData('link')" v-nintendo="10">Click me</v-btn>
    <v-btn @click="getData('samus')" v-nintendo="10">Click me</v-btn>
  </v-container>
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
        <p> {{ userName }} </p>

</v-layout>







    <v-parallax
    dark
    height="600"
    src="https://images-na.ssl-images-amazon.com/images/I/617mdF-0c0L.jpg"></v-parallax>

  
    <v-parallax
    dark
    height="300"
    src="https://cdn3.dualshockers.com/wp-content/uploads/2018/06/Ridley-1.png"></v-parallax>

  
    <v-parallax
    dark
    height="300"
    src="http://cdn02.nintendo-europe.com/media/images/10_share_images/others_3/amiibo_4/H2x1_generic_amiibo_image1280w.jpg"></v-parallax>
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
.flip-leave {
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
</style>

