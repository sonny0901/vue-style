<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import { useScrollY } from '@/composables/useScrollY'
import BaseIcon from '@/components/base/BaseIcon.vue'
import SearchBar from '@/components/common/SearchBar.vue'
import AppGnb from './AppGnb.vue'

const cart = useCartStore()
const { scrollY } = useScrollY()

const isScrolled = computed(() => scrollY.value > 0)

const route = useRoute()

// 헤더 고정
const isFixed = computed(() => !!route.meta.headerFixed)
</script>
<template>
  <header class="header" :class="{ 'is-fixed': isFixed, 'is-scrolled': isScrolled }">
    <div class="header__wrap">
      <h1 class="header__logo">
        <RouterLink to="/"><span class="blind">CJONSTYLE</span></RouterLink>
      </h1>

      <SearchBar class="header__search" />

      <RouterLink to="/cart" class="header__link-cart">
        <BaseIcon name="cart" />
        <em v-if="cart.count" class="header__cart-count">
          <span class="blind">담긴 상품 수</span>{{ cart.count }}
        </em>
        <span class="blind">장바구니</span>
      </RouterLink>
    </div>

    <AppGnb />
  </header>
</template>

<style scoped lang="scss">
$logo-black: 'https://image.cjonstyle.net/public/confirm/static/deploy/webjars/ec-markup-common/dist/common-cjmall-mobile/others/1dc9aa0bec6d5d90480633285f5107ce/img/common/cjmall/m/hometab/ic_bi_b.svg';
$logo-white: 'https://image.cjonstyle.net/public/confirm/static/deploy/webjars/ec-markup-common/dist/common-cjmall-mobile/others/5863e4a2151bb1aa1394999427976c47/img/common/cjmall/m/hometab/ic_bi_w.svg';

// 기본: 일반 헤더 (홈 외 탭, 홈 스크롤 후)
.header {
  position: relative;
  z-index: $z-header;
  background: $color-white;
  box-shadow: 0 0.2rem 0.8rem rgba(0, 0, 0, 0.06);

  &__wrap {
    display: flex;
    align-items: center;
    height: $header-height;
  }

  &__logo {
    flex-shrink: 0;

    a {
      display: block;
      width: 11.4rem;
      height: 5rem;
      margin-left: 1.8rem;
      background: url($logo-black) no-repeat center / contain;
    }
  }

  &__search {
    flex: 1;
    min-width: 0;
    max-width: 48rem;
    margin-left: 2rem;
  }

  &__link-cart {
    @include flex-center;
    position: relative;
    flex-shrink: 0;
    width: 4rem;
    height: 4rem;
  }

  &__cart-count {
    @include flex-center;
    position: absolute;
    top: 0.2rem;
    right: 0;
    min-width: 1.6rem;
    height: 1.6rem;
    padding: 0 0.4rem;
    border-radius: 0.8rem;
    background: $color-primary;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    color: $color-white;
  }

  // 홈(meta.headerFixed): 상단 고정
  &.is-fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }

  // 홈 + 맨 위: 배너 위 투명 헤더
  &.is-fixed:not(.is-scrolled) {
    background: transparent;
    box-shadow: none;

    .header__logo a {
      background-image: url($logo-white);
    }

    // GNB(AppGnb) 링크는 자식 컴포넌트 내부라 :deep 필요 (active는 primary 색 유지)
    :deep(.gnb__link:not(.is-active)) {
      color: $color-white;
    }
  }
}
</style>
