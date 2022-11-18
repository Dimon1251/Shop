<template>
  <div class = "head">
    <a href="/">
      <img class = "image" src="../image/logo.png" alt="">
    </a>
    <a href="/" class="link"> Home </a>
    <router-link class="link" to="/">Product</router-link>
    <router-link class="link last" to="/">Main</router-link>
    <a href="/">
      <img class = "images" src="../image/icon1.png" alt="">
    </a>

    <router-link to="/cart">
      <img class = "images" src="../image/icon2.png" alt="">
    </router-link>

    <a href="/">
    <img class = "images" src="../image/icon3.png" alt="">
    </a>

  </div>

</template>

<script>
</script>

<style scoped>

.head{
  display: flex;
  flex-direction: row;
}

.image{
  width: 500px;
  height: 100px;
}

.images{
  margin: 35px 20px 25px 20px;
  width: 30px;
  height: 30px;
}

.link{
  align-items: center;
  margin: 35px 35px 35px 35px;
  font-size: 20px;
  text-decoration: none;
}
a:hover{
  background-color: #fff9f1;
}

.last{
  margin-right: 120px;
}

</style>