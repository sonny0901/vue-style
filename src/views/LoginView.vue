<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import BaseButton from '@/components/base/BaseButton.vue'

const userId = ref('')
const password = ref('')
const keepLogin = ref(false)
</script>

<template>
  <form class="login" @submit.prevent>
    <h2 class="blind">로그인</h2>
    <BaseInput v-model="userId" label="아이디" placeholder="아이디를 입력해 주세요" />
    <BaseInput
      v-model="password"
      label="비밀번호"
      type="password"
      placeholder="비밀번호를 입력해 주세요"
    />
    <BaseCheckbox v-model="keepLogin">로그인 상태 유지</BaseCheckbox>
    <BaseButton type="submit" size="lg" block>로그인</BaseButton>

    <ul class="login__links">
      <li><RouterLink to="/">아이디 찾기</RouterLink></li>
      <li><RouterLink to="/">비밀번호 찾기</RouterLink></li>
      <li><RouterLink to="/">회원가입</RouterLink></li>
    </ul>
  </form>
</template>

<style scoped lang="scss">
.login {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  &__links {
    display: flex;
    justify-content: center;
    font-size: $font-size-sm;
    color: $color-gray-500;

    li + li::before {
      content: '|';
      margin: 0 1.2rem;
      color: $color-gray-300;
    }
  }
}
</style>
