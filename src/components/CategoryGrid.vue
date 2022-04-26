<template>
  <h2>Lo más popular</h2>
  <div class="category-grid">
    <div
      v-for="category in categories"
      :key="category.id"
      class="category-card"
    >
      <div class="category-image"><img :src="category.image" alt="" /></div>
      <div class="category-title">{{ category.name }}</div>
    </div>
  </div>
</template>

<script setup>
import { categories } from "@/sourceData.json";
</script>

<style lang="scss">
.category {
  &-grid {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  &-card {
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &-image {
    width: 200px;
    height: 200px;
    padding: 1rem;
    background-color: grey;
  }
}
</style>
