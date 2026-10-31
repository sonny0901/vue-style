<script setup>
import EmptyState from '@/components/common/EmptyState.vue'
import BaseButton from '@/components/base/BaseButton.vue'
</script>

<template>
  <EmptyState message="요청하신 페이지를 찾을 수 없습니다.">
    <BaseButton to="/" variant="outline">홈으로</BaseButton>
  </EmptyState>
</template>
