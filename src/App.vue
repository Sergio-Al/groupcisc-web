<template>
  <the-header></the-header>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view />
  <the-footer></the-footer>
</template>

<script>
export default {

}
</script>

<style>
@import url(./assets/css/styles.css);
@import url(./assets/fonts/font-awesome.min.css);
@import url(./assets/fonts/ionicons.min.css);
*{
  font-family: montserrat;
}
</style>
