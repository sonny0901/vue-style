<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BaseIcon from '@/components/base/BaseIcon.vue'

const { placeholder = '검색어를 입력' } = defineProps({
  placeholder: String,
})

const keyword = ref('')
const router = useRouter()

const onSubmit = () => {
  if (!keyword.value.trim()) return
  router.push({ path: '/products', query: { q: keyword.value.trim() } })
}
</script>

<template>
  <form class="search" role="search">
    <label for="header-search" class="blind">상품 검색</label>
    <input
      id="header-search"
      v-model="keyword"
      type="search"
      class="search__input"
      :placeholder="placeholder"
    />
    <button type="submit" class="search__btn">
      <BaseIcon name="search" />
      <span class="blind">검색</span>
    </button>
  </form>
</template>

<style scoped lang="scss">
.search {
  display: flex;
  align-items: center;
  height: 4.4rem;
  padding: 0 0.8rem 0 2rem;
  border: 1px solid rgba(204, 204, 204, 0.3);
  border-radius: 2.2rem;

  &__input {
    flex: 1;
    min-width: 0;
    width: 100%;
    border: 0;
    outline: 0;
    background: none;

    &::placeholder {
      color: $color-gray-400;
    }
  }

  &__btn {
    @include flex-center;
    width: 3.6rem;
    height: 3.6rem;
    color: $color-primary;
  }
}
</style>
