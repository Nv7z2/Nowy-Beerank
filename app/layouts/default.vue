<script setup>
import Header from '~/components/global/Header.vue';
import Footer from '~/components/global/Footer.vue';
</script>

<template>
    <div class="main-layout">
        <Header />
        <slot />
        <Footer />
    </div>
</template>

<style scoped lang="scss">
.main-layout {
    max-width: 1920px;
    margin: 0 auto;
}
</style>