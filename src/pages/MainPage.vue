<template>
  <div class="catalog">
    <div class="catalog-card" v-for="(item, index) in myJson">
      <img  class="image"
            :src="`/src/image/${item.image[0].images}`"
            alt=""
            @click="$router.push('/product/'+index)"
      >
      <span>{{item.title}}</span>
      <span>{{item.price}} $</span>

      <button class ="btn-white btn-color" v-on:click="ChangeColor('white')"> </button>
      <button class ="btn-red btn-color" v-on:click="ChangeColor('red')" > </button>
      <button class ="btn-blue btn-color" v-on:click="ChangeColor('blue')" > </button>
      <button class ="btn-green btn-color" v-on:click="ChangeColor('green')" > </button>

      <button ref="btn" class="addcart" @click=AddtoCart(item)> Add to cart</button>

    </div>

  </div>
</template>

<script setup>
import json from '../products.json'
import { ref } from 'vue'
import { useStore } from 'vuex'
let store = useStore();

let myJson = ref(json);
let activecolor = ref('');

  function ChangeColor(color){
      activecolor = color;
  }

  function AddtoCart (list) {
      list.activecolor = activecolor;
      store.commit('toCart', list);
    }



</script>

<style scoped>

.image{
  width: 240px;
}

.catalog{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.catalog-card{
  margin: 30px;
  display: flex;
  flex-direction: column;
  width: 250px;
}

.catalog-card:hover{
  border: 1px solid black;


}

.addcart{
  margin: auto;
  width: 200px;
  height: 50px;
}

.addcart:hover{
  cursor: pointer;
  background-color: #04a0c5;
}

.btn-color{
  margin:15px 15px 15px 0;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  border: 2px solid grey;
}

.btn-white{
  background-color: white;
}

.btn-red{
  background-color: red;
}

.btn-blue{
  background-color: blue;
}

.btn-green{
  background-color: green;
}

.active{
  background-image: url("../image/check.svg");
  border: 2px solid black;

}

</style>