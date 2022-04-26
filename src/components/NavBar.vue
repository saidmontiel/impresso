<template>
  <nav class="main-nav">
    <div class="user-nav">
      <router-link to="/">Impresso | Imprenta en linea</router-link> |
      <router-link to="/product">Need Help</router-link>
      <router-link to="/product">My Account</router-link>
      <router-link to="/product">Cart</router-link>
    </div>
    <div class="shop-nav">
      <a href="/" v-for="category in categories" :key="category.id">{{
        category.name
      }}</a>
    </div>
  </nav>
</template>

<script setup>
import sourceData from "@/sourceData.json";
console.log(sourceData.categories);

const categories = sourceData.categories;
</script>

<style lang="scss">
.main-nav {
  padding: 2rem;
  background-color: beige;
}
.user-nav {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  background-color: azure;
}
.shop-nav {
  & > * {
    padding: 1rem;
  }
}
</style>
