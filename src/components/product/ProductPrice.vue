<script setup>
import { computed } from 'vue'
import { formatPrice, discountRate } from '@/utils/format'

const {
  price,
  salePrice,
  size = 'md',
} = defineProps({
  price: { type: Number, required: true },
  salePrice: Number,
  size: String,
})

const finalPrice = computed(() => salePrice ?? price)
const rate = computed(() => discountRate(price, finalPrice.value))
</script>

<template>
  <span class="price" :class="`price--${size}`">
    <del v-if="rate" class="price__origin">
      <span class="blind">정가</span>{{ formatPrice(price) }}원
    </del>
    <span class="price__final">
      <em v-if="rate" class="price__rate"> <span class="blind">할인율</span>{{ rate }}% </em>
      <strong class="price__sale">
        <span class="blind">판매가</span>{{ formatPrice(finalPrice)
        }}<span class="price__unit">원</span>
      </strong>
    </span>
  </span>
</template>

<style scoped lang="scss">
.price {
  display: block;

  &__origin {
    display: block;
    font-size: 1.3rem;
    color: $color-gray-400;
  }

  &__final {
    display: flex;
    align-items: baseline;
    gap: 0.6rem;
  }

  &__rate {
    font-style: normal;
    font-weight: 800;
    color: $color-sale;
  }

  &__sale {
    font-weight: 800;
  }

  &__unit {
    font-weight: 400;
  }

  &--md &__rate,
  &--md &__sale {
    font-size: 1.8rem;
  }

  &--lg &__rate,
  &--lg &__sale {
    font-size: 2.8rem;
  }
}
</style>
