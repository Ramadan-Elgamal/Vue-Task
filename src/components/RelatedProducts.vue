<script setup></script>

<template>
    <section class="py-32 bg-surface-container-low relative">
        <div class="max-w-screen-2xl mx-auto px-8">
            <div class="flex justify-between items-end mb-16">
                <h2
                    class="font-headline text-4xl md:text-5xl font-bold tracking-tight"
                >
                    EXPLORE THE<br />ECOSYSTEM
                </h2>
                <a
                    class="text-primary hover:text-primary-container transition-colors font-body font-bold flex items-center gap-2"
                    href="#"
                >
                    View All Systems
                    <span class="material-symbols-outlined" data-icon="east"
                        >east</span
                    >
                </a>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- Product Card 1 (Large) -->
                <div
                    class="lg:col-span-2 lg:row-span-2 bg-surface-container rounded-lg p-8 relative overflow-hidden group hover:bg-surface-container-highest transition-colors duration-500 flex flex-col justify-between"
                >
                    <div class="flex justify-between items-start mb-8 z-10">
                        <div>
                            <h3 class="font-headline text-2xl font-bold mb-2">
                                MK-Blade Ultra
                            </h3>
                            <p
                                class="text-on-surface-variant font-label text-sm uppercase tracking-[0.05em]"
                            >
                                $2,499.00
                            </p>
                        </div>
                        <button
                            class="bg-surface-container-highest border border-outline-variant/20 p-3 rounded-full text-primary hover:bg-primary hover:text-on-primary transition-all z-20"
                        >
                            <span
                                class="material-symbols-outlined"
                                data-icon="add_shopping_cart"
                                >add_shopping_cart</span
                            >
                        </button>
                    </div>
                    <div class="relative w-full h-64 mb-8 z-0">
                        <div
                            class="absolute inset-0 bg-tertiary-dim/10 blur-[40px] rounded-full z-0"
                        ></div>
                        <img
                            alt="Sleek dark laptop"
                            class="object-contain w-full h-full relative z-10 transition-transform duration-700 group-hover:scale-105"
                            data-alt="A sleek, futuristic dark grey laptop slightly open, viewed from an angle against a pitch-black background with a subtle blue glow"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXsUpsNnhJwyr_mtL5biMmXmQuFiLOIxFQf7vEGqMrLuV5YPxF75xYyFRdS1KW5Wh1-IgMQ64XcMgfExFAZVRAl-PnYjcmmnzrJjDe9ZT_Du-oNh4TwG3A5qLuKzXGmroReGntjyxX1027hEczl4BFPK8aTGmfaDHLpIvgcyB3yzeIN9CvSTDVm3BNdLApzenswy3qDsDR1F-orSPp2s3fMz2p8snX9oC-GhHEBtlP8l4hvlozFpnZL7XkzTXSNsWY4zcTwMImjUs"
                        />
                    </div>
                    <div class="flex gap-2 z-10 mt-auto">
                        <span
                            class="bg-surface-container-high text-on-surface-variant font-label text-[10px] uppercase tracking-widest px-2 py-1 rounded"
                            >M3 Architecture</span
                        >
                        <span
                            class="bg-surface-container-high text-on-surface-variant font-label text-[10px] uppercase tracking-widest px-2 py-1 rounded"
                            >120Hz OLED</span
                        >
                    </div>
                </div>
                <!-- Product Card 2 -->
                <div
                    class="bg-surface-container rounded-lg p-6 relative overflow-hidden group hover:bg-surface-container-highest transition-colors duration-500 flex flex-col"
                >
                    <div class="flex justify-between items-start mb-6 z-10">
                        <div>
                            <h3 class="font-headline text-lg font-bold mb-1">
                                Sonic Prism
                            </h3>
                            <p
                                class="text-on-surface-variant font-label text-xs uppercase tracking-[0.05em]"
                            >
                                $349.00
                            </p>
                        </div>
                        <button
                            class="text-primary hover:text-primary-container transition-colors z-20"
                        >
                            <span
                                class="material-symbols-outlined"
                                data-icon="add_circle"
                                >add_circle</span
                            >
                        </button>
                    </div>
                    <div class="relative w-full h-40 mb-6 flex-grow z-0">
                        <img
                            alt="Smart speaker"
                            class="object-contain w-full h-full relative z-10 transition-transform duration-700 group-hover:scale-110"
                            data-alt="A minimalist cylindrical smart speaker in matte black, placed on a dark reflective surface with a faint teal ambient light"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMDxzSFGmu6OZwoK1ySmh-_7cYZFwyt0wdGiNWjhmVxYeZmzqZvZ1iBoL0PS9TmsLqxJhIAy0Wa5RlEkswoYuhMQunU53NUEqYzdmbgFglHdAAHL2VecY7o11h4EW_UrRbBrxeJCIcRt0NOEf-68jlrV6vDY8EFTKSC73LFG_kLC8ojdN2ZIiaDFClnGNfkTxjLdsAV_aQnhO7KViiyBpJq4WE_G1cDiplttVt7mI2qo76x4_6_sO7KkAZYEYrLhG9oxRKb-76oNU"
                        />
                    </div>
                    <div class="flex gap-2 z-10 mt-auto">
                        <span
                            class="bg-surface-container-high text-on-surface-variant font-label text-[10px] uppercase tracking-widest px-2 py-1 rounded"
                            >Spatial Audio</span
                        >
                    </div>
                </div>
                <!-- Product Card 3 -->
                <div
                    class="bg-surface-container rounded-lg p-6 relative overflow-hidden group hover:bg-surface-container-highest transition-colors duration-500 flex flex-col"
                >
                    <div class="flex justify-between items-start mb-6 z-10">
                        <div>
                            <h3 class="font-headline text-lg font-bold mb-1">
                                Aero Watch 2
                            </h3>
                            <p
                                class="text-on-surface-variant font-label text-xs uppercase tracking-[0.05em]"
                            >
                                $599.00
                            </p>
                        </div>
                        <button
                            class="text-primary hover:text-primary-container transition-colors z-20"
                        >
                            <span
                                class="material-symbols-outlined"
                                data-icon="add_circle"
                                >add_circle</span
                            >
                        </button>
                    </div>
                    <div class="relative w-full h-40 mb-6 flex-grow z-0">
                        <img
                            alt="Smartwatch"
                            class="object-contain w-full h-full relative z-10 transition-transform duration-700 group-hover:scale-110"
                            data-alt="A high-tech smartwatch with a dark metal band and a glowing minimalistic interface, floating against a completely dark background"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYOgX9l767KFR-QdbqvG7XOfTKe1FZb0mZciuKeogdX09EApFXOEBIZ3jlGrO57tTyP-lnsEMphYM52UuSfm7c3Rq5E1aY3lT2GtpUeURvmQChhTxP8EESvegBnzzuYihozLVBtZQjQy-m7d2f0KIehdQQRvVKmJa31bDOTDws1AFDcPCoW1QRyCCQLjIFtvR9_lDGdCtEGj2hB78fd0iveBcgANpqKrXGkS_S60q18VN9rRtaeRqdQRu8ezhIJHVW3WyUXj-ergM"
                        />
                    </div>
                    <div class="flex gap-2 z-10 mt-auto">
                        <span
                            class="bg-surface-container-high text-on-surface-variant font-label text-[10px] uppercase tracking-widest px-2 py-1 rounded"
                            >Titanium Frame</span
                        >
                    </div>
                </div>
                <!-- Product Card 4 -->
                <div
                    class="bg-surface-container rounded-lg p-6 relative overflow-hidden group hover:bg-surface-container-highest transition-colors duration-500 flex flex-col lg:col-span-2"
                >
                    <div class="flex justify-between items-start mb-6 z-10">
                        <div>
                            <h3 class="font-headline text-xl font-bold mb-1">
                                Quantum Lens Pro
                            </h3>
                            <p
                                class="text-on-surface-variant font-label text-sm uppercase tracking-[0.05em]"
                            >
                                $1,299.00
                            </p>
                        </div>
                        <button
                            class="bg-surface-container-highest border border-outline-variant/20 px-4 py-2 rounded text-primary hover:bg-primary hover:text-on-primary transition-all z-20 font-label text-xs uppercase tracking-widest font-bold"
                        >
                            Add to Cart
                        </button>
                    </div>
                    <div class="flex flex-row items-center gap-6 h-full z-0">
                        <div class="relative w-1/2 h-48 z-0">
                            <img
                                alt="Camera lens"
                                class="object-contain w-full h-full relative z-10 transition-transform duration-700 group-hover:scale-105"
                                data-alt="A premium professional camera lens with intricate glass elements reflecting a subtle green laser light, set against a matte black studio background"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFt6px_iFW8Bpw6GbSwvg6bY7SP_34P_6r8YfkrF__wqzvRNun_4BhDEqZXns7XJFXZ8TtG5zW_UgTghNZ4YF0kLzELPxDilAV3BSTcWYQdbIdsaF3qmPB91hzLen1cdRlzbxkc0MDlWjEP7dzilMKBEZvBQrCor6uj-hW1P2rYndr1s9mbqOhu2Ymzm2bsfadh51uj8Srxj0ixW6IVz1GhKrehOzNO_aQwtq2i61RWF1zoxQUXtrZYDRx8uBl3x5s459S5XGlOAk"
                            />
                        </div>
                        <div
                            class="flex-1 flex flex-col justify-end gap-3 z-10 pb-4"
                        >
                            <p
                                class="text-on-surface-variant font-body text-sm"
                            >
                                Ultra-low distortion optics engineered for
                                cinematic precision.
                            </p>
                            <div class="flex flex-wrap gap-2">
                                <span
                                    class="bg-surface-container-high text-on-surface-variant font-label text-[10px] uppercase tracking-widest px-2 py-1 rounded"
                                    >f/1.2 Aperture</span
                                >
                                <span
                                    class="bg-surface-container-high text-on-surface-variant font-label text-[10px] uppercase tracking-widest px-2 py-1 rounded"
                                    >8K Ready</span
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
