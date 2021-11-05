<template>
  <v-container>
    <v-simple-table>
      <thead>
      <tr>
        <th class="text-left">Sản phẩm</th>
        <th class="text-left">Giá đơn vị</th>
        <th class="text-left">Số lượng</th>
        <th class="text-left">Hành động</th>
      </tr>
      </thead>
      <tbody>
      <CartEntry v-for="id in itemsInCart" :key="id"
                 :product="purchasableProducts.find((x) => x.id === id)"></CartEntry>
      </tbody>
    </v-simple-table>
  </v-container>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters(['itemsInCart', 'purchasableProducts'])
  }
}
</script>

<style scoped>

</style>
