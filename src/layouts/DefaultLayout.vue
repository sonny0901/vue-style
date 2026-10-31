<script setup>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import AppQuickMenu from '@/components/layout/AppQuickMenu.vue'
</script>

<template>
  <div class="layout">
    <AppHeader />
    <main class="layout__main">
      <slot />
    </main>
    <AppFooter />
    <AppQuickMenu />
  </div>
</template>

<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__main {
    flex: 1;
  }
}
</style>
