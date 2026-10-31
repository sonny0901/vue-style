<script setup>
import { RouterLink } from 'vue-router'
import BaseIcon from '@/components/base/BaseIcon.vue'

const { title, desc, moreTo, tag = 'h2' } = defineProps({
  title: { type: String, required: true },
  desc: String,
  moreTo: [String, Object], // 더보기 링크
  tag: String,
})
</script>

<template>
  <div class="section-title">
    <div>
      <component :is="tag" class="section-title__title">
        <slot name="title">{{ title }}</slot>
      </component>
      <p v-if="desc" class="section-title__desc">{{ desc }}</p>
    </div>

    <slot name="right">
      <RouterLink v-if="moreTo" :to="moreTo" class="section-title__more">
        더보기 <BaseIcon name="arrow-right" :size="16" />
        <span class="blind">{{ title }}</span>
      </RouterLink>
    </slot>
  </div>
</template>

<style scoped lang="scss">
.section-title {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1.6rem;
  margin-bottom: 2rem;

  &__title {
    font-size: $font-size-lg;
    font-weight: 800;
    letter-spacing: -0.02em;
  }

  &__desc {
    margin-top: 0.4rem;
    font-size: $font-size-md;
    color: $color-gray-500;
  }

  &__more {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    font-size: $font-size-sm;
    color: $color-gray-500;
  }
}
</style>
