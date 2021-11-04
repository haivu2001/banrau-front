<template>
  <div>
    {{ itemsInCart }}
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters(['itemsInCart'])
  }
}
</script>

<style scoped>

</style>
