<script setup>
import ProductCard from './ProductCard.vue'
import { onMounted, onUnmounted } from 'vue';

onMounted(() => console.log('RelatedProducts mounted'));
onUnmounted(() => console.log('Related Products unmounted'));

const props = defineProps({
    items: {
        type: Array,
        required: true
    }
});

const emit = defineEmits(['buy']);

</script>

<template>
    <section class="py-32 bg-surface-container-low relative">
        <div class="max-w-screen-2xl mx-auto px-8">
            
            <div class="flex flex-col md:flex-row md:justify-between items-start md:items-end gap-6 md:gap-0 mb-16">
                <h2 class="font-headline text-4xl md:text-5xl font-bold tracking-tight">
                    EXPLORE THE<br />ECOSYSTEM
                </h2>
                <a class="text-primary hover:text-primary-container transition-colors font-body font-bold flex items-center gap-2" href="#">
                    View All Systems
                    <span class="material-symbols-outlined">east</span>
                </a>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ProductCard 
                    v-for="item in props.items" 
                    :key="item.id" 
                    :product="item" 
                    @buy="(id) => emit('buy',id)"
                />
            </div>
            
        </div>
    </section>
</template>
