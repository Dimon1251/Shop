<template>
  <div class="product">
    <Slider
        v-bind:list="myJson[this.$route.params.id]"
    />
    <Product
        v-bind:list="myJson[this.$route.params.id]"
    />
  </div>
</template>

<script setup>

import Product from '../components/Product.vue';
import Slider from '../components/Slider.vue';
import json from '../products.json';
import {ref} from "vue";

let myJson = ref(json);

</script>

<style scoped>

.product{
  font-size: 16px;
  display:flex;
  flex-direction: row;
}

</style>