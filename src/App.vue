<script setup>
import NavBar from "./components/NavBar.vue";
import Hero from "./components/Hero.vue";
import RelatedProducts from "./components/RelatedProducts.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
    <head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Monolith Kinetics</title>
        <link
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
            rel="stylesheet"
        />
        <link
            href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&amp;family=Manrope:wght@400;600;800&amp;display=swap"
            rel="stylesheet"
        />
        <link
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
            rel="stylesheet"
        />
    </head>

    <NavBar />
    <main class="pt-20">
    <Hero />
    <RelatedProducts />
    </main>
    <Footer />
</template>

<style scoped>
body {
    font-family: "Manrope", sans-serif;
    background-color: #0e0e0e;
    color: #ffffff;
}
h1,
h2,
h3,
.brand-logo {
    font-family: "Space Grotesk", sans-serif;
}
</style>
