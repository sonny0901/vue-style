<script setup>
import { useCartStore } from '@/stores/cart'
import { formatPrice } from '@/utils/format'
import BaseButton from '@/components/base/BaseButton.vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
import EmptyState from '@/components/common/EmptyState.vue'
import QuantityStepper from '@/components/common/QuantityStepper.vue'

const cart = useCartStore()
</script>

<template>
  <div class="cart inner">
    <SectionTitle title="장바구니" class="cart__title" />

    <!-- TODO: CartItem, CartSummary 컴포넌트로 분리 (components/cart/) -->
    <ul v-if="cart.items.length" class="cart__list">
      <li v-for="item in cart.items" :key="item.id" class="cart__item">
        <img :src="item.image" :alt="item.name" class="cart__thumb" />
        <div class="cart__info">
          <p class="cart__name">{{ item.name }}</p>
          <p class="cart__price">{{ formatPrice(item.salePrice * item.quantity) }}원</p>
        </div>
        <QuantityStepper v-model="item.quantity" />
        <BaseButton variant="text" size="sm" @click="cart.remove(item.id)">삭제</BaseButton>
      </li>
    </ul>

    <EmptyState v-else message="장바구니에 담긴 상품이 없습니다.">
      <BaseButton to="/products" variant="outline">쇼핑하러 가기</BaseButton>
    </EmptyState>
  </div>
</template>

<style scoped lang="scss">
.cart {
  padding-top: 4rem;

  &__list {
    border-top: 2px solid $color-gray-900;
  }

  &__item {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.2rem;
    padding: 2rem 0;
    border-bottom: 1px solid $color-gray-200;
  }

  &__thumb {
    width: 8rem;
    height: 8rem;
    border-radius: $radius-sm;
    object-fit: cover;
  }

  &__info {
    flex: 1;
    min-width: 0;
  }

  &__name {
    @include ellipsis(1);
  }

  &__price {
    margin-top: 0.4rem;
    font-weight: 700;
  }
}
</style>
