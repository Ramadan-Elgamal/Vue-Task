<script setup>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import { RouterView } from "vue-router";
</script>

<template>
    <div
        class="bg-background text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container"
    >
        <NavBar />
        <main class="pt-20">
            <RouterView />
        </main>
        <Footer />
    </div>
</template>

<style>
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
