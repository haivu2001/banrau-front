<template>
  <v-container>
    <v-row>
      <v-col v-for="product in purchasableProducts" :key="product.id" class="col-md-4 mt-6">
        <SingleProduct :product="product"></SingleProduct>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters(['purchasableProducts'])
  }
}
</script>

<style scoped>

</style>
