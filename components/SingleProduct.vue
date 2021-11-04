<template>
  <v-card class="card-outter" height="100%">
    <v-img :src="product.image" height="200">
    </v-img>
    <v-card-title>{{ product.name }}</v-card-title>
    <v-rating :value="product.rating" readonly></v-rating>
    <v-card-subtitle class="subtitle-1">{{ product.price }} đồng</v-card-subtitle>
    <v-card-text>{{ product.description }}</v-card-text>
    <v-spacer></v-spacer>

    <v-card-actions class="card-actions">
      <v-btn :disabled="alreadyInCart" block color="primary" @click="addToCart">
        <v-icon>mdi-cart-plus</v-icon>
        <template v-if="alreadyInCart">Đã có trong giỏ</template>
        <template v-else>Thêm vào giỏ</template>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['product'],
  methods: {
    addToCart(_) {
      this.$store.commit('addItemToCart', this.product)
    }
  },
  computed: {
    alreadyInCart() {
      return this.$store.getters.itemsInCart.find((x) => x === this.product.id)
    }
  }
}
</script>

<style scoped>
.card-outter {
  position: relative;
  padding-bottom: 50px;
}

.card-actions {
  position: absolute;
  width: 100%;
  bottom: 0;
}
</style>
