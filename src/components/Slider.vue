<template>
  <div id="main">
    <div class="attach">
      <div class="slider_case">
        <slider>
          <img
              v-for="image in list.image"
              :src="`/src/image/${image.images}`"
              class="images"
          />
        </slider>
      </div>
    </div>
  </div>
</template>

<script setup>
import slider from '../slider.vue'

const props = defineProps(['list']);


</script>

<style>
* {
  margin: 0;
  padding: 0;
  border:0;
  max-height: 99999999px;
  -webkit-font-smoothing: antialiased;


  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

#main {
  font-family: "Roboto", Arial, sans-serif;
  font-size: 14px;
}

.slider__list{
  margin-bottom:0;
}

.attach {
  width: 500px;
  padding: 50px 15px;
  position: relative;
}

.slider_case {
  margin-bottom: 40px;
}

.slider__list{
  border: 2px #dbd7d7;
}

.item {
  background: #00800b;
  text-align: center;
  padding: 100px 0;
  color: #fff;
  font-size: 26px;
  font-style: italic;
  font-weight: 300;
}

</style>