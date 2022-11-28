<template>
  <router-link to="/product">Go to product</router-link>
  <router-view></router-view>
  <div class ="cart">
    <div class="clr">
      <span class="title">Cart</span>
      <span class="subtitle">Products</span>
    </div>
    <div class ="info">
      <div v-for="(item, index) in sorteredItems"  class ="card">
        <div class ="image">
          <img :src="`/src/image/${item.image[0].images}`" alt=""/>
        </div>
        <div class ="name">
          <span>{{item.title}} ({{item.activecolor}})</span>
          <span>{{item.price}} $</span>
        </div>
        <div class ="name-two">
          <span>Quantity</span>
          <span>{{item.quantity}}</span>
        </div>
        <button class="close-btn" @click="deletePost(item, index)">ㅤ</button>

      </div>

      <div class = "cart__totals">
        <span class="center" style="margin-bottom:10px ;">Cart Totals</span>
        <div style="display: flex; justify-content: space-between; ">
          <span> Subtotal</span>
          <span> 0</span>
        </div>
        <span class="center" style="margin-top: 25px"> Shipping</span>
        <div>
          <input type="radio" name="ship" checked="on"  id="Choice1" value ="5" v-model="price">
          <label for="Choice1">Flat rate: $5.00</label>
        </div>
        <div>
          <input type="radio" name="ship" id="Choice2" value ="0" v-model="price">
          <label for="Choice2">Free shipping</label>
        </div>
        <div>
          <input type="radio" name="ship" id="Choice3" value ="5" v-model="price">
          <label for="Choice3">Local pickup</label>
        </div>
        <span>Shipping to NY</span>
        <button class ="cart-button">Change address</button>
        <span class="cart-price center">Test</span>
      </div>
    </div>


  </div>
</template>

<script setup>

import { ref, computed } from 'vue'
import { useStore } from 'vuex'

let store = useStore();

  const sorteredItems  = computed(() => {
    for (let i=0; i< store.state.cart.length; i++){
      store.state.cart[i].productId = i;
    }
    store.state.cart.sort((a, b) => a.shopId > b.shopId ? 1 : -1);
    return store.state.cart;
  })

    function deletePost(item, index) {
      item.productId = index;
      store.commit('DELETE_POST', item);
    }


</script>

<style scoped>

.clr{
  background-color: #373f50;
  display: flex;
  flex-direction: column;
  z-index: 1;

}

.info{
  display: flex;
  flex-direction: column;
}

.title{
  margin: 15px 20px;
  color:white;
  font-size: 32px;
}

.subtitle{
  color:white;
  font-size: 16px;
  margin: 15px 20px;


}

img{
  max-height: 140px;
  max-width: 140px;
  height: fit-content;
  width: fit-content;
}

.image{
  width: 150px;
  display: flex;
  justify-content: center;
  margin: 15px;
}

.cart{
  display:flex;
  flex-direction: column;
}

.card{
  margin:10px;
  display: flex;
  flex-direction: row;
  border: 0.5px solid lightblue;
  width: 760px;

}

.name{
  display: flex;
  flex-direction: column;
  font-size: 16px;
  margin: 15px 50px;
  justify-content: center;
  width: 250px;
}

.name-two{
  display: flex;
  flex-direction: column;
  font-size: 16px;
  margin: 15px 50px;
  justify-content: center;
  width: 100px;
}

input{
  height: 30px;
  border: 2px solid black;
  margin: 8px 0;
}

.cart__totals{
  z-index: 4;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  border-radius: 0.4375rem;
  border: none;
  padding: 20px;
  width: 300px;
  position: absolute;
  top: -50px;
  right: 50px;
  display: flex;
  flex-direction: column;
  background-color: #fff9f1;
}

.center{
  text-align: center;
  font-weight: bold;
}

label{
  position: relative;
  bottom: 10px;
  margin: auto 7px;
}

.cart-button{
  margin: 10px;
  width: 240px;
  height: 30px;
  border-color: rgba(78,84,200,.35);
}

.cart-price{
  margin: 7px;
  font-size: 25px;
}

.close-btn{
  cursor: pointer;
  border: none;
  background: url(/src/image/close.svg) no-repeat center;
}

</style>