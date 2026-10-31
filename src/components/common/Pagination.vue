<script setup>
import { computed } from 'vue'
import BaseIcon from '@/components/base/BaseIcon.vue'

const { total, visible = 5 } = defineProps({
  total: { type: Number, required: true }, // 전체 페이지 수
  visible: Number, // 한 번에 보여줄 페이지 수
})

const page = defineModel({ type: Number, default: 1 })

const pages = computed(() => {
  const start = Math.floor((page.value - 1) / visible) * visible + 1
  const end = Math.min(start + visible - 1, total)
  return Array.from({ length: end - start + 1 }, (_, i) => start + i)
})

const go = (value) => (page.value = Math.min(Math.max(value, 1), total))
</script>

<template>
  <nav class="pagination" aria-label="페이지 이동">
    <button type="button" class="pagination__arrow" :disabled="page === 1" @click="go(page - 1)">
      <BaseIcon name="arrow-left" :size="16" />
      <span class="blind">이전 페이지</span>
    </button>

    <button
      v-for="n in pages"
      :key="n"
      type="button"
      class="pagination__num"
      :class="{ 'is-active': n === page }"
      :aria-current="n === page ? 'page' : undefined"
      @click="go(n)"
    >
      {{ n }}
    </button>

    <button
      type="button"
      class="pagination__arrow"
      :disabled="page === total"
      @click="go(page + 1)"
    >
      <BaseIcon name="arrow-right" :size="16" />
      <span class="blind">다음 페이지</span>
    </button>
  </nav>
</template>

<style scoped lang="scss">
.pagination {
  @include flex-center;
  gap: 0.4rem;
  margin-top: 4rem;

  &__num,
  &__arrow {
    @include flex-center;
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    font-size: $font-size-md;
    color: $color-gray-500;
  }

  &__num.is-active {
    background: $color-gray-900;
    font-weight: 700;
    color: $color-white;
  }

  &__arrow:disabled {
    opacity: 0.3;
    cursor: default;
  }
}
</style>
