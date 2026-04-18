<script setup>
  import { onMounted, onUnmounted } from 'vue';

onMounted(() => console.log('Hero mounted'));
onUnmounted(() => console.log('Hero unmounted'));

</script>

<template>
    <section
        class="relative min-h-[921px] flex items-center justify-center bg-surface-container-lowest overflow-hidden"
    >
        <!-- Asymmetric decorative elements -->
        <div
            class="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-primary-dim/5 blur-[120px] rounded-full pointer-events-none"
        ></div>
        <div
            class="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-tertiary-dim/5 blur-[100px] rounded-full pointer-events-none"
        ></div>
        <div
            class="max-w-screen-2xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10"
        >
            <div class="flex flex-col items-start gap-8 z-20">
                <div class="flex gap-3">
                    <span
                        class="bg-surface-container-high text-on-surface-variant font-label text-xs uppercase tracking-[0.05em] px-3 py-1 rounded-md"
                        >New Arrival</span
                    >
                    <span
                        class="bg-surface-container-high text-on-surface-variant font-label text-xs uppercase tracking-[0.05em] px-3 py-1 rounded-md"
                        >Flagship</span
                    >
                </div>
                <h1
                    class="font-headline text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter text-on-surface"
                >
                    KINETIC<br /><span class="text-primary">NOISE</span
                    ><br />CANCELLING
                </h1>
                <p
                    class="font-body text-lg text-on-surface-variant max-w-md leading-relaxed"
                >
                    Experience the zenith of auditory isolation. The MK-Zero
                    utilizes proprietary quantum algorithms to analyze and
                    annihilate ambient soundwaves before they reach your ear
                    canal.
                </p>
                <button
                    class="bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold py-4 px-8 rounded-md hover:opacity-90 transition-opacity mt-4 flex items-center gap-2"
                >
                    Pre-Order Now
                    <span
                        class="material-symbols-outlined"
                        data-icon="arrow_forward"
                        >arrow_forward</span
                    >
                </button>
            </div>
            <div
                class="relative w-full h-[614px] lg:h-[819px] flex items-center justify-center"
            >
                <!-- Glow behind product -->
                <div
                    class="absolute inset-0 bg-primary-dim/20 blur-[80px] rounded-full w-3/4 h-3/4 m-auto z-0"
                ></div>
                <img
                    alt="High-end sleek headphones"
                    class="object-contain w-full h-full relative z-10 transform -rotate-12 scale-110 drop-shadow-2xl mix-blend-screen"
                    data-alt="A highly detailed, ultra-sleek pair of over-ear headphones floating against a dark obsidian background with subtle neon green lighting accents"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIIVIMrqPxDZOvZT8-knXqqdEiOtd96cvgzwPzXI7hFfiYjqjgEElPnpd-oALuXskb7AZ3eKxr0--7df7GeqAh4YVSwZegGmJdxBln2osi1s4ShskogKlIHmT6z3wb9aeJvF5930ybZcj6Ax-DiG6UzBFVqeMHSjAxpknXx_UNP9rrn2Vd40bCd-mbqP1o62C3TWmz7RWFVvsuNy0jYJ3YoNNCl2PgCjnp-FFg-O74HOHRKlse1njUVSQj044qYq28K2z1C9SOSVM"
                />
            </div>
        </div>
    </section>
</template>