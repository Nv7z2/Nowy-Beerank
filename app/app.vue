<script setup lang="ts">
onMounted(() => {
    if (!import.meta.env.PROD) return;

    // Disabled Google Tag Manager load
    // const { proxy } = useScriptGoogleTagManager({
    //     id: 'GTM-T6TKB3P9',
    // });

    const { proxy: clarity } = useScriptClarity({
        id: 'uc6k0l06ja',
    });
});
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.15s;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(5px);
}
</style>
