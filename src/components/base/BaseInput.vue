<script setup>
import { useId } from 'vue'

defineOptions({ inheritAttrs: false })

const model = defineModel({ type: String, default: '' })

const { label, type = 'text', error } = defineProps({
  label: String,
  type: String,
  error: String, // 에러 메시지
})

const id = useId()
</script>

<template>
  <div class="input" :class="{ 'is-error': error }">
    <label v-if="label" :for="id" class="input__label">{{ label }}</label>
    <div class="input__field">
      <input
        :id="id"
        v-model="model"
        :type="type"
        :aria-invalid="!!error"
        :aria-describedby="error ? `${id}-error` : undefined"
        v-bind="$attrs"
      />
      <slot name="suffix" />
    </div>
    <p v-if="error" :id="`${id}-error`" class="input__error">{{ error }}</p>
  </div>
</template>

<style scoped lang="scss">
.input {
  &__label {
    display: block;
    margin-bottom: 0.8rem;
    font-size: $font-size-md;
    font-weight: 600;
  }

  &__field {
    display: flex;
    align-items: center;
    height: 4.8rem;
    padding: 0 1.4rem;
    border: 1px solid $color-gray-300;
    border-radius: $radius-sm;
    transition: border-color $transition-base;

    &:focus-within {
      border-color: $color-gray-900;
    }

    input {
      flex: 1;
      min-width: 0;
      border: 0;
      outline: 0;
      background: none;

      &::placeholder {
        color: $color-gray-400;
      }
    }
  }

  &__error {
    margin-top: 0.6rem;
    font-size: $font-size-sm;
    color: $color-sale;
  }

  &.is-error &__field {
    border-color: $color-sale;
  }
}
</style>
