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
      <v-text-field type=number value=amount @change="(e) => $store.commit('changeAmount',{item: product.id,amount: e})"></v-text-field>
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
