<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { onMounted, onUnmounted } from "vue";
import { useCartStore } from "../stores/cartStore";

const cartStore = useCartStore();

onMounted(() => console.log("Navbar mounted"));
onUnmounted(() => console.log("Navbar unmounted"));

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
    <nav
        class="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl shadow-none duration-300 ease-in-out"
    >
        <div
            class="flex justify-between items-center px-8 h-20 w-full max-w-screen-2xl mx-auto"
        >
            <a
                class="text-2xl font-bold tracking-tighter text-primary brand-logo"
                href="#"
            >
                MONOLITH
            </a>

            <div
                class="hidden md:flex gap-8 font-headline uppercase tracking-widest"
            >
                <RouterLink
                    to="/"
                    class="text-primary font-bold border-b-2 border-primary pb-1 hover:opacity-80 transition-opacity duration-300 ease-in-out"
                    href="#"
                >
                    Home
                </RouterLink>
                <RouterLink
                    to="/about"
                    class="text-on-surface-variant hover:text-primary transition-colors hover:opacity-80 duration-300 ease-in-out"
                    href="#"
                >
                    About
                </RouterLink>
                <a
                    class="text-on-surface-variant hover:text-primary transition-colors hover:opacity-80 duration-300 ease-in-out"
                    href="#"
                >
                    Contact
                </a>
            </div>

            <div class="flex gap-4 items-center">
                <RouterLink
                    to="/cart"
                    aria-label="shopping_cart"
                    class="text-primary hover:opacity-80 transition-opacity duration-300 ease-in-out relative"
                >
                    <span
                        class="material-symbols-outlined"
                        data-icon="shopping_cart"
                        >shopping_cart</span
                    >
                    <span
                        v-if="cartStore.totalItems > 0"
                        class="absolute -top-2 -right-2 bg-error text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                    >
                        {{ cartStore.totalItems }}
                    </span>
                </RouterLink>
            </div>
        </div>

        <div
            v-show="isMenuOpen"
            class="md:hidden absolute top-20 left-0 w-full bg-surface-container-high/95 backdrop-blur-xl border-t border-surface-variant shadow-lg"
        >
            <div
                class="flex flex-col px-8 py-6 gap-6 font-headline uppercase tracking-widest"
            >
                <RouterLink
                    to="/"
                    href="#"
                    @click="isMenuOpen = false"
                    class="text-primary font-bold border-b-2 border-primary pb-1 w-max"
                >
                    Home
                </RouterLink>
                <RouterLink
                    to="/about"
                    href="#"
                    @click="isMenuOpen = false"
                    class="text-on-surface-variant hover:text-primary transition-colors"
                >
                    About
                </RouterLink>
                <a
                    href="#"
                    @click="isMenuOpen = false"
                    class="text-on-surface-variant hover:text-primary transition-colors"
                >
                    Contact
                </a>
            </div>
        </div>
    </nav>
</template>
