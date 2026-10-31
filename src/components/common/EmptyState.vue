<script setup>
const { message = '내용이 없습니다.' } = defineProps({
  message: String,
})
</script>

<template>
  <div class="empty">
    <p class="empty__message">{{ message }}</p>
    <div v-if="$slots.default" class="empty__action">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.empty {
  padding: 8rem 0;
  text-align: center;

  &__message {
    font-size: $font-size-base;
    color: $color-gray-500;
  }

  &__action {
    margin-top: 2.4rem;
  }
}
</style>
