<script setup>
import { onMounted, onUnmounted } from "vue";
import { useCartStore } from "../stores/cartStore";

onMounted(() => console.log("Product Details mounted"));
onUnmounted(() => console.log("Product Details unmounted"));

const props = defineProps({
    product: {
        type: Object,
        required: true
    }
});
</script>

<template>
    <div class="flex flex-col md:flex-row gap-12 max-w-screen-xl mx-auto">
        <div class="flex-1 bg-surface-container rounded-lg p-8">
            <img
                :src="product.image.src"
                :alt="product.name"
                class="w-full object-contain"
            />
        </div>

        <div class="flex-1 flex flex-col justify-center">
            <h1 class="text-4xl font-bold text-primary mb-4">
                {{ product.name }}
            </h1>
            <p class="text-xl text-white mb-2">{{ product.price }}</p>
            <p class="text-sm text-gray-400 mb-6">Stock: {{ product.stock }}</p>

            <button
                @click="cartStore.addToCart(product)"
                :disabled="product.stock <= 0"
                class="bg-primary text-on-primary px-8 py-4 rounded font-label font-bold uppercase tracking-widest transition-all duration-300 hover:bg-primary-dim hover:shadow-[0_0_20px_rgba(170,255,220,0.4)] hover:-translate-y-1 active:scale-95 active:shadow-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary disabled:hover:shadow-none disabled:hover:translate-y-0 disabled:active:scale-100"
            >
                {{ product.stock > 0 ? "Buy Now" : "Out of Stock" }}
            </button>
        </div>
    </div>
</template>
