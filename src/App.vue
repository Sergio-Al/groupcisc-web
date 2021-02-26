<template>
  <the-header></the-header>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
  <the-footer></the-footer>
</template>

<script>
export default {
  watch: {
    // for put the meta title from vue router to the name tab and icon (if there is no icon in meta the default vue will be redering)
    $route(to) {
      document.title = `${to.meta.title}`;
      const link = document.querySelector("[rel='icon']")
      link.setAttribute('href', to.meta.icon)
    }
  }
}
</script>

<style>
@import url(./assets/css/styles.css);
@import url(./assets/fonts/font-awesome.min.css);
@import url(./assets/fonts/ionicons.min.css);
*{
  font-family: montserrat;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
