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
                                              <h1 class="text-center display-1 green--text text--accent-5">CHÀO MỪNG ĐẾN SHOP BÁN RAU</h1>
                                              <div class="text-center mt-4">
                                                  <v-btn class="mx-2" fab color="black" outlined>
                                                      <v-icon>mdi-facebook</v-icon>
                                                  </v-btn>
                                                  <v-btn class="mx-2" fab color="black" outlined>
                                                      <v-icon>mdi-google</v-icon>
                                                  </v-btn>
                                                  <v-btn class="mx-2" fab color="black" outlined>
                                                      <v-icon>mdi-linkedin</v-icon>
                                                  </v-btn>
                                              </div>
                                              
                                              <v-form>
                                                  <!-- chỗ này để thêm icon mail prepend-icon="email" -->
                                                  <v-text-field 
                                                  label="Email" 
                                                  name="Email" 
                                                  type = "text"
                                                  prepend-icon="mdi-email"
                                                  color ="green accent-5"/>
                                                  <!-- chỗ này để thêm icon password prepend-icon="lock" -->
                                                  <v-text-field 
                                                  label="Mật khẩu" 
                                                  name="Mật khẩu" 
                                                  type = "password"
                                                  prepend-icon="mdi-lock"
                                                  color ="green accent-5"/>
                                              </v-form>
                                          </v-card-text>
                                          <div class="text-center mt-3">
                                              <v-btn rounded color ="green accent-5" dark>ĐĂNG NHẬP</v-btn>
                                          </div>
                                           <div class="text-center mt-3">
                                               <v-btn text class="text-center mt-3" color ="green accent-5">Quên mật khẩu?</v-btn>
                                           </div>
                                      </v-col>
                                      <!-- Tạo 1 phần chuyển tiếp màu xanh -->
                                      <v-col cols="12" md="4" class="green accent-5">
                                        <v-card-text class="white--text mt-12">
                                            <h1 class="text-center display-1">Chưa có tài khoản?</h1>
                                            <!-- <h5 class="text-center">Enter your persional details and start journey with us</h5> -->
                                        </v-card-text>
                                          <div class="text-center">
                                              <v-btn rounded outline="" dark @click="step++">ĐĂNG KÝ NGAY</v-btn>
                                          </div>
                                      </v-col>
                                  </v-row>
                              </v-window-item>
                              <v-window-item :value="2">
                                  <v-row class="fill-height">
                                      <v-col cols="12" md="4" class="green accent-5">
                                          <v-card-text class="white--text mt-12">
                                              <h1 class="text-center display-1">ĐÃ CÓ TÀI KHOẢN?</h1>
                                              <!-- <h5 class="text-center">To keep connected with us please login with your personel info</h5> -->
                                          </v-card-text>
                                            <div class="text-center">
                                              <v-btn rounded outline="" dark @click="step--">ĐĂNG NHẬP NGAY</v-btn>
                                            </div>
                                      </v-col>
                                       <v-col cols="12" md="8">
                                          <v-card-text class="mt-12">
                                             <h1 class="text-center display-1 green--text text--accent-5">ĐĂNG KÝ TÀI KHOẢN MỚI</h1>
                                              <div class="text-center mt-4">
                                                 <v-btn class="mx-2" fab color="black" outlined>
                                                      <v-icon>mdi-facebook</v-icon>
                                                  </v-btn>
                                                  <v-btn class="mx-2" fab color="black" outlined>
                                                      <v-icon>mdi-google</v-icon>
                                                  </v-btn>
                                                  <v-btn class="mx-2" fab color="black" outlined>
                                                      <v-icon>mdi-linkedin</v-icon>
                                                  </v-btn>
                                              </div>
                                              <v-form>
                                                  <!-- chỗ này để thêm icon hình người prepend-icon="person" -->
                                                  <v-text-field 
                                                  label="Họ và tên" 
                                                  name="Họ và tên" 
                                                  type = "text"
                                                  prepend-icon="mdi-account"
                                                  color ="green accent-5"/>
                                                   <!-- chỗ này để thêm icon mail prepend-icon="email" -->
                                                  <v-text-field 
                                                  label="Email" 
                                                  name="Email" 
                                                  type = "text"
                                                  prepend-icon="mdi-email"
                                                  color ="green accent-5"/>
                                                  <!-- chỗ này để thêm icon password prepend-icon="lock" -->
                                                  <v-text-field 
                                                  label="Mật khẩu" 
                                                  name="Mật khẩu" 
                                                  type = "password"
                                                  prepend-icon="mdi-lock"
                                                  color ="green accent-5"/>
                                              </v-form>
                                          </v-card-text>
                                          <div class="text-center mt-n5">
                                              <v-btn rounded color ="green accent-5" dark to="/">ĐĂNG KÝ</v-btn>
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