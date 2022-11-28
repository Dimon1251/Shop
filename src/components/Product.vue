<template>

<div class = "card">
  <span class = "title">{{ list.title }}</span>
  <span class = "text">{{ list.text }}</span>
  <span class = "price">{{ list.price }} $ </span>
  <div class ="colors">

    <button class ="btn-white btn-color" v-on:click="ChangeActive(0, 'white')" :class="{ active: list.colors[0].active}"> </button>
    <button class ="btn-red btn-color" v-on:click="ChangeActive(1, 'red')" :class="{ active: list.colors[1].active }"> </button>
    <button class ="btn-blue btn-color" v-on:click="ChangeActive(2, 'blue')" :class="{ active: list.colors[2].active }"> </button>
    <button class ="btn-green btn-color" v-on:click="ChangeActive(3, 'green')" :class="{ active: list.colors[3].active }"> </button>

  </div>

  <span class = "quantity">Quantity </span>
  <div class="product__count">
    <button class ="btn-minus" v-if="list.quantity>1" v-on:click="decrement">-</button>
    <span class = "counter" >{{  list.quantity }}</span>
    <button class ="btn-plus" v-on:click="increment">+</button>
  </div>
 <button ref ="button" value="list.counter" class="btn-add" @click="AddtoCart" disabled>Add to cart</button>


</div>
</template>

<script setup>

import json from '../products.json'
import { ref } from 'vue'
import { useStore } from 'vuex'


let store = useStore();

let myJson = ref(json);

const props = defineProps(['list']);


    function increment () {
      props.list.quantity++;
    }

    function decrement () {
      props.list.quantity--;
    }


    function ChangeActive(index, color) {
      props.list.activecolor = color;
      let button = document.querySelector("button[class='btn-add']");
/*
       не смог заменить эту строку на ref
*/

      button.disabled = false;
      for(let i=0;i<4;i++){
        props.list.colors[i].active = false;
      }
      props.list.colors[index].active = true;
    }

    function AddtoCart () {
      store.commit('toCart',  props.list);
    }


</script>

<style scoped>

.active{
  background-image: url("../image/check.svg");
  border: 2px solid black;

}

.card{
  font-size:16px;
  margin: 80px;
  padding-top:30px;
  display: flex;
  flex-direction: column;
}
.title{
  font-weight: bold;
  font-size:20px;
}
.text{
  margin:10px 0px;
  font-size:16px;
}

.price{
  font-weight: bolder;
  font-size: 20px;
  margin-bottom: 50px;
}

.counter{
  font-size: 20px;
}

.btn-plus{
  cursor: pointer;
  margin: 10px 30px 30px 30px;
  width: 50px;
  height: 50px;
  font-size: 30px;
}

.btn-minus{
  cursor: pointer;
  margin: 10px 30px 30px 0;
  width: 50px;
  height: 50px;
  font-size: 30px;
}

.btn-minus:hover{
  border: 1px solid #dbd7d7;
}

.btn-plus:hover{
  border: 1px solid #dbd7d7;
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

.quantity{
  font-size:16px;
}

.btn-add{
  cursor: pointer;
  width: 300px;
  height: 50px;
}

.btn-add:hover{
  border: 1px solid #dbd7d7;

}

</style>