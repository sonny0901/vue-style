<script setup>
import { RouterLink } from 'vue-router'

// items: [{ label, to? }] — 마지막 항목은 현재 페이지
const { items } = defineProps({
  items: { type: Array, required: true },
})
</script>

<template>
  <nav class="breadcrumb" aria-label="현재 위치">
    <ol class="breadcrumb__list">
      <li><RouterLink to="/">홈</RouterLink></li>
      <li v-for="(item, index) in items" :key="item.label">
        <RouterLink v-if="item.to && index < items.length - 1" :to="item.to">
          {{ item.label }}
        </RouterLink>
        <span v-else aria-current="page">{{ item.label }}</span>
      </li>
    </ol>
  </nav>
</template>

<style scoped lang="scss">
.breadcrumb {
  padding: 1.6rem 0;
  font-size: $font-size-sm;
  color: $color-gray-500;

  &__list {
    display: flex;
    flex-wrap: wrap;

    li + li::before {
      content: '>';
      margin: 0 0.8rem;
      color: $color-gray-300;
    }

    [aria-current] {
      color: $color-gray-900;
    }
  }
}
</style>
