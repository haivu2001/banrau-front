<template>
  <v-app>
    <v-app-bar app color="primary" flat>
      <v-container class="py-0 fill-height">
        <v-btn v-for="link in links" :key="link.target" :to="link.target" dark text>
          <v-icon> {{ link.icon }}</v-icon>
          {{ link.name }}
        </v-btn>
        <AccountMenu :isLoggedIn="isLoggedIn"></AccountMenu>
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
        <v-badge :content="numItemsInCart" bottom color="secondary" overlap>
          <v-btn dark fab small text to="/cart">
            <v-icon>
              mdi-cart
            </v-icon>
          </v-btn>
        </v-badge>
      </v-container>
    </v-app-bar>
    <v-main>
      <Nuxt></Nuxt>
    </v-main>
  </v-app>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  data: () => ({
    links: [
      {name: 'Trang Chủ', target: '/', icon: 'mdi-home'},
      {name: 'Cửa Hàng', target: '/shop', icon: 'mdi-store'},
      {name: 'Liên Hệ', target: '/contact', icon: 'mdi-contacts-outline'},
    ],
  }),
  computed: {
    ...mapGetters([
      'isLoggedIn', 'itemsInCart'
    ]),
    numItemsInCart() {
      return this.$store.getters.itemsInCart.length
    },
  },
}
</script>
