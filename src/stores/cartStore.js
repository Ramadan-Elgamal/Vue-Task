import { defineStore } from 'pinia'
import { computed } from 'vue'
import { useLocalStorage } from '../composables/useLocalStorage'
import { useProductStore } from './productStore'

export const useCartStore = defineStore('cart', () => {
  const items = useLocalStorage('cart', [])

  const totalItems = computed(() => {
    return items.value.reduce((sum, item) => sum + item.qty, 0)
  })

  const totalPrice = computed(() => {
    return items.value.reduce((sum, item) => {
      const actualPrice = item.discount 
        ? item.price - (item.price * (item.discount / 100)) 
        : item.price;
      return sum + (actualPrice * item.qty)
    }, 0)
  })

  const addToCart = (product) => {
    const productStore = useProductStore()
    
    if (product.stock <= 0) return 

    const existingItem = items.value.find(i => i.id === product.id)
    
    if (existingItem) {
      existingItem.qty++
    } else {
      items.value.push({ ...product, qty: 1 })
    }
    productStore.decreaseStock(product.id)
  }

  const removeFromCart = (id) => {
    items.value = items.value.filter(i => i.id !== id)
  }

  const clearCart = () => {
    items.value = []
  }

  return { 
    items, 
    totalItems, 
    totalPrice, 
    addToCart, 
    removeFromCart, 
    clearCart 
  }
})
