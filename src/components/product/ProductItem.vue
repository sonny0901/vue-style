<script setup>
import { RouterLink } from 'vue-router'
import ProductPrice from './ProductPrice.vue'

const { product } = defineProps({
  product: { type: Object, required: true },
})
</script>

<template>
  <article class="product-item">
    <RouterLink to="/" class="product-item__link">
      <span class="product-item__thumb">
        <span class="product-item__thumb-img">
          <img :src="product.image" alt="" loading="lazy" />
        </span>
      </span>
      <span class="product-item__info">
        <span class="product-item__brand"
          ><strong>{{ product.brand }}</strong> {{ product.name }}</span
        >
        <ProductPrice
          :price="product.price"
          :sale-price="product.salePrice"
          class="product-item__price"
        />
      </span>
    </RouterLink>
  </article>
</template>

<style scoped lang="scss">
.product-item {
  display: flex;

  &__link {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  &__thumb {
    display: block;
  }

  &__thumb-img {
    display: block;
    overflow: hidden;
    aspect-ratio: 1;
    border-radius: 0.2rem;
    background: $color-gray-100;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__brand {
    @include ellipsis(3);
  }
}
</style>
