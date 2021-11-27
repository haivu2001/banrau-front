<template>
  <v-menu
    bottom
    offset-y
    open-on-hover
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        dark
        text
        v-bind="attrs"
        v-on="on"
      >
        <v-icon>mdi-account</v-icon>
        <span v-if="!isLoggedIn">
          Tài Khoản
        </span>
        <span v-else>
          {{ $store.state.username }}
        </span>
      </v-btn>
    </template>

    <v-list>
      <template v-if="!isLoggedIn">
        <v-list-item>
          <v-list-item-title>
            <v-btn to="./login">Đăng Nhập</v-btn>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            <v-btn to="./register">Đăng Ký</v-btn>
          </v-list-item-title>
        </v-list-item>
      </template>
      <template v-else>
        <v-list-item>
          <v-list-item-title>
            <v-btn to="./user">Tài khoản</v-btn>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            <v-btn @click="logout">Đăng Xuất</v-btn>
          </v-list-item-title>
        </v-list-item>
      </template>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  props: ['isLoggedIn'],
  methods: {
    logout(){
      this.$store.commit('setUsername','');
      this.$router.push('/')
    }
  }
}
</script>
