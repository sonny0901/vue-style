import { ref, onMounted, onBeforeUnmount } from 'vue'

// 현재 스크롤 위치 (sticky 헤더, top 버튼 등에 사용)
export function useScrollY() {
  const scrollY = ref(0)

  const onScroll = () => (scrollY.value = window.scrollY)

  onMounted(() => {
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
  })
  onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

  return { scrollY }
}
