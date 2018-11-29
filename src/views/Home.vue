<template>
  <v-app>
     
<v-layout align-start justify-space-around row fill-height>
          
          <v-flex lg3>
            <v-card color="blue-grey darken-2" class="white--text">
              <v-layout>
                <v-flex xs5>
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                    aspect-ratio="1"
                    height="400"
                    contain
                  ></v-img>
                </v-flex>
                <!-- <v-flex xs7>
                  <v-card-title primary-title>TITLE
                    <div>
                      <div class="headline">Supermodel</div>
                      <div>Foster the People</div>
                      <div>(2014)</div>
                    </div>
                  </v-card-title>
                </v-flex> -->
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                <v-btn dark color="blue-grey darken-3">Go</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex lg3>
            <v-card color="blue-grey darken-2" class="white--text">
              <v-layout>
                <v-flex xs5>
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                    height="125px"
                    contain
                  ></v-img>
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title>TITLE
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
            <v-card color="blue-grey darken-2" class="white--text">
              <v-layout>
                <v-flex xs5>
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                    height="125px"
                    contain
                  ></v-img>
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title>TITLE
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

export default {
  name: "home",
  components: {

  }
};
</script>

<style scoped>
#app {
  margin-top: 164px;
}
</style>

