<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const { banners, interval = 4000 } = defineProps({
  banners: { type: Array, required: true },
  interval: Number,
})

const autoplay = {
  delay: interval,
  disableOnInteraction: false,
}
</script>

<template>
  <section class="banner">
    <Swiper :modules="[Autoplay]" loop :autoplay="autoplay">
      <SwiperSlide v-for="banner in banners" :key="banner.id">
        <img :src="banner.image" alt="" />
      </SwiperSlide>
    </Swiper>
  </section>
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
    font-size: 1.3rem;
    color: $color-white;

    button {
      @include flex-center;
      width: 2.4rem;
      height: 2.4rem;
    }
  }
}
</style>
