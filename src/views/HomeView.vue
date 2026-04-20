<script setup>
import Carousel from "../components/Carousel.vue";
import RelatedProducts from "../components/RelatedProducts.vue";
import { onMounted, onUnmounted } from "vue";
import { useProductStore } from "../stores/productStore";
const productStore = useProductStore();

onMounted(() => {
    console.log('HomeView mounted');
    productStore.fetchProducts();
});
onUnmounted(() => console.log("HomeView unmounted"));
</script>

<template>
    <Carousel />
    <div
        v-if="productStore.loading"
        class="text-center py-32 text-primary font-headline text-2xl"
    >
        Loading products...
    </div>

    <div
        v-else-if="productStore.error"
        class="text-center py-32 text-error font-headline text-2xl"
    >
        {{ productStore.error }}
    </div>

    <RelatedProducts v-else :items="productStore.products" />
</template>
