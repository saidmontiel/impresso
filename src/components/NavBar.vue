<template>
  <nav class="nav">
    <div class="nav-header">
      <router-link to="/">Impresso | Imprenta en linea</router-link>
      <search-bar />
      <router-link to="/ayuda">Need Help</router-link>
      <router-link to="/cuenta">My Account</router-link>
      <router-link to="/carrito">Cart</router-link>
    </div>
    <div class="nav-shop">
      <a href="/" v-for="category in categories" :key="category.id">{{
        category.name
      }}</a>
    </div>
  </nav>
</template>

<script setup>
import sourceData from "@/sourceData.json";
import SearchBar from "@/components/SearchBar.vue";
console.log(sourceData.categories);

const categories = sourceData.categories;
</script>

<style lang="scss">
.nav {
  padding: 2rem;
  background-color: rgb(230, 230, 230);
  &-header {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    background-color: azure;
  }

  &-shop {
    & > * {
      padding: 1rem;
    }
  }
}
</style>
