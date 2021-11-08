<template>
  <v-container>
    <!--    {{ $store.getters.purchasableProducts }}-->
    <v-row>
      <!--      {{ category }}-->
      <v-col>
        <v-radio-group v-model="category" row>
          <v-radio label="Tất cả" value="all"></v-radio>
          <v-radio v-for="opt in $store.getters.categories" :key="opt.id" :label="opt.name" :value="opt.id"></v-radio>
        </v-radio-group>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="product in purchasableProducts" :key="product.id" class="col-md-4 mt-6">
        <SingleProduct :product="product"></SingleProduct>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  data: () => ({
    category: "all"
  }),
  created() {
    this.$store.dispatch('updateData')
  },
  computed: {
    // ...mapGetters(['purchasableProducts'])
    purchasableProducts() {
      if (this.category === 'all') {
        return this.$store.getters.purchasableProducts
      } else {
        return this.$store.getters.purchasableProducts.filter((x) => x.category.includes(this.category))
      }
    },
  },
}
</script>

<style scoped>

</style>
