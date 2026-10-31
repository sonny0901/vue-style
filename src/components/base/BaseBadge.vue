<script setup>
const { variant = 'default' } = defineProps({
  variant: String, // default | primary | live | outline
})
</script>

<template>
  <span class="badge" :class="`badge--${variant}`">
    <slot />
  </span>
</template>

<style scoped lang="scss">
.badge {
  display: inline-flex;
  align-items: center;
  height: 2rem;
  padding: 0 0.6rem;
  border-radius: 0.2rem;
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1;

  &--default {
    background: $color-gray-100;
    color: $color-gray-700;
  }
  &--primary {
    background: $color-primary;
    color: $color-white;
  }
  &--live {
    background: $color-live;
    color: $color-white;
  }
  &--outline {
    border: 1px solid $color-gray-300;
    color: $color-gray-700;
  }
}
</style>
