<script setup>
import Carousel from "../components/Carousel.vue";
import RelatedProducts from "../components/RelatedProducts.vue";
import { ref } from "vue";

const products = ref([
    {
        name: "MK-Blade Ultra",
        price: "$2,499.00",
        image: {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXsUpsNnhJwyr_mtL5biMmXmQuFiLOIxFQf7vEGqMrLuV5YPxF75xYyFRdS1KW5Wh1-IgMQ64XcMgfExFAZVRAl-PnYjcmmnzrJjDe9ZT_Du-oNh4TwG3A5qLuKzXGmroReGntjyxX1027hEczl4BFPK8aTGmfaDHLpIvgcyB3yzeIN9CvSTDVm3BNdLApzenswy3qDsDR1F-orSPp2s3fMz2p8snX9oC-GhHEBtlP8l4hvlozFpnZL7XkzTXSNsWY4zcTwMImjUs",
            alt: "Sleek dark laptop"
        },
        description:
            "A sleek, futuristic dark grey laptop slightly open, viewed from an angle against a pitch-black background with a subtle blue glow",
        tags: ["M3 Architecture", "120Hz OLED"],
        stock: 0,
        discount: "10"
    },
    {
        name: "Sonic Prism",
        price: "$349.00",
        image: {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMDxzSFGmu6OZwoK1ySmh-_7cYZFwyt0wdGiNWjhmVxYeZmzqZvZ1iBoL0PS9TmsLqxJhIAy0Wa5RlEkswoYuhMQunU53NUEqYzdmbgFglHdAAHL2VecY7o11h4EW_UrRbBrxeJCIcRt0NOEf-68jlrV6vDY8EFTKSC73LFG_kLC8ojdN2ZIiaDFClnGNfkTxjLdsAV_aQnhO7KViiyBpJq4WE_G1cDiplttVt7mI2qo76x4_6_sO7KkAZYEYrLhG9oxRKb-76oNU",
            alt: "Smart speaker"
        },
        description:
            "A minimalist cylindrical smart speaker in matte black, placed on a dark reflective surface with a faint teal ambient light",
        tags: ["Spatial Audio"],
        stock: 10,
        discount: "20"
    },
    {
        name: "Aero Watch 2",
        price: "$599.00",
        image: {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYOgX9l767KFR-QdbqvG7XOfTKe1FZb0mZciuKeogdX09EApFXOEBIZ3jlGrO57tTyP-lnsEMphYM52UuSfm7c3Rq5E1aY3lT2GtpUeURvmQChhTxP8EESvegBnzzuYihozLVBtZQjQy-m7d2f0KIehdQQRvVKmJa31bDOTDws1AFDcPCoW1QRyCCQLjIFtvR9_lDGdCtEGj2hB78fd0iveBcgANpqKrXGkS_S60q18VN9rRtaeRqdQRu8ezhIJHVW3WyUXj-ergM",
            alt: "Smartwatch"
        },
        description:
            "A high-tech smartwatch with a dark metal band and a glowing minimalistic interface, floating against a completely dark background",
        tags: ["Titanium Frame"],
        stock: 10,
        discount: "30"
    },
    {
        name: "Quantum Lens Pro",
        price: "$1,299.00",
        image: {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFt6px_iFW8Bpw6GbSwvg6bY7SP_34P_6r8YfkrF__wqzvRNun_4BhDEqZXns7XJFXZ8TtG5zW_UgTghNZ4YF0kLzELPxDilAV3BSTcWYQdbIdsaF3qmPB91hzLen1cdRlzbxkc0MDlWjEP7dzilMKBEZvBQrCor6uj-hW1P2rYndr1s9mbqOhu2Ymzm2bsfadh51uj8Srxj0ixW6IVz1GhKrehOzNO_aQwtq2i61RWF1zoxQUXtrZYDRx8uBl3x5s459S5XGlOAk",
            alt: "Camera lens"
        },
        description:
            "A premium professional camera lens with intricate glass elements reflecting a subtle green laser light, set against a matte black studio background",
        tags: ["f/1.2 Aperture", "8K Ready"],
        stock: 10,
        discount: "25"
    }
]);
</script>

<template>
    <Carousel />
    <RelatedProducts :items="products" />
</template>
