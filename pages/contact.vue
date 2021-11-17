<template>

  <v-container fluid style="padding: 0">
    <div class="contact">
                <div class="contact__content">
                    <h2 class="contact__content-heading">Drop us a line</h2>
                    <div class="contact__content-pharagraph">
                        Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas
                        erat dignissim. Sed quis rutrum tellus, sit amet viverra felis.
                        Cras sagittis sem sit amet urna feugiat rutrum. Nam nulla ipsum,
                        venenatis malesuada felis quis, ultricies convallis neque.
                        Pellentesque tristique fringilla tempus.
                    </div>
                    <form action="" class="contact__content-form">
                        <lable class="contact__content-label">Name :</lable>
                        <input type="text" required class="contact__content-input">
                        <lable class="contact__content-label">Email :</lable>
                        <input type="email" required class="contact__content-input">
                        <lable class="contact__content-label">Message :</lable>
                        <textarea name="" id="" cols="30" rows="5" class="contact__content-input"></textarea>
                        <v-btn elevation="2" small color="green accent 5" style="width: 20%">SEND NOW</v-btn>
                    </form>
                </div>

                <div class="contact__map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.49459950494!2d106.65843061402398!3d10.773379562197714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ec3c161a3fb%3A0xef77cd47a1cc691e!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBCw6FjaCBraG9hIC0gxJDhuqFpIGjhu41jIFF14buRYyBnaWEgVFAuSENN!5e0!3m2!1svi!2s!4v1634190968584!5m2!1svi!2s"
                        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    <div class="contact__map-info">
                        <div class="contact__map-info-wrap">
                            <div class="contact__map-info-wrap-item">
                                <span>Address :</span>
                                <span>Avenue 268</span>
                            </div>
                            <div class="contact__map-info-wrap-item">
                                <span>City :</span>
                                <span>HCM City - VN</span>
                            </div>

                        </div>
                        <div class="contact__map-info-wrap">
                            <div class="contact__map-info-wrap-item">
                                <span>Phone :</span>
                                <span>+842838647256</span>
                            </div>
                            <div class="contact__map-info-wrap-item">
                                <span>Email :</span>
                                <span>@hcmut.edu.vn</span>
                            </div>

                        </div>
                    </div>
                    <div class="contact__map-available">
                        <div class="contact__map-available-text">AVAILABLE AT 7AM – 9PM</div>

                    </div>
                </div>
            </div>
   
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
    }),
  }
</script>

  