<script setup>
const props = defineProps({
    items: {
        type: Array,
        required: true
    }
});

// Helper function to calculate the discounted price
const getDiscountedPrice = (priceString, discountPercentage) => {
    if (!discountPercentage) return priceString;

    const numericPrice = parseFloat(priceString.replace(/[^0-9.-]+/g, ""));
    const numericDiscount = parseFloat(discountPercentage);

    const discountedValue =
        numericPrice - numericPrice * (numericDiscount / 100);

    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(discountedValue);
};
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
                <div
                    v-for="product in props.items"
                    :key="product.name"
                    class="bg-surface-container rounded-lg p-6 flex flex-col relative overflow-hidden group hover:bg-surface-container-highest transition-colors duration-500 h-full"
                >
                    <div
                        v-if="product.discount"
                        class="absolute top-4 right-4 z-20"
                    >
                        <span
                            class="bg-error/20 text-error font-label text-[10px] uppercase font-bold px-2 py-1 rounded"
                        >
                            {{ product.discount }}% OFF
                        </span>
                    </div>

                    <div class="relative w-full h-48 mb-6 z-0 flex-shrink-0">
                        <div
                            class="absolute inset-0 bg-tertiary-dim/5 blur-[30px] rounded-full z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        ></div>
                        <img
                            :src="product.image.src"
                            :alt="product.image.alt"
                            class="object-contain w-full h-full relative z-10 transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>

                    <div class="flex flex-col flex-grow z-10">
                        <h3 class="font-headline text-xl font-bold mb-2">
                            {{ product.name }}
                        </h3>

                        <p
                            class="text-on-surface-variant font-body text-sm mb-4 line-clamp-2"
                        >
                            {{ product.description }}
                        </p>

                        <div class="mt-auto mb-6 flex flex-col">
                            <div class="flex items-baseline gap-2">
                                <span
                                    v-if="product.discount"
                                    class="text-xl font-bold text-primary font-headline"
                                >
                                    {{
                                        getDiscountedPrice(
                                            product.price,
                                            product.discount
                                        )
                                    }}
                                </span>

                                <span
                                    :class="
                                        product.discount
                                            ? 'line-through text-on-surface-variant text-sm font-label'
                                            : 'text-xl font-bold text-primary font-headline'
                                    "
                                >
                                    {{ product.price }}
                                </span>
                            </div>
                        </div>

                        <div
                            class="flex flex-col xl:flex-row gap-3 mt-auto pt-4 border-t border-outline-variant/20"
                        >
                            <button
                                class="flex-1 bg-surface-container-highest border border-outline-variant/30 text-primary hover:bg-surface-container-high transition-colors font-label text-xs uppercase tracking-widest font-bold py-3 rounded text-center"
                            >
                                Details
                            </button>

                            <button
                                :disabled="product.stock <= 0"
                                class="flex-1 bg-primary text-on-primary font-label text-xs uppercase tracking-widest font-bold py-3 rounded text-center flex items-center justify-center gap-1 transition-all duration-300 hover:bg-primary-dim hover:shadow-[0_0_15px_rgba(170,255,220,0.4)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary disabled:hover:shadow-none"
                            >
                                <span
                                    class="material-symbols-outlined text-[18px]"
                                >
                                    {{
                                        product.stock <= 0
                                            ? "remove_shopping_cart"
                                            : "add_shopping_cart"
                                    }}
                                </span>
                                {{
                                    product.stock <= 0 ? "Out of Stock" : "Add"
                                }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
