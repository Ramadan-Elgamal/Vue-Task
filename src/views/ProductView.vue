<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useProductStore } from '../stores/productStore'
import ProductDetails from '../components/ProductDetails.vue'
import RelatedProducts from '../components/RelatedProducts.vue'

const route = useRoute()
const productStore = useProductStore()

const product = computed(() => {
    return productStore.getProductById(route.params.id)
})

const relatedProducts = computed(() => {
    return productStore.products.filter(p => p.id !== Number(route.params.id))
})

onMounted(() => {
    console.log(`ProductView mounted for ID: ${route.params.id}`);
    if (productStore.products.length === 0) {
        productStore.fetchProducts();
    }
})
onUnmounted(() => console.log('ProductView unmounted'))
</script>

<template>
    <div class="pt-32 px-8 min-h-screen">
        <ProductDetails 
            v-if="product" 
            :product="product" 
            />
        <div v-else-if="!productStore.loading" class="text-center py-32 text-error text-2xl font-headline">
            Product not found.
        </div>
        
        <div v-if="product">
             <h2 class="font-headline text-3xl font-bold mt-24 mb-8 max-w-screen-xl mx-auto">Related Products</h2>
             <RelatedProducts :items="relatedProducts" />
        </div>
    </div>
</template>
