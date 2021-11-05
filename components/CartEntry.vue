<template>
  <tr>
    <td>
      {{ product.name }}
      <v-img :src="product.image" width="100px"></v-img>
    </td>
    <td>
      {{ product.price }}
    </td>
    <td>
      <v-slider ref="amountSlider" :value="amount" step="1" thumb-label="always"
                @change="(e) => $store.commit('changeAmount',{item: product.id,amount: e})"></v-slider>
    </td>
    <td class="text-left">{{ product.price * amount }}</td>
    <td>
      <v-btn block color="error" @click="removeFromCart">Xóa</v-btn>
    </td>
  </tr>
</template>

<script>

export default {
  props: ['product'],
  mounted: () => ({}),
  methods: {
    removeFromCart() {
      this.$store.commit('removeItemFromCart', this.product.id)
    }
  },
  computed: {
    amount() {
      let found = this.$store.getters.itemAmounts.find((x) => x.item === this.product.id)
      if (found) return found.amount
      else return 1
    }
  }
}
</script>

<style scoped>

</style>
