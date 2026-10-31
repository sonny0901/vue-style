<script setup>
// 아이콘 추가: icons 객체에 path(d) 추가 (24x24 viewBox 기준)
const icons = {
  search: 'M10.5 3a7.5 7.5 0 0 1 5.96 12.05l4.24 4.24-1.41 1.41-4.24-4.24A7.5 7.5 0 1 1 10.5 3Zm0 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z',
  cart: 'M3 4h2.2l2.1 10.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 1.9-1.4L21 8H7.1L6.7 6H21V4H6.3l-.4-2H3v2Zm6 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm8 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z',
  user: 'M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-8a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm-8 18a8 8 0 0 1 16 0h-2a6 6 0 0 0-12 0H4Z',
  heart: 'M12 21s-7.5-4.6-9.6-9.3C.8 8.1 3 4 7 4c2.1 0 3.6 1.2 5 3 1.4-1.8 2.9-3 5-3 4 0 6.2 4.1 4.6 7.7C19.5 16.4 12 21 12 21Z',
  menu: 'M3 5h18v2H3V5Zm0 6h18v2H3v-2Zm0 6h18v2H3v-2Z',
  close: 'm12 10.6 5.3-5.3 1.4 1.4-5.3 5.3 5.3 5.3-1.4 1.4-5.3-5.3-5.3 5.3-1.4-1.4 5.3-5.3-5.3-5.3 1.4-1.4 5.3 5.3Z',
  'arrow-right': 'm9.3 5.3 1.4-1.4 8.1 8.1-8.1 8.1-1.4-1.4 6.7-6.7-6.7-6.7Z',
  'arrow-left': 'm14.7 5.3-1.4-1.4L5.2 12l8.1 8.1 1.4-1.4L8 12l6.7-6.7Z',
  'arrow-up': 'm12 5.2 8.1 8.1-1.4 1.4L12 8l-6.7 6.7-1.4-1.4L12 5.2Z',
  star: 'm12 2 3 6.3 6.9.9-5 4.8 1.2 6.9L12 17.6 5.9 20.9 7.1 14l-5-4.8 6.9-.9L12 2Z',
  plus: 'M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6V5Z',
  minus: 'M5 11h14v2H5v-2Z',
}

const { name, size = 24 } = defineProps({
  name: { type: String, required: true },
  size: Number, // 디자인 px 값 → rem으로 변환 (24 → 2.4rem)
})
</script>

<template>
  <svg
    class="icon"
    :style="{ width: `${size / 10}rem`, height: `${size / 10}rem` }"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <path :d="icons[name]" />
  </svg>
</template>

<style scoped lang="scss">
.icon {
  flex-shrink: 0;
}
</style>
