<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
    <nav class="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl shadow-none duration-300 ease-in-out">
        <div class="flex justify-between items-center px-8 h-20 w-full max-w-screen-2xl mx-auto">
            <a class="text-2xl font-bold tracking-tighter text-primary brand-logo" href="#">
                MONOLITH
            </a>

            <div class="hidden md:flex gap-8 font-headline uppercase tracking-widest">
                <a class="text-primary font-bold border-b-2 border-primary pb-1 hover:opacity-80 transition-opacity duration-300 ease-in-out" href="#">
                    Home
                </a>
                <a class="text-on-surface-variant hover:text-primary transition-colors hover:opacity-80 duration-300 ease-in-out" href="#">
                    About
                </a>
                <a class="text-on-surface-variant hover:text-primary transition-colors hover:opacity-80 duration-300 ease-in-out" href="#">
                    Contact
                </a>
            </div>

            <div class="flex gap-4 items-center">
                <button aria-label="shopping_cart" class="text-primary hover:opacity-80 transition-opacity duration-300 ease-in-out">
                    <span class="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
                </button>
                <button aria-label="account_circle" class="text-primary hover:opacity-80 transition-opacity duration-300 ease-in-out">
                    <span class="material-symbols-outlined" data-icon="account_circle">account_circle</span>
                </button>

                <button 
                    @click="toggleMenu" 
                    aria-label="toggle menu" 
                    class="md:hidden text-primary hover:opacity-80 transition-opacity duration-300 ease-in-out ml-2"
                >
                    <span class="material-symbols-outlined">
                        {{ isMenuOpen ? 'close' : 'menu' }}
                    </span>
                </button>
            </div>
        </div>

        <div 
            v-show="isMenuOpen" 
            class="md:hidden absolute top-20 left-0 w-full bg-surface-container-high/95 backdrop-blur-xl border-t border-surface-variant shadow-lg"
        >
            <div class="flex flex-col px-8 py-6 gap-6 font-headline uppercase tracking-widest">
                <a href="#" @click="isMenuOpen = false" class="text-primary font-bold border-b-2 border-primary pb-1 w-max">
                    Home
                </a>
                <a href="#" @click="isMenuOpen = false" class="text-on-surface-variant hover:text-primary transition-colors">
                    About
                </a>
                <a href="#" @click="isMenuOpen = false" class="text-on-surface-variant hover:text-primary transition-colors">
                    Contact
                </a>
            </div>
        </div>
    </nav>
</template>
