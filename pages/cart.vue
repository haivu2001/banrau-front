<template>
  <v-container>
    <v-simple-table>
      <thead>
      <tr>
        <th class="text-left">Sản phẩm</th>
        <th class="text-left">Giá đơn vị trên 100 gam</th>
        <th class="text-left">Số lượng</th>
        <th class="text-left">Thành tiền</th>
        <th class="text-left">Hành động</th>
      </tr>
      </thead>
      <tbody>
      <CartEntry v-for="id in itemsInCart" :key="id"
                 :product="purchasableProducts.find((x) => x.id === id)"></CartEntry>
      </tbody>
      <tfoot>
      <tr>
        <th></th>
        <th></th>
        <th class="text-right">Tổng cộng</th>
        <th>{{ sumPrice }} đồng</th>
        <th>
          <v-btn v-if="!isLoggedIn" block color="warning" small to="/login"> Đăng nhập để Thanh Toán</v-btn>
          <v-btn v-if="isLoggedIn" block color="primary">Thanh Toán</v-btn>
        </th>
      </tr>
      </tfoot>
    </v-simple-table>
  </v-container>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters(['itemsInCart', 'purchasableProducts', 'isLoggedIn', 'itemAmounts']),
    sumPrice() {
      let result = 0

      for (let item of this.itemsInCart) {
        let amount = this.itemAmounts.find((x) => x.item === item)
        if (!amount) {
          amount = 1
        } else {
          amount = amount.amount
        }

        let price = this.purchasableProducts.find((x) => x.id === item).price


        result += price * amount
      }
      return result
    }
  }
}
</script>

<style scoped>

</style>
