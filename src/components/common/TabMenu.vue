<script setup>
import { useId } from 'vue'

// tabs: [{ id, label }]
const { tabs } = defineProps({
  tabs: { type: Array, required: true },
})

const active = defineModel({ type: String })
const uid = useId()
</script>

<template>
  <div class="tab">
    <div class="tab__list" role="tablist">
      <button
        v-for="tab in tabs"
        :id="`${uid}-tab-${tab.id}`"
        :key="tab.id"
        type="button"
        role="tab"
        class="tab__btn"
        :class="{ 'is-active': active === tab.id }"
        :aria-selected="active === tab.id"
        :aria-controls="`${uid}-panel-${tab.id}`"
        @click="active = tab.id"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- 패널: <template #panel-{id}> 으로 탭별 내용 전달 -->
    <template v-for="tab in tabs" :key="tab.id">
      <div
        v-if="$slots[`panel-${tab.id}`]"
        v-show="active === tab.id"
        :id="`${uid}-panel-${tab.id}`"
        role="tabpanel"
        :aria-labelledby="`${uid}-tab-${tab.id}`"
        class="tab__panel"
      >
        <slot :name="`panel-${tab.id}`" />
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
.tab {
  &__list {
    display: flex;
    border-bottom: 1px solid $color-gray-200;
  }

  &__btn {
    flex: 1;
    height: 5.2rem;
    border-bottom: 2px solid transparent;
    margin-bottom: -1px;
    font-size: $font-size-base;
    color: $color-gray-500;

    &.is-active {
      border-color: $color-gray-900;
      font-weight: 700;
      color: $color-gray-900;
    }
  }

  &__panel {
    padding-top: 3.2rem;
  }
}
</style>
