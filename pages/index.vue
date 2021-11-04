<template>
  <div>
    <v-carousel hide-delimiter-background>
      <v-carousel-item>
        <v-sheet color="red" height="100%">
          <v-img src="slide1.png"></v-img>
        </v-sheet>
      </v-carousel-item>
      <v-carousel-item>
        <v-sheet color="blue" height="100%">
          <v-img src="slide2.png"></v-img>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'isLoggedIn'
    ])
  }
}
</script>
