<script setup>
import { RouterLink } from 'vue-router'
import { footerLinks } from '@/mocks/menus'
</script>

<template>
  <footer class="footer">
    <div class="footer__links-wrap">
      <ul class="footer__links inner">
        <li v-for="link in footerLinks" :key="link.label">
          <RouterLink :to="link.to" :class="{ 'is-strong': link.strong }">{{ link.label }}</RouterLink>
        </li>
      </ul>
    </div>

    <div class="footer__body inner">
      <div class="footer__info">
        <p class="footer__logo">ONSTYLE</p>
        <address class="footer__address">
          <span>상호명 (주)온스타일</span>
          <span>대표이사 홍길동</span>
          <span>사업자등록번호 000-00-00000</span>
          <span>주소 서울특별시 OO구 OO로 00</span>
        </address>
        <p class="footer__copy">© ONSTYLE. All rights reserved.</p>
      </div>

      <div class="footer__cs">
        <strong class="footer__cs-title">고객센터</strong>
        <p class="footer__cs-tel">1600-0000</p>
        <p class="footer__cs-time">평일 09:00 - 18:00 (주말·공휴일 휴무)</p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  margin-top: 8rem;
  border-top: 1px solid $color-gray-200;
  background: $color-gray-100;
  font-size: $font-size-sm;
  color: $color-gray-500;

  &__links-wrap {
    border-bottom: 1px solid $color-gray-200;
  }

  &__links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem 2.4rem;
    padding-top: 1.6rem;
    padding-bottom: 1.6rem;
    color: $color-gray-700;

    .is-strong {
      font-weight: 700;
      color: $color-gray-900;
    }
  }

  &__body {
    display: flex;
    flex-direction: column-reverse;
    gap: 2.4rem;
    padding-top: 3.2rem;
    padding-bottom: 4.8rem;
  }

  &__logo {
    margin-bottom: 1.2rem;
    font-size: $font-size-lg;
    font-weight: 900;
    color: $color-gray-700;
  }

  &__address {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem 1.2rem;
    font-style: normal;
  }

  &__copy {
    margin-top: 1.6rem;
  }

  &__cs {
    flex-shrink: 0;
  }

  &__cs-title {
    color: $color-gray-900;
  }

  &__cs-tel {
    margin: 0.4rem 0;
    font-size: $font-size-xl;
    font-weight: 800;
    color: $color-gray-900;
  }
}
</style>
