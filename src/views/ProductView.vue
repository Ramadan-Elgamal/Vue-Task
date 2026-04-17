<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ProductDetails from '../components/ProductDetails.vue'

const props = defineProps({
    products: {
        type: Array,
        required: true
    }
})

const emit = defineEmits(['buy'])

const route = useRoute()

const product = computed(() => {
    return props.products.find(p => p.id === Number(route.params.id))
})

const relayBuyEvent = (productId) => {
    emit('buy', productId)
}
</script>

<template>
    <div class="pt-32 px-8 min-h-screen">
        <ProductDetails 
            v-if="product" 
            :product="product" 
            @buy="relayBuyEvent" 
        />
        <div v-else class="text-center text-white">Product not found.</div>
    </div>
</template>
