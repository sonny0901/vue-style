<script setup>
import ProductCard from './ProductCard.vue'
import ProductItem from './ProductItem.vue'

const {
  products,
  cols = 2,
  showRank = false,
} = defineProps({
  products: { type: Array, required: true },
  cols: Number, // 한 줄 개수
  showRank: Boolean,
})
</script>

<template>
  <ul class="product-list" :style="{ '--cols': cols }">
    <!-- <li v-for="(product, index) in products" :key="product.id"> -->
    <!-- 카드 커스텀이 필요하면 slot으로 교체 -->
    <!-- <slot :product="product" :index="index">
        <ProductCard :product="product" :rank="showRank ? index + 1 : undefined" />
      </slot> -->
    <!-- </li> -->
    <li>
      <ProductItem />
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
