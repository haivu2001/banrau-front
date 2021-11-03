<template>
  <v-app>
<<<<<<< HEAD
    <v-app-bar app color="primary" flat>
      <v-container class="py-0 fill-height">
        <v-btn v-for="link in links" :key="link.target" :to="link.target" dark text>
          <v-icon> {{ link.icon }}</v-icon>
=======
    <v-app-bar app color="primary" dense flat>
      <v-container class="py-0 fill-height">
        <v-btn v-for="link in links" :key="link.target" :to="link.target" dark text>
>>>>>>> f09551eb9cc2deba40d2d56082b8b286f7d0b446
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
<<<<<<< HEAD
=======
      </v-container>

    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt></Nuxt>
>>>>>>> f09551eb9cc2deba40d2d56082b8b286f7d0b446
      </v-container>

    </v-app-bar>
    <v-main>
      <Nuxt></Nuxt>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    links: [
<<<<<<< HEAD
      {name: 'Trang Chủ', target: '/', icon: 'mdi-home'},
      {name: 'Của Hàng', target: '/shop', icon: 'mdi-store'},
      {name: 'Liên Hệ', target: '/contact', icon: 'mdi-contacts-outline'},
      {name: 'Tài Khoản', target: '/account', icon: 'mdi-account-outline'},
=======
      {name: 'Trang Chủ', target: '/'},
      {name: 'Của Hàng', target: '/shop'},
      {name: 'Liên Hệ', target: '/contact'},
      {name: 'Tài Khoản', target: '/account'},
>>>>>>> f09551eb9cc2deba40d2d56082b8b286f7d0b446
    ]
  })
}
</script>
