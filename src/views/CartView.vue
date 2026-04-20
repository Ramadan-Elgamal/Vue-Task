<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useCartStore } from "../stores/cartStore";

const cartStore = useCartStore();

const name = ref("");
const address = ref("");

const isFormValid = computed(() => {
    return name.value.trim() !== "" && address.value.trim() !== "";
});

const handleCheckout = () => {
    if (isFormValid.value) {
        alert(`Order placed for ${name.value}!`);
        cartStore.clearCart();
        name.value = "";
        address.value = "";
    }
};

onMounted(() => console.log("CartView mounted"));
onUnmounted(() => console.log("CartView unmounted"));
</script>

<template>
    <div class="pt-32 px-8 min-h-screen max-w-screen-xl mx-auto">
        <h1 class="font-headline text-5xl font-bold text-primary mb-12">
            YOUR CART
        </h1>

        <div
            v-if="cartStore.items.length === 0"
            class="text-center py-20 bg-surface-container rounded-lg"
        >
            <span
                class="material-symbols-outlined text-6xl text-on-surface-variant mb-4"
                >production_quantity_limits</span
            >
            <h2 class="text-2xl font-headline text-on-surface-variant">
                Your cart is empty
            </h2>
        </div>

        <div v-else class="flex flex-col lg:flex-row gap-12">
            <div class="flex-grow space-y-6">
                <div
                    v-for="item in cartStore.items"
                    :key="item.id"
                    class="flex items-center gap-6 bg-surface-container p-6 rounded-lg border border-outline-variant/20"
                >
                    <img
                        :src="item.image.src"
                        :alt="item.name"
                        class="w-24 h-24 object-contain bg-surface-container-highest rounded"
                    />
                    <div class="flex-grow">
                        <h3 class="font-headline text-xl font-bold">
                            {{ item.name }}
                        </h3>
                        <p class="text-on-surface-variant">
                            Qty: {{ item.qty }}
                        </p>
                    </div>
                    <div class="text-right">
                        <p class="font-bold text-lg mb-2">
                            ${{
                                (
                                    item.price.replace(/[^0-9.-]+/g, "") *
                                    item.qty
                                ).toFixed(2)
                            }}
                        </p>
                        <button
                            @click="cartStore.removeFromCart(item.id)"
                            class="text-error text-sm font-bold uppercase hover:opacity-80 transition-opacity"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            </div>

            <div
                class="w-full lg:w-96 bg-surface-container p-8 rounded-lg border border-outline-variant/20 h-max"
            >
                <h3
                    class="font-headline text-2xl font-bold mb-6 border-b border-outline-variant/30 pb-4"
                >
                    Order Summary
                </h3>
                <div class="flex justify-between items-center mb-8">
                    <span class="text-on-surface-variant">Total</span>
                    <span class="font-headline text-3xl font-bold text-primary"
                        >${{ cartStore.totalPrice.toFixed(2) }}</span
                    >
                </div>

                <form @submit.prevent="handleCheckout" class="space-y-4">
                    <div>
                        <label
                            class="block text-sm font-bold mb-2 text-on-surface-variant"
                            >Name</label
                        >
                        <input
                            v-model="name"
                            type="text"
                            class="w-full bg-background border border-outline-variant/50 rounded p-3 text-on-surface focus:border-primary outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label
                            class="block text-sm font-bold mb-2 text-on-surface-variant"
                            >Address</label
                        >
                        <textarea
                            v-model="address"
                            class="w-full bg-background border border-outline-variant/50 rounded p-3 text-on-surface focus:border-primary outline-none"
                            rows="3"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        :disabled="!isFormValid"
                        class="w-full bg-primary text-on-primary py-4 rounded font-label font-bold uppercase tracking-widest mt-4 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-dim transition-colors"
                    >
                        Checkout
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>
