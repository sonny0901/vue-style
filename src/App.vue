<script setup>
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import EmptyLayout from '@/layouts/EmptyLayout.vue'

const layouts = { default: DefaultLayout, empty: EmptyLayout }

const route = useRoute()
const layout = computed(() => layouts[route.meta.layout] ?? DefaultLayout)
</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>
