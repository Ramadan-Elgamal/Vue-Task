<script setup>
import Carousel from "../components/Carousel.vue";
import RelatedProducts from "../components/RelatedProducts.vue";
import { onMounted, onUnmounted } from 'vue';

const props = defineProps({
    products: {
        type: Array,
        required: true
    }
});


const emit = defineEmits(['buy']);


onMounted(() => console.log('HomeView mounted'));
onUnmounted(() => console.log('HomeView unmounted'));

</script>

<template>
    <Carousel />
    <RelatedProducts :items="products" @buy="(id) => emit('buy', id)"/>
</template>
