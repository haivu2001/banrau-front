<template>
  <v-app>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" md="8" sm="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-1 green--text text--accent-5">CHÀO MỪNG ĐẾN SHOP BÁN RAU</h1>
                        <div class="text-center mt-4">
                          <v-btn class="mx-2" color="black" fab outlined>
                            <v-icon>mdi-facebook</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" color="black" fab outlined>
                            <v-icon>mdi-google</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" color="black" fab outlined>
                            <v-icon>mdi-linkedin</v-icon>
                          </v-btn>
                        </div>

                        <v-form>
                          <!-- chỗ này để thêm icon mail prepend-icon="email" -->
                          <v-text-field
                            v-model="username"
                            color="green accent-5"
                            label="Tên đăng nhập"
                            name="Tên đăng nhập"
                            prepend-icon="mdi-email"
                            type="text"/>
                          <!-- chỗ này để thêm icon password prepend-icon="lock" -->
                          <v-text-field
                            v-model="password"
                            color="green accent-5"
                            label="Mật khẩu"
                            name="Mật khẩu"
                            prepend-icon="mdi-lock"
                            type="password"/>
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-3">
                        <v-btn color="green accent-5" dark rounded
                               @click="login">
                          ĐĂNG
                          NHẬP
                        </v-btn>
                      </div>
                      <div class="text-center mt-3">
                        <v-btn class="text-center mt-3" color="green accent-5" text>Quên mật khẩu?</v-btn>
                      </div>
                    </v-col>
                    <!-- Tạo 1 phần chuyển tiếp màu xanh -->
                    <v-col class="green accent-5" cols="12" md="4">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Chưa có tài khoản?</h1>
                        <!-- <h5 class="text-center">Enter your persional details and start journey with us</h5> -->
                      </v-card-text>
                      <div class="text-center">
                        <v-btn dark outline="" rounded @click="step++">ĐĂNG KÝ NGAY</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col class="green accent-5" cols="12" md="4">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">ĐÃ CÓ TÀI KHOẢN?</h1>
                        <!-- <h5 class="text-center">To keep connected with us please login with your personel info</h5> -->
                      </v-card-text>
                      <div class="text-center">
                        <v-btn dark outline="" rounded @click="step--">ĐĂNG NHẬP NGAY</v-btn>
                      </div>
                    </v-col>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-1 green--text text--accent-5">ĐĂNG KÝ TÀI KHOẢN MỚI</h1>
                        <div class="text-center mt-4">
                          <v-btn class="mx-2" color="black" fab outlined>
                            <v-icon>mdi-facebook</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" color="black" fab outlined>
                            <v-icon>mdi-google</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" color="black" fab outlined>
                            <v-icon>mdi-linkedin</v-icon>
                          </v-btn>
                        </div>
                        <v-form v-model="valid">
                          <!-- chỗ này để thêm icon hình người prepend-icon="person" -->
                          <v-text-field 
                          v-model="name"
                          label="Họ và tên" 
                          name="Họ và tên" 
                          type = "text"
                          :rules="nameRules"
                          prepend-icon="mdi-account"
                          color ="green accent-5"/>
                            <!-- chỗ này để thêm icon mail prepend-icon="email" -->
                          <v-text-field 
                          v-model="email"
                          label="Email" 
                          name="Email" 
                          type = "text"
                          :rules="emailRules"
                          prepend-icon="mdi-email"
                          color ="green accent-5"/>
                          <!-- chỗ này để thêm icon password prepend-icon="lock" -->
                          <v-text-field 
                          v-model="password"
                          label="Mật khẩu" 
                          name="Mật khẩu" 
                          type = "password"
                          :rules="passwordRules"
                          prepend-icon="mdi-lock"
                          color ="green accent-5"/>
                      </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5">
                        <v-btn rounded color ="green accent-5" @click="submit" :disabled="!valid">ĐĂNG KÝ</v-btn>
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
export default {
  methods: {
    async login() {
      if (await this.$store.dispatch('login', {username: this.username, password: this.password})) {
        this.$router.go(-1)
      } else {
        alert("Thông tin đăng nhập sai.")
      }
    },
    async submit () {
      console.log("Submiting...")
      let result = await this.$store.dispatch('register', 
      {
        name: this.name,
        username : this.name,
        email : this.email,
        password : this.password
      })
      console.log(result)
      if (result) {
        this.$router.push('/')
      } else {
        alert("Tên người dùng đã tồn tại")
      }

		},
  },
  data: () => ({
    step: 1,
    username: "",
    password: "",

    valid: false,
    name: '',
    nameRules: [
      v => !!v || 'Vui lòng nhập tên của bạn',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    password: '',
    passwordRules:[
      v => !!v || 'Vui lòng nhập mật khẩu',
      v => (v && v.length >= 6 && v.length <= 20) || 'Mật khẩu phải có độ dài 8-20',
    ]
  }),
  props: {
    source: String
  }
}
</script>

<style scoped>

</style>
