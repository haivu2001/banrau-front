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
        Tài Khoản
      </v-btn>
    </template>

    <v-list>
      <template v-if="!isLoggedIn">
        <v-list-item>
          <v-list-item-title>
            <v-btn text>Đăng Nhập</v-btn>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            <v-btn text>Đăng Ký</v-btn>
          </v-list-item-title>
        </v-list-item>
      </template>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  props: ['isLoggedIn']
}
</script>
