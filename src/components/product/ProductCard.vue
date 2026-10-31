<script setup>
import { RouterLink } from 'vue-router'
import BaseBadge from '@/components/base/BaseBadge.vue'
import BaseIcon from '@/components/base/BaseIcon.vue'
import ProductPrice from './ProductPrice.vue'

const { product, rank } = defineProps({
  product: { type: Object, required: true },
  rank: Number, // 랭킹 영역에서 순위 표시
})

const liked = defineModel('liked', { type: Boolean, default: false })
</script>

<template>
  <article class="product-card">
    <div class="product-card__thumb">
      <RouterLink :to="`/product/${product.id}`" tabindex="-1" aria-hidden="true">
        <img :src="product.image" :alt="product.name" loading="lazy" />
      </RouterLink>
      <span v-if="rank" class="product-card__rank">{{ rank }}</span>
      <BaseBadge v-if="product.isLive" variant="live" class="product-card__live">LIVE</BaseBadge>
      <button
        type="button"
        class="product-card__like"
        :class="{ 'is-active': liked }"
        :aria-pressed="liked"
        @click="liked = !liked"
      >
        <BaseIcon name="heart" :size="22" />
        <span class="blind">찜하기</span>
      </button>
    </div>

    <div class="product-card__info">
      <RouterLink :to="`/product/${product.id}`">
        <p class="product-card__brand">{{ product.brand }}</p>
        <h3 class="product-card__name">{{ product.name }}</h3>
      </RouterLink>

      <ProductPrice :price="product.price" :sale-price="product.salePrice" />

      <p v-if="product.rating" class="product-card__review">
        <BaseIcon name="star" :size="14" />
        <span class="blind">평점</span>{{ product.rating }}
        <span class="product-card__review-count">({{ product.reviewCount.toLocaleString() }})</span>
      </p>

      <div v-if="product.badges?.length" class="product-card__badges">
        <BaseBadge v-for="badge in product.badges" :key="badge" variant="outline">
          {{ badge }}
        </BaseBadge>
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
.product-card {
  &__thumb {
    position: relative;
    overflow: hidden;
    aspect-ratio: 1;
    border-radius: $radius-md;
    background: $color-gray-100;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__rank {
    @include flex-center;
    position: absolute;
    top: 0;
    left: 0;
    width: 3.2rem;
    height: 3.2rem;
    background: $color-gray-900;
    font-weight: 800;
    color: $color-white;
  }

  &__live {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  &__like {
    @include flex-center;
    position: absolute;
    right: 0.8rem;
    bottom: 0.8rem;
    width: 3.6rem;
    height: 3.6rem;
    color: rgba(0, 0, 0, 0.25);
    filter: drop-shadow(0 0 0.2rem rgba(255, 255, 255, 0.8));

    &.is-active {
      color: $color-primary;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    padding-top: 1.2rem;
  }

  &__brand {
    font-size: $font-size-sm;
    font-weight: 700;
  }

  &__name {
    @include ellipsis(2);
    font-size: $font-size-md;
    color: $color-gray-700;
  }

  &__review {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    font-size: $font-size-xs;
    color: $color-gray-700;

    .icon {
      color: $color-star;
    }
  }

  &__review-count {
    color: $color-gray-400;
  }

  &__badges {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }
}
</style>
