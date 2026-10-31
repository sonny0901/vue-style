import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])

  const count = computed(() => items.value.reduce((sum, item) => sum + item.quantity, 0))

  function add(product, quantity = 1) {
    const found = items.value.find((item) => item.id === product.id)
    found ? (found.quantity += quantity) : items.value.push({ ...product, quantity })
  }

  function remove(id) {
    items.value = items.value.filter((item) => item.id !== id)
  }

  return { items, count, add, remove }
})
