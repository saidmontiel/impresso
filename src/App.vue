<template>
  <nav-bar />
  <router-view />
  <footer-nav />
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
import FooterNav from "@/components/FooterNav.vue";
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
