<template>

  <v-container fluid style="padding: 0">
    <div class="contact">
                <div class="contact__content">
                    <h2 class="contact__content-heading">GỬI THÔNG TIN</h2>
                    <div class="contact__content-pharagraph">
                        Bạn hãy điền nội dung tin nhắn vào form dưới đây và gửi cho chúng tôi. Chúng tôi sẽ trả lời bạn sau khi nhận được.
                    </div>
                    <form action="" class="contact__content-form">
                        <lable class="contact__content-label">HỌ VÀ TÊN :</lable>
                        <input type="text" required class="contact__content-input">
                        <lable class="contact__content-label">Email :</lable>
                        <input type="email" required class="contact__content-input">
                        <lable class="contact__content-label">NỘI DUNG :</lable>
                        <textarea name="" id="" cols="30" rows="5" class="contact__content-input"></textarea>

                        <v-dialog
                            v-model="dialog"
                            width="500"
                          >
                           <template v-slot:activator="{ on, attrs }">
                            <v-btn elevation="2" small color="green accent 5" style="width: 20%" v-bind="attrs"
                                  v-on="on">GỬI TIN NHẮN</v-btn>
                                                </template>
                                                <v-card>
                                <v-card-title class="text-h5 grey lighten-2">
                                  Gửi thành công
                                </v-card-title>

                                <v-card-text style="margin-top: 20px">
                                  Cảm ơn bạn đã quan tâm đến của hàng !
                                </v-card-text>

                                <v-divider></v-divider>

                                <v-card-actions>
                                  <v-spacer></v-spacer>
                                  <v-btn
                                    color="primary"
                                    text
                                    @click="dialog = false"
                                    to = "/"
                                  >
                                    Trở lại shop
                                  </v-btn>
                                </v-card-actions>
                              </v-card>
                            </v-dialog>
                    </form>
                </div>

                <div class="contact__map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.49459950494!2d106.65843061402398!3d10.773379562197714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ec3c161a3fb%3A0xef77cd47a1cc691e!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBCw6FjaCBraG9hIC0gxJDhuqFpIGjhu41jIFF14buRYyBnaWEgVFAuSENN!5e0!3m2!1svi!2s!4v1634190968584!5m2!1svi!2s"
                        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    <div class="contact__map-info">
                        <div class="contact__map-info-wrap">
                            <div class="contact__map-info-wrap-item">
                                <span>Địa chỉ :</span>
                                <span>Số 268</span>
                            </div>
                            <div class="contact__map-info-wrap-item">
                                <span>Thành phố :</span>
                                <span>HCM City - VN</span>
                            </div>

                        </div>
                        <div class="contact__map-info-wrap">
                            <div class="contact__map-info-wrap-item">
                                <span>SĐT :</span>
                                <span>+842838647256</span>
                            </div>
                            <div class="contact__map-info-wrap-item">
                                <span>Email :</span>
                                <span>@hcmut.edu.vn</span>
                            </div>

                        </div>
                    </div>
                    <div class="contact__map-available">
                        <div class="contact__map-available-text">LÀM VIỆC TỪ 7AM – 9PM</div>

                    </div>
                </div>
            </div>
   
    <div class="content__header" style="margin-top: 100px; margin-bottom: 70px">
      <h3 class="content__header-heading">
        <h1 class="under-line-effect under-line-effect--red" style="font-size: 50px">THÀNH VIÊN</h1>
      </h3>
    </div>
    <v-container fluid>
            
            <v-row>
              <v-col sm="10" offset-sm="1" md="8" offset-md="2" style="text-align: center; margin-bottom: 20px">
                <v-row style="margin-left: 20px; margin-right: 20px; justify-content: center">
                  <v-col class="col-md-4 mt-6" v-for="(member) in members" :key="member.name">
                    <v-card outlined> 
                     <v-img :src="member.image" height="200px" />
                      <v-card-title style="justify-content: center">{{member.name}}</v-card-title>
                      <v-card-subtitle>{{member.mssv}}</v-card-subtitle> 
                      <v-card-actions style="justify-content: center">
                        LIÊN LẠC
                      </v-card-actions> 
                      
                    </v-card> 
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>

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
  </v-container>
 
  
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      dialog: false,
      members: [
        {
          image: 'hai.jpg',
          name: 'Vũ Thanh Hải',
          mssv: '1913268',
        },
        {
          image: 'khoa.jpg',
          name: 'Trương Anh Khoa',
          mssv: '1913828',
        },
        {
          image: 'tan.jpg',
          name: 'Trần Minh Tân',
          mssv: '1915076',
        },
        {
          image: 'vinh.jpg',
          name: 'Đinh Thế Vinh',
          mssv: '1915928',
        },
        {
          image: 'cam.png',
          name: 'Nguyễn Sĩ Quyết',
          mssv: '1914878',
        },
      ]
    }),
  }
</script>

  