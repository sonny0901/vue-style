<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import BaseIcon from '@/components/base/BaseIcon.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

// banners: [{ id, title, image }]
const { banners, interval = 4000 } = defineProps({
  banners: { type: Array, required: true },
  interval: Number,
})

const current = ref(0)
let timer = null

const go = (index) => (current.value = (index + banners.length) % banners.length)
const start = () => (timer = setInterval(() => go(current.value + 1), interval))
const stop = () => clearInterval(timer)

onMounted(start)
onBeforeUnmount(stop)
</script>

<template>
  <section class="banner">
    <Swiper>
      <SwiperSlide v-for="(banner, index) in banners" :key="banner.id">
        <img :src="banner.image" alt="" />
      </SwiperSlide>
    </Swiper>
  </section>

  <!-- <section
    class="banner"
    aria-roledescription="carousel"
    aria-label="메인 배너"
    @mouseenter="stop"
    @mouseleave="start"
  >
    <ul class="banner__list">
      <li
        v-for="(banner, index) in banners"
        :key="banner.id"
        class="banner__item"
        :class="{ 'is-active': index === current }"
        :aria-hidden="index !== current"
      >
        <img :src="banner.image" alt="" />
        <p class="banner__title">{{ banner.title }}</p>
      </li>
    </ul>

    <div class="banner__control">
      <button type="button" @click="go(current - 1)">
        <BaseIcon name="arrow-left" :size="16" />
        <span class="blind">이전 배너</span>
      </button>
      <span class="banner__count">
        <strong>{{ current + 1 }}</strong> / {{ banners.length }}
      </span>
      <button type="button" @click="go(current + 1)">
        <BaseIcon name="arrow-right" :size="16" />
        <span class="blind">다음 배너</span>
      </button>
    </div>
  </section> -->
</template>

<style scoped lang="scss">
.banner {
  position: relative;
  padding-bottom: 100%;
  overflow: hidden;
  background: $color-gray-100;

  .swiper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .swiper-slide img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__item {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.6s ease;

    &.is-active {
      opacity: 1;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__title {
    position: absolute;
    left: 2rem;
    bottom: 2.4rem;
    font-size: 2.4rem;
    font-weight: 800;
    line-height: 1.25;
    white-space: pre-line;
    color: $color-white;
    text-shadow: 0 0.2rem 1.2rem rgba(0, 0, 0, 0.3);
  }

  &__control {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    position: absolute;
    right: 1.2rem;
    bottom: 1.2rem;
    height: 3.2rem;
    padding: 0 0.8rem;
    border-radius: 1.6rem;
    background: rgba(0, 0, 0, 0.4);
    font-size: $font-size-sm;
    color: $color-white;

    button {
      @include flex-center;
      width: 2.4rem;
      height: 2.4rem;
    }
  }
}
</style>
