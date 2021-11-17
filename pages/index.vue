<template>
  <div>
    <v-carousel hide-delimiter-background cycle
      show-arrows-on-hover>
      <v-carousel-item src="slide1.jpg">
          <v-row class="fill-height" align="center" justify="center">
            <h1 class="nameslide font-weight-bold display-4" style="">Welcome to our shop!</h1>
          </v-row>  
      </v-carousel-item>
      <v-carousel-item src="slide2.jpg">
          <v-row class="fill-height" align="center" justify="center">
            <h1 class="font-weight-bold white--text display-4" style="text-shadow: 2px 4px 10px black">The first wealth is health</h1>
          </v-row>  
      </v-carousel-item>
      <v-carousel-item src="slide3.jpg">
          <v-row class="fill-height" align="center" justify="center">
            <h1 class="font-weight-bold white--text display-4" style="text-shadow: 2px 4px 10px black; text-align: center">The more colorful the food, the better</h1>
          </v-row>  
      </v-carousel-item>
      <v-carousel-item src="slide4.jpg">
          <v-row class="fill-height" align="center" justify="center">
            <h1 class="font-weight-bold white--text display-4" style="text-shadow: 2px 4px 10px black">Eat good feel good</h1>
          </v-row>  
      </v-carousel-item>
    </v-carousel>
    <div class="content__header" style="margin-top: 100px; margin-bottom: 100px">
      <h3 class="content__header-heading">
        <span class="under-line-effect under-line-effect--red">POPULAR PRODUCTS</span>
      </h3>
    </div>
     <v-card style="margin-bottom: 100px">
      <v-tabs
        color="green accent-5"
        centered
      >
        <v-tab>Vegatable</v-tab>
        <v-tab>Fruit</v-tab>
        <v-tab>Drink</v-tab>

        <v-tab-item
          v-for="n in 3"
          :key="n"
        >
          <v-container fluid>
            
            <v-row>
              <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
                <v-row>
                  <v-col sm="6" md="4" v-for="product in purchasableProducts" :key="product.id">
                    <v-card outlined>
                      <v-img :src="product.image" height="200px" />
                      <v-card-title>{{product.name}}</v-card-title>
                      <v-card-subtitle>{{product.price}}</v-card-subtitle>
                      <v-card-actions>
                        <v-btn color="green accent-5" outlined>
                        
                          Thêm vào giỏ hàng
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
      </v-tabs>
    </v-card>


    <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="green accent-5 lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Cửa hàng rau củ quả</strong>
      </v-card-text>
    </v-card>
  </v-footer>
     
  </div>
 
    
</template>



<script>
import {mapGetters} from 'vuex'

export default {
  data () {
      return {
        tab: null,
        Products: [
          'raua.png', 'raub.png',
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      }
    },
  computed: {
    ...mapGetters([
      'isLoggedIn'
    ]),
    ...mapGetters(['purchasableProducts'])
  }
}
</script>

