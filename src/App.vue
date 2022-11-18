<template>
  <div id="app">

  </div>
  <Header

  />
<!--  <router-link to="/cart">Go to cart</router-link>-->


  <router-view></router-view>

</template>

<script>
import { mapState } from 'vuex';
import Header from './components/Header.vue';
import Product from './components/Product.vue';
import Slider from './components/Slider.vue';
import Cart from "@/pages/Cart.vue";

export default {
  name: 'app',
  data() {
    return {
      list: {
        title: 'Infrared heater UFO Star 2400\n',
        text: 'The UFO infrared heater is designed to create comfortable climatic conditions in apartments and premises. The power of this device is 2400 watts. Thanks to the telescopic leg included in the kit, the model is stably placed on the floor.\n',
        price: '50',
        counter: '1',
        image: ['1.png', '2.png', '3.png']
      },
    }
  },

  components: {
    Header,
    Product,
    Slider,
    Cart


  },

  /*CODE*/

  computed: {
    ...mapState({
      limit: function (state) {
        return state.limit;
      }
    })
  },
  methods: {
    updateLimit (e) {
      this.$store.commit('updateLimit', e.target.value)
    }
  }

  /*CODE*/

}

</script>

<style scoped>

</style>