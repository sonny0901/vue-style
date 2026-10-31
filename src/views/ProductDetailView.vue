<script setup>
import { ref, computed } from 'vue'
import { products } from '@/mocks/products'
import { useCartStore } from '@/stores/cart'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseBadge from '@/components/base/BaseBadge.vue'
import BaseModal from '@/components/base/BaseModal.vue'
import Breadcrumb from '@/components/common/Breadcrumb.vue'
import TabMenu from '@/components/common/TabMenu.vue'
import QuantityStepper from '@/components/common/QuantityStepper.vue'
import EmptyState from '@/components/common/EmptyState.vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
import ProductPrice from '@/components/product/ProductPrice.vue'
import ProductList from '@/components/product/ProductList.vue'

const { id } = defineProps({
  id: { type: String, required: true }, // 라우트 params
})

const product = computed(() => products.find((item) => item.id === Number(id)))

const quantity = ref(1)
const activeTab = ref('detail')
const tabs = [
  { id: 'detail', label: '상품정보' },
  { id: 'review', label: '리뷰' },
  { id: 'qna', label: '문의' },
]

const cart = useCartStore()
const isCartModalOpen = ref(false)
const addToCart = () => {
  cart.add(product.value, quantity.value)
  isCartModalOpen.value = true
}
</script>

<template>
  <div v-if="product" class="detail inner">
    <Breadcrumb :items="[{ label: '전체상품', to: '/products' }, { label: product.name }]" />

    <div class="detail__top">
      <div class="detail__gallery">
        <img :src="product.image" :alt="product.name" />
      </div>

      <div class="detail__info">
        <p class="detail__brand">{{ product.brand }}</p>
        <h2 class="detail__name">{{ product.name }}</h2>
        <div v-if="product.badges.length" class="detail__badges">
          <BaseBadge v-for="badge in product.badges" :key="badge" variant="outline">
            {{ badge }}
          </BaseBadge>
        </div>

        <ProductPrice :price="product.price" :sale-price="product.salePrice" size="lg" />

        <dl class="detail__meta">
          <dt>배송</dt>
          <dd>무료배송 · 1~3일 이내 출고</dd>
          <dt>수량</dt>
          <dd><QuantityStepper v-model="quantity" /></dd>
        </dl>

        <div class="detail__actions">
          <BaseButton variant="outline" size="lg" @click="addToCart">장바구니</BaseButton>
          <BaseButton size="lg">바로구매</BaseButton>
        </div>
      </div>
    </div>

    <TabMenu v-model="activeTab" :tabs="tabs" class="detail__tab">
      <template #panel-detail>
        <p>상품 상세 정보 영역</p>
      </template>
      <template #panel-review>
        <EmptyState message="아직 작성된 리뷰가 없습니다." />
      </template>
      <template #panel-qna>
        <EmptyState message="등록된 문의가 없습니다.">
          <BaseButton variant="outline" size="sm">문의하기</BaseButton>
        </EmptyState>
      </template>
    </TabMenu>

    <section class="detail__related">
      <SectionTitle title="함께 보면 좋은 상품" />
      <ProductList :products="products.slice(0, 4)" />
    </section>

    <BaseModal v-model:open="isCartModalOpen" title="장바구니 담기">
      <p>상품이 장바구니에 담겼습니다.</p>
      <template #footer="{ close }">
        <BaseButton variant="outline" @click="close">계속 쇼핑</BaseButton>
        <BaseButton to="/cart">장바구니 보기</BaseButton>
      </template>
    </BaseModal>
  </div>

  <EmptyState v-else message="존재하지 않는 상품입니다.">
    <BaseButton to="/" variant="outline">홈으로</BaseButton>
  </EmptyState>
</template>

<style scoped lang="scss">
.detail {
  &__top {
    display: grid;
    gap: 2.4rem;
  }

  &__gallery {
    overflow: hidden;
    aspect-ratio: 1;
    border-radius: $radius-md;
    background: $color-gray-100;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  &__brand {
    font-weight: 700;
  }

  &__name {
    font-size: $font-size-lg;
    font-weight: 700;
    line-height: 1.4;
  }

  &__badges {
    display: flex;
    gap: 0.4rem;
  }

  &__meta {
    display: grid;
    grid-template-columns: 8rem 1fr;
    align-items: center;
    gap: 1.6rem 0;
    padding: 2rem 0;
    border-top: 1px solid $color-gray-200;
    border-bottom: 1px solid $color-gray-200;
    font-size: $font-size-md;

    dt {
      color: $color-gray-500;
    }
  }

  &__actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.8rem;
    margin-top: auto;
  }

  &__tab,
  &__related {
    margin-top: 4.8rem;
  }
}
</style>
