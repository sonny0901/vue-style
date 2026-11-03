<script setup>
import { computed } from 'vue'
import { useScrollY } from '@/composables/useScrollY'
import BaseIcon from '@/components/base/BaseIcon.vue'

const { scrollY } = useScrollY()
const isVisible = computed(() => scrollY.value > 300)

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
</script>

<template>
  <Transition name="fade">
    <div v-show="isVisible" class="quick">
      <button type="button" class="quick__btn" @click="scrollToTop">
        <BaseIcon name="arrow-up" :size="20" />
        <span class="blind">맨 위로</span>
      </button>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
.quick {
  position: fixed;
  right: 1.6rem;
  bottom: 1.6rem;
  z-index: 90;

  &__btn {
    @include flex-center;
    width: 4.8rem;
    height: 4.8rem;
    border: 1px solid $color-gray-200;
    border-radius: 50%;
    background: $color-white;
    box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.08);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
