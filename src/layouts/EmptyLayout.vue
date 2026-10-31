<script setup>
import { RouterLink } from 'vue-router'
</script>

<!-- 로그인, 회원가입 등 헤더/푸터 없는 페이지 -->
<template>
  <div class="layout-empty">
    <h1 class="layout-empty__logo">
      <RouterLink to="/">ONSTYLE</RouterLink>
    </h1>
    <main class="layout-empty__main">
      <slot />
    </main>
  </div>
</template>

<style scoped lang="scss">
.layout-empty {
  min-height: 100vh;

  &__logo {
    margin-bottom: 4rem;
    font-size: $font-size-xxl;
    font-weight: 900;
    text-align: center;
    color: $color-primary;
  }

  &__main {
    max-width: 40rem;
    margin: 0 auto;
  }
}
</style>
