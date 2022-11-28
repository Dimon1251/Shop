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

      <div>
        <button class ="btn-white btn-color" v-on:click="ChangeColor('white', index)"> </button>
        <button class ="btn-red btn-color" v-on:click="ChangeColor('red', index)" > </button>
        <button class ="btn-blue btn-color" v-on:click="ChangeColor('blue', index)" > </button>
        <button class ="btn-green btn-color" v-on:click="ChangeColor('green', index)" > </button>
      </div>
      <button ref="btn" class="addcart" @click=AddtoCart(item) disabled> Add to cart</button>

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

  function ChangeColor(color, index){
      activecolor = color;
      let button = document.querySelectorAll("button[class='addcart']");
      for (let i=0;i<button.length; i++){
        button[i].disabled = true;
      }
      button[index].disabled = false;
      console.log(button);
  }

  function AddtoCart (list) {
      list.activecolor = activecolor;
      store.commit('toCart', list);
    }



</script>

<style scoped>

.image{
  max-height: 210px;
  max-width: 210px;
  width: fit-content;
  height: fit-content;
  margin: auto;
  padding-bottom: 30px;
  cursor: pointer;
}

.catalog{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.catalog-card{
  margin: 30px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 230px;
}

.catalog-card:hover{
  border: 1px solid darkblue;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);


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
  width: 30px;
  height: 30px;
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