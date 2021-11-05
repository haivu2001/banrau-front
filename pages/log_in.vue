<template>
  <v-app>
      <v-content>
          <v-container class="fill-height" fluid>
              <v-row align="center" justify="center">
                  <v-col cols="12" sm="8" md="8">
                      <v-card class="elevation-12">
                          <v-window v-model="step">
                              <v-window-item :value="1">
                                  <v-row>
                                      <v-col cols="12" md="8">
                                          <v-card-text class="mt-12">
                                              <h1 class="text-center display-2 teal--text text--accent-3">Sign in to Shop</h1>
                                              <div class="text-center mt-4">
                                                  <v-btn class="mx-2" fab color="black" outlined>
                                                      <!--<v-icon>fab fa-facebook-f</v-icon>-->
                                                  </v-btn>
                                                  <v-btn class="mx-2" fab color="black" outlined>
                                                      <!-- <v-icon>fab fa-google-plus-g</v-icon> -->
                                                  </v-btn>
                                                  <v-btn class="mx-2" fab color="black" outlined>
                                                      <!-- <v-icon>fab fa-linkedin-in</v-icon> -->
                                                  </v-btn>
                                              </div>
                                              <h4 class="text-center mlt-4">Ensure your email for registration</h4>
                                              <v-form>
                                                  <!-- chỗ này để thêm icon mail prepend-icon="email" -->
                                                  <v-text-field 
                                                  label="Email" 
                                                  name="Email" 
                                                  type = "text"
                                                  color ="teal accent-3"/>
                                                  <!-- chỗ này để thêm icon password prepend-icon="lock" -->
                                                  <v-text-field 
                                                  label="Password" 
                                                  name="Password" 
                                                  type = "password"
                                                  color ="teal accent-3"/>
                                              </v-form>
                                              <h3 class="text-center mt-3">Forget your password?</h3>
                                          </v-card-text>
                                          <div class="text-center mt-3">
                                              <v-btn rounded color ="teal accent-3" dark>SIGN IN</v-btn>
                                          </div>
                                      </v-col>
                                      <!-- Tạo 1 phần chuyển tiếp màu xanh -->
                                      <v-col cols="12" md="4" class="teal accent-3">
                                        <v-card-text class="white--text mt-12">
                                            <h1 class="text-center display-1">Hello Friend!</h1>
                                            <h5 class="text-center">Enter your persional details and start journey with us</h5>
                                        </v-card-text>
                                          <div class="text-center">
                                              <v-btn rounded outline="" dark @click="step++">SIGN UP</v-btn>
                                          </div>
                                      </v-col>
                                  </v-row>
                              </v-window-item>
                              <v-window-item :value="2">
                                  <v-row class="fill-height">
                                      <v-col cols="12" md="4" class="teal accent-3">
                                          <v-card-text class="white--text mt-12">
                                              <h1 class="text-center display-1">Welcome back!</h1>
                                              <h5 class="text-center">To keep connected with us please login with your personel info</h5>
                                          </v-card-text>
                                            <div class="text-center">
                                              <v-btn rounded outline="" dark @click="step--">SIGN IN</v-btn>
                                            </div>
                                      </v-col>
                                       <v-col cols="12" md="8">
                                          <v-card-text class="mt-12">
                                              <h1 class="text-center display-2 teal--text text--accent-3">Create Account</h1>
                                              <div class="text-center mt-4">
                                                  <v-btn class="mx-2" fab color="black" outlined>
                                                      <!--<v-icon>fab fa-facebook-f</v-icon>-->
                                                  </v-btn>
                                                  <v-btn class="mx-2" fab color="black" outlined>
                                                      <!-- <v-icon>fab fa-google-plus-g</v-icon> -->
                                                  </v-btn>
                                                  <v-btn class="mx-2" fab color="black" outlined>
                                                      <!-- <v-icon>fab fa-linkedin-in</v-icon> -->
                                                  </v-btn>
                                              </div>
                                              <h4 class="text-center mlt-4">Ensure your email for registration</h4>
                                              <v-form>
                                                  <!-- chỗ này để thêm icon hình người prepend-icon="person" -->
                                                  <v-text-field 
                                                  label="Name" 
                                                  name="Name" 
                                                  type = "text"
                                                  color ="teal accent-3"/>
                                                  <!-- chỗ này để thêm icon mail prepend-icon="email" -->
                                                  <v-text-field 
                                                  label="Email" 
                                                  name="Email" 
                                                  type = "text"
                                                  color ="teal accent-3"/>
                                                  <!-- chỗ này để thêm icon password prepend-icon="lock" -->
                                                  <v-text-field 
                                                  label="Password" 
                                                  name="Password" 
                                                  type = "password"
                                                  color ="teal accent-3"/>
                                              </v-form>
                                          </v-card-text>
                                          <div class="text-center mt-n5">
                                              <v-btn rounded color ="teal accent-3" dark to="/index">SIGN UP</v-btn>
                                          </div>
                                        </v-col>
                                  </v-row>
                              </v-window-item>
                          </v-window>
                      </v-card>
                  </v-col>
              </v-row>
          </v-container>
      </v-content>
  </v-app>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  
  data: () => ({
      step: 1
  }),
  props:{
      source: String
  }
}
</script>

<style scoped>

</style>