<script setup>
import Carousel from "../components/Carousel.vue";
import RelatedProducts from "../components/RelatedProducts.vue";
const props = defineProps({
    products: {
        type: Array,
        required: true
    }
});


const emit = defineEmits(['buy']);

</script>

<template>
    <Carousel />
    <RelatedProducts :items="products" @buy="(id) => emit('buy', id)"/>
</template>
