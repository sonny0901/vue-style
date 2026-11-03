<script setup>
import ProductItem from './ProductItem.vue'

const { products, cols = 2 } = defineProps({
  products: { type: Array, required: true },
  cols: Number,
})
</script>

<template>
  <ul class="product-list" :style="{ '--cols': cols }">
    <li v-for="product in products" :key="product.id">
      <ProductItem :product="product" />
    </li>
  </ul>
</template>

<style scoped lang="scss">
.product-list {
  display: grid;
  grid-template-columns: repeat(var(--cols), minmax(0, 1fr));
  gap: 2.8rem 1.2rem;
}
</style>
