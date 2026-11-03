<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const {
  variant = 'primary',
  size = 'md',
  to,
  href,
  block = false,
  type = 'button',
} = defineProps({
  variant: String, // primary | secondary | outline | text
  size: String, // sm | md | lg
  to: [String, Object], // 내부 링크 → RouterLink
  href: String, // 외부 링크 → a
  block: Boolean, // width: 100%
  type: String,
})

const tag = computed(() => (to ? RouterLink : href ? 'a' : 'button'))
</script>

<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :type="tag === 'button' ? type : undefined"
    class="btn"
    :class="[`btn--${variant}`, `btn--${size}`, { 'btn--block': block }]"
  >
    <slot name="icon" />
    <slot />
  </component>
</template>

<style scoped lang="scss">
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  border: 1px solid transparent;
  border-radius: 0.4rem;
  font-weight: 600;
  white-space: nowrap;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  // size
  &--sm {
    height: 3.2rem;
    padding: 0 1.2rem;
    font-size: 1.3rem;
  }
  &--md {
    height: 4.4rem;
    padding: 0 2rem;
    font-size: 1.4rem;
  }
  &--lg {
    height: 5.6rem;
    padding: 0 2.8rem;
    font-size: 1.8rem;
  }

  // variant
  &--primary {
    background: $color-primary;
    color: $color-white;
  }
  &--secondary {
    background: $color-black;
    color: $color-white;
  }
  &--outline {
    border-color: $color-gray-300;
    background: $color-white;
    color: $color-gray-900;
  }
  &--text {
    height: auto;
    padding: 0;
    color: $color-gray-700;
  }

  &--block {
    display: flex;
    width: 100%;
  }
}
</style>
