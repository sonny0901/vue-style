<script setup>
import BaseIcon from '@/components/base/BaseIcon.vue'

const { min = 1, max = 99 } = defineProps({
  min: Number,
  max: Number,
})

const quantity = defineModel({ type: Number, default: 1 })

const update = (value) => (quantity.value = Math.min(Math.max(value, min), max))

// 직접 입력 시 범위를 벗어나면 보정된 값으로 다시 표시
const onChange = (e) => {
  update(Number(e.target.value) || min)
  e.target.value = quantity.value
}
</script>

<template>
  <div class="stepper">
    <button type="button" :disabled="quantity <= min" @click="update(quantity - 1)">
      <BaseIcon name="minus" :size="16" />
      <span class="blind">수량 감소</span>
    </button>
    <input
      :value="quantity"
      type="number"
      :min="min"
      :max="max"
      aria-label="수량"
      @change="onChange"
    />
    <button type="button" :disabled="quantity >= max" @click="update(quantity + 1)">
      <BaseIcon name="plus" :size="16" />
      <span class="blind">수량 증가</span>
    </button>
  </div>
</template>

<style scoped lang="scss">
.stepper {
  display: inline-flex;
  height: 3.6rem;
  border: 1px solid $color-gray-300;
  border-radius: $radius-sm;

  button {
    @include flex-center;
    width: 3.6rem;

    &:disabled {
      color: $color-gray-300;
      cursor: default;
    }
  }

  input {
    width: 4.4rem;
    border: solid $color-gray-300;
    border-width: 0 1px;
    outline: 0;
    text-align: center;
    -moz-appearance: textfield;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
  }
}
</style>
