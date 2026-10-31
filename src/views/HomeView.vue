<script setup>
import { products, banners } from '@/mocks/products'
import MainBanner from '@/components/home/MainBanner.vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
import ProductList from '@/components/product/ProductList.vue'

const liveProducts = products.filter((product) => product.isLive)
</script>

<template>
  <div class="home">
    <MainBanner :banners="banners" class="home__banner" />

    <section class="home__section">
      <SectionTitle
        title="지금 방송 중"
        desc="LIVE로 만나는 특별한 혜택"
        more-to="/products?tab=live"
      />
      <ProductList :products="liveProducts" />
    </section>

    <section class="home__section">
      <SectionTitle title="실시간 랭킹" more-to="/products?tab=ranking" />
      <ProductList :products="products.slice(0, 4)" show-rank />
    </section>

    <section class="home__section">
      <SectionTitle title="오늘의 추천 상품" desc="고객님을 위해 준비했어요" />
      <ProductList :products="products" />
    </section>
  </div>
</template>

<style scoped lang="scss"></style>
