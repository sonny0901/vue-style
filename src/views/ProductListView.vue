<script setup>
import { ref } from 'vue'
import { products } from '@/mocks/products'
import Breadcrumb from '@/components/common/Breadcrumb.vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
import Pagination from '@/components/common/Pagination.vue'
import ProductList from '@/components/product/ProductList.vue'

const page = ref(1)
</script>

<template>
  <div class="product-list-page inner">
    <Breadcrumb :items="[{ label: '전체상품' }]" />

    <SectionTitle title="전체상품" tag="h2">
      <template #right>
        <p class="product-list-page__count">
          총 <strong>{{ products.length }}</strong>개
        </p>
      </template>
    </SectionTitle>

    <ProductList :products="products" />
    <Pagination v-model="page" :total="12" />
  </div>
</template>

<style scoped lang="scss">
.product-list-page {
  &__count {
    font-size: $font-size-md;
    color: $color-gray-500;

    strong {
      color: $color-gray-900;
    }
  }
}
</style>
