<template>
  <v-app>
    <v-app-bar app color="primary" dense flat>
      <v-container class="py-0 fill-height">
        <v-btn v-for="link in links" :key="link.target" :to="link.target" dark text>
          {{ link.name }}
        </v-btn>
        <v-spacer></v-spacer>
        <v-responsive class="mr-6" max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>
        <v-btn dark text to="/cart">
          <v-icon>
            mdi-cart
          </v-icon>
        </v-btn>
      </v-container>

    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt></Nuxt>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    links: [
      {name: 'Trang Chủ', target: '/'},
      {name: 'Của Hàng', target: '/shop'},
      {name: 'Liên Hệ', target: '/contact'},
      {name: 'Tài Khoản', target: '/account'},
    ]
  })
}
</script>
