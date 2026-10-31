<script setup>
import { useId, watch, onBeforeUnmount } from 'vue'
import BaseIcon from './BaseIcon.vue'

const open = defineModel('open', { type: Boolean, default: false })

const { title } = defineProps({
  title: String,
})

const titleId = useId()

const close = () => (open.value = false)
const onKeydown = (e) => e.key === 'Escape' && close()

// 열릴 때 body 스크롤 잠금
watch(open, (value) => {
  document.body.style.overflow = value ? 'hidden' : ''
  value
    ? window.addEventListener('keydown', onKeydown)
    : window.removeEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="open" class="modal" @click.self="close">
        <div class="modal__dialog" role="dialog" aria-modal="true" :aria-labelledby="titleId">
          <header class="modal__header">
            <h2 :id="titleId" class="modal__title">
              <slot name="title">{{ title }}</slot>
            </h2>
            <button type="button" class="modal__close" @click="close">
              <BaseIcon name="close" />
              <span class="blind">닫기</span>
            </button>
          </header>
          <div class="modal__body">
            <slot />
          </div>
          <footer v-if="$slots.footer" class="modal__footer">
            <slot name="footer" :close="close" />
          </footer>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped lang="scss">
.modal {
  @include flex-center;
  position: fixed;
  inset: 0;
  z-index: $z-modal;
  background: rgba(0, 0, 0, 0.5);

  &__dialog {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 48rem;
    max-height: 90vh;
    border-radius: $radius-md;
    background: $color-white;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 2.4rem;
  }

  &__title {
    font-size: $font-size-lg;
    font-weight: 700;
  }

  &__body {
    overflow-y: auto;
    padding: 0 2.4rem 2.4rem;
  }

  &__footer {
    display: flex;
    gap: 0.8rem;
    padding: 0 2.4rem 2.4rem;

    > * {
      flex: 1;
    }
  }
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity $transition-base;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
