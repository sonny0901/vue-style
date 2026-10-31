<script setup>
import { ref, shallowRef, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import { gnbMenus, categories } from '@/mocks/menus'

const isCategoryOpen = ref(false)
const route = useRoute()

// Swiper 인스턴스
const swiperInstance = shallowRef(null)
const onSwiper = (swiper) => (swiperInstance.value = swiper)

// 현재 페이지에 해당하는 메뉴 index
const getActiveIndex = () => gnbMenus.findIndex((menu) => menu.to === route.fullPath)

// 페이지 이동 시 카테고리 닫기 + active 메뉴로 슬라이드
watch(
  () => route.fullPath,
  () => {
    isCategoryOpen.value = false
    const index = getActiveIndex()
  },
)
</script>

<template>
  <nav class="gnb" aria-label="주 메뉴">
    <Swiper
      class="gnb__menu"
      wrapper-tag="ul"
      :modules="[FreeMode]"
      slides-per-view="auto"
      free-mode
      :slides-offset-before="10"
      :slides-offset-after="10"
      :initial-slide="Math.max(getActiveIndex(), 0)"
      @swiper="onSwiper"
    >
      <SwiperSlide v-for="menu in gnbMenus" :key="menu.label" tag="li" class="gnb__item">
        <!-- RouterLink 기본 active 판별은 query를 무시하므로 fullPath로 비교 -->
        <RouterLink
          :to="menu.to"
          class="gnb__link"
          :class="{ 'is-active': route.fullPath === menu.to }"
        >
          {{ menu.label }}
        </RouterLink>
      </SwiperSlide>
    </Swiper>
  </nav>
</template>

<style scoped lang="scss">
.gnb {
  position: relative;

  &__category-btn {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    flex-shrink: 0;
    font-weight: 700;
  }

  &__menu {
    min-width: 0;
  }

  &__item {
    width: auto;
  }

  &__link {
    display: block;
    padding: 0.4rem 1rem;
    font-size: 1.6rem;
    font-weight: 600;
    color: $color-gray-900;
    white-space: nowrap;

    &.is-active {
      color: $color-primary;
    }
  }

  &__category {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    border-bottom: 1px solid $color-gray-200;
    background: $color-white;
    box-shadow: 0 0.8rem 1.6rem rgba(0, 0, 0, 0.06);
  }

  &__category-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.6rem;
    padding-top: 2.4rem;
    padding-bottom: 2.4rem;
  }
}
</style>
