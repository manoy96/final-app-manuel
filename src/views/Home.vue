<template>
  <v-app>
     
<v-layout align-start justify-space-around row fill-height>
          <v-flex lg3>
            <v-card color="blue-grey darken-2" class="white--text pa-4" >
              <v-layout column justify-space-around>
                <v-flex xs5>
                  <v-img
                    :src="info.data.amiibo[1].image"
                    aspect-ratio="1"
                    height="400"
                    contain
                  ></v-img>
                </v-flex>
                <v-flex align-self-center xs7>
                  <v-card-title primary-title>{{ info.data.amiibo[1].gameSeries | allCaps }}
                    <!-- <div>
                      <div class="headline">Supermodel</div>
                      <div>Foster the People</div>
                      <div>(2014)</div>
                    </div> -->
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                <v-btn dark color="blue-grey darken-3">Go</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex lg3>
            <v-card color="blue-grey darken-2" class="white--text pa-4" >
              <v-layout column justify-space-around>
                <v-flex xs5>
                  <v-img
                    :src="info.data.amiibo[44].image"
                    aspect-ratio="1"
                    height="400"
                    contain
                  ></v-img>
                </v-flex>
                <v-flex align-self-center xs7>
                  <v-card-title primary-title>{{ info.data.amiibo[44].gameSeries | allCaps }}
                    <!-- <div>
                      <div class="headline">Supermodel</div>
                      <div>Foster the People</div>
                      <div>(2014)</div>
                    </div> -->
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                <v-btn dark color="blue-grey darken-3">Go</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex lg3>
            <v-card color="blue-grey darken-2" class="white--text pa-4" >
              <v-layout column justify-space-around>
                <v-flex xs5>
                  <v-img
                    :src="info.data.amiibo[120].image"
                    aspect-ratio="1"
                    height="400"
                    contain
                  ></v-img>
                </v-flex>
                <v-flex align-self-center xs7>
                  <v-card-title primary-title>{{ info.data.amiibo[130].gameSeries | allCaps }}
                    <!-- <div>
                      <div class="headline">Supermodel</div>
                      <div>Foster the People</div>
                      <div>(2014)</div>
                    </div> -->
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                <v-btn dark color="blue-grey darken-3">Go</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

          
      
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
      info: []
    }
  },
  mounted () {
    axios
      .get('http://www.amiiboapi.com/api/amiibo')
      .then(response => (this.info = response))
  },
  filters: {
    allCaps(value) {
      return value.toUpperCase()
    }
  },
};
</script>

<style scoped>
#app {
  margin-top: 164px;
}
</style>

