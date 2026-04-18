import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useApi } from '../composables/useApi'

export const useProductStore = defineStore('product', () => {
  const { data, error, loading, getAll, update } = useApi('http://localhost:3000/products')
  
  const products = ref([])

  const fetchProducts = async () => {
    await getAll()
    if (data.value) {
      products.value = data.value
    }
  }
  const decreaseStock = async (productId) => {
    const product = products.value.find(p => p.id === productId)
    
    if (product && product.stock > 0) {
      product.stock--;
      await update(productId, product) 
    }
  }

  const getProductById = computed(() => {
    return (id) => products.value.find(p => p.id === Number(id))
  })

  return { 
    products, 
    loading, 
    error, 
    fetchProducts, 
    decreaseStock, 
    getProductById 
  }
})
