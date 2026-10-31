// 129000 → '129,000'
export const formatPrice = (value) => value.toLocaleString('ko-KR')

// 할인율 (%)
export const discountRate = (price, salePrice) =>
  price > salePrice ? Math.round(((price - salePrice) / price) * 100) : 0
