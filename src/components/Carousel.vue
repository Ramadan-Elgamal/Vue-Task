<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const slides = [
    {
        id: 1,
        title: "THE NEW STANDARD",
        subtitle: "Experience raw power and refined elegance with the all-new MK-Blade Ultra.",
        ctaText: "Pre-order Now",
        image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=2560&auto=format&fit=crop", // Placeholder sleek tech image
    },
    {
        id: 2,
        title: "IMMERSIVE AUDIO",
        subtitle: "Spatial computing meets acoustic perfection in the Sonic Prism.",
        ctaText: "Discover Audio",
        image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?q=80&w=2560&auto=format&fit=crop", 
    },
    {
        id: 3,
        title: "CAPTURE REALITY",
        subtitle: "Ultra-low distortion optics engineered for true cinematic precision.",
        ctaText: "Shop Lenses",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2560&auto=format&fit=crop", 
    }
]

const currentSlide = ref(0)
let autoplayInterval = null

const nextSlide = () => {
    currentSlide.value = currentSlide.value === slides.length - 1 ? 0 : currentSlide.value + 1
    resetAutoplay()
}

const prevSlide = () => {
    currentSlide.value = currentSlide.value === 0 ? slides.length - 1 : currentSlide.value - 1
    resetAutoplay()
}

const goToSlide = (index) => {
    currentSlide.value = index
    resetAutoplay()
}

const startAutoplay = () => {
    autoplayInterval = setInterval(() => {
        currentSlide.value = currentSlide.value === slides.length - 1 ? 0 : currentSlide.value + 1
    }, 3000)
}

const resetAutoplay = () => {
    clearInterval(autoplayInterval)
    startAutoplay()
}

onMounted(() => startAutoplay())
onUnmounted(() => clearInterval(autoplayInterval))
</script>

<template>
    <section class="relative w-full h-[calc(100vh-80px)] overflow-hidden bg-background group">
        
        <div 
            class="flex h-full transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
            <div 
                v-for="slide in slides" 
                :key="slide.id" 
                class="w-full h-full flex-shrink-0 relative"
            >
                <img :src="slide.image" :alt="slide.title" class="absolute inset-0 w-full h-full object-cover z-0" />
                <div class="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10"></div>
                <div class="absolute inset-0 bg-background/30 z-10"></div>

                <div class="relative z-20 w-full max-w-screen-2xl mx-auto h-full px-8 flex flex-col justify-center">
                    <div class="max-w-2xl">
                        <h1 class="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface mb-6 leading-tight">
                            {{ slide.title }}
                        </h1>
                        <p class="font-body text-lg md:text-xl text-on-surface-variant mb-10 max-w-lg">
                            {{ slide.subtitle }}
                        </p>
                        <button class="bg-primary text-on-primary hover:bg-primary-dim transition-all duration-300 font-label font-bold uppercase tracking-widest text-sm px-8 py-4 rounded hover:shadow-[0_0_20px_rgba(170,255,220,0.4)] flex items-center gap-2 w-max">
                            {{ slide.ctaText }}
                            <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <button 
            @click="prevSlide" 
            aria-label="Previous Slide"
            class="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-surface-container/50 hover:bg-surface-container backdrop-blur border border-outline-variant/30 text-primary p-3 rounded-full opacity-0 md:group-hover:opacity-100 transition-all duration-300"
        >
            <span class="material-symbols-outlined">chevron_left</span>
        </button>
        <button 
            @click="nextSlide" 
            aria-label="Next Slide"
            class="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-surface-container/50 hover:bg-surface-container backdrop-blur border border-outline-variant/30 text-primary p-3 rounded-full opacity-0 md:group-hover:opacity-100 transition-all duration-300"
        >
            <span class="material-symbols-outlined">chevron_right</span>
        </button>

        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
            <button 
                v-for="(slide, index) in slides" 
                :key="slide.id"
                @click="goToSlide(index)"
                :aria-label="`Go to slide ${index + 1}`"
                class="w-3 h-3 rounded-full transition-all duration-500"
                :class="currentSlide === index ? 'bg-primary w-8' : 'bg-surface-variant hover:bg-outline'"
            ></button>
        </div>

    </section>
</template>
