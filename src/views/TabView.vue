<script setup>
const { title } = defineProps({
  title: { type: String, required: true },
})
</script>

<template>
  <div class="tab-page">
    <h2 class="tab-page__title">{{ title }}</h2>
  </div>
</template>

<style scoped lang="scss">
.tab-page {
  padding: 4rem 2rem;

  &__title {
    font-size: 2.2rem;
    font-weight: 800;
  }
}
</style>
