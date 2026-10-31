<script setup>
defineOptions({ inheritAttrs: false })

const checked = defineModel({ type: Boolean, default: false })
</script>

<template>
  <label class="checkbox">
    <input v-model="checked" type="checkbox" class="checkbox__input" v-bind="$attrs" />
    <span class="checkbox__box" aria-hidden="true"></span>
    <span v-if="$slots.default" class="checkbox__label"><slot /></span>
  </label>
</template>

<style scoped lang="scss">
.checkbox {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;

  &__input {
    @include blind;
  }

  &__box {
    position: relative;
    width: 2rem;
    height: 2rem;
    border: 1px solid $color-gray-300;
    border-radius: 50%;
    transition: all $transition-base;

    &::after {
      content: '';
      position: absolute;
      top: 0.4rem;
      left: 0.7rem;
      width: 0.5rem;
      height: 0.9rem;
      border: solid $color-white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  }

  &__input:checked + &__box {
    border-color: $color-primary;
    background: $color-primary;
  }

  &__input:focus-visible + &__box {
    outline: 2px solid $color-gray-900;
    outline-offset: 2px;
  }

  &__label {
    font-size: $font-size-md;
  }
}
</style>
