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
    <div class="content__header" style="margin-top: 100px; margin-bottom: 70px">
      <h3 class="content__header-heading">
        <h1 class="under-line-effect under-line-effect--red" style="font-size: 50px">HÀNG MỚI VỀ</h1>
      </h3>
    </div>
     <v-card style="margin-bottom: 100px">
      <v-tabs
        color="green accent-5"
        centered
      >
        <v-tab>Rau</v-tab>
        <v-tab>Củ</v-tab>
        <v-tab>Quả</v-tab>

        <v-tab-item>
          <v-container fluid>
            
            <v-row>
              <v-col >
                <v-row style="margin-left: 20px; margin-right: 20px">
                  <v-col class="col-md-4 mt-6" v-for="product in purchasableProducts.slice(4,7)" :key="product.id">
                    <!-- <v-card outlined> -->
                      <!-- <v-img :src="product.image" height="200px" />
                      <v-card-title>{{product.name}}</v-card-title>
                      <v-card-subtitle>{{product.price}} đồng/100g</v-card-subtitle>
                      <v-card-actions>
                        <v-btn color="green accent-5" outlined>
                        
                          Thêm vào giỏ hàng
                        </v-btn>
                      </v-card-actions> -->
                      <SingleProduct :product="product"></SingleProduct>
                      
                    <!-- </v-card> -->
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>

        <v-tab-item>
          <v-container fluid>
            
            <v-row>
              <v-col >
                <v-row style="margin-left: 20px; margin-right: 20px">
                  <v-col class="col-md-4 mt-6" v-for="product in purchasableProducts.slice(10,13)" :key="product.id">
                    <!-- <v-card outlined> -->
                      <!-- <v-img :src="product.image" height="200px" />
                      <v-card-title>{{product.name}}</v-card-title>
                      <v-card-subtitle>{{product.price}} đồng/100g</v-card-subtitle>
                      <v-card-actions>
                        <v-btn color="green accent-5" outlined>
                        
                          Thêm vào giỏ hàng
                        </v-btn>
                      </v-card-actions> -->
                      <SingleProduct :product="product"></SingleProduct>
                      
                    <!-- </v-card> -->
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>

        <v-tab-item>
          <v-container fluid>
            
            <v-row>
              <v-col >
                <v-row style="margin-left: 20px; margin-right: 20px">
                  <v-col class="col-md-4 mt-6" v-for="product in purchasableProducts.slice(18,21)" :key="product.id">
                    <!-- <v-card outlined> -->
                      <!-- <v-img :src="product.image" height="200px" />
                      <v-card-title>{{product.name}}</v-card-title>
                      <v-card-subtitle>{{product.price}} đồng/100g</v-card-subtitle>
                      <v-card-actions>
                        <v-btn color="green accent-5" outlined>
                        
                          Thêm vào giỏ hàng
                        </v-btn>
                      </v-card-actions> -->
                      <SingleProduct :product="product"></SingleProduct>
                      
                    <!-- </v-card> -->
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
        Mua rau sạch online đang là hình thức mua hàng nhận được nhiều sự quan tâm nhất của khách hàng hiện nay, hiểu và nắm được nhu cầu của phần đông người tiêu dùng chúng tôi đã nhập rất nhiều người hàng rau sạch về cửa hàng và phục vụ cho nhu cầu của tất cả mọi khách hàng một cách nhanh chính và thuận tiện nhất.
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
        text: 'Mua rau sạch online đang là hình thức mua hàng nhận được nhiều sự quan tâm nhất của khách hàng hiện nay, hiểu và nắm được nhu cầu của phần đông người tiêu dùng chúng tôi đã nhập rất nhiều người hàng rau sạch về cửa hàng và phục vụ cho nhu cầu của tất cả mọi khách hàng một cách nhanh chính và thuận tiện nhất.',
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

