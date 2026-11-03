<script setup>
import { products, banners } from '@/mocks/products'
import MainBanner from '@/components/home/MainBanner.vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
import ProductList from '@/components/product/ProductList.vue'
</script>

<template>
  <div class="home">
    <MainBanner :banners="banners" class="home__banner" />

    <section class="home__section">
      <SectionTitle title="오늘의 추천 상품" desc="고객님을 위해 준비했어요" />
      <ProductList :products="products" />
    </section>
  </div>
</template>

<style scoped lang="scss">
.home {
  // 메인 배너는 전체 너비, 섹션부터 좌우 여백
  &__section {
    padding: 0 2rem;
  }
}
</style>
