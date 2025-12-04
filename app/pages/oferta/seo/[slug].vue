<script setup lang="ts">
const route = useRoute();
const { data: page } = await useAsyncData(
    `oferta-seo-${route.params.slug}`,
    () =>
        queryCollection("pages")
            .path("/pages/oferta/seo/" + route.params.slug)
            .first()
);

const metaTitle = computed(() => page?.value?.seo.title);
const metaDesc = computed(() => page?.value?.seo.description);

useSeoMeta({
    title: metaTitle,
    ogTitle: metaTitle,
    twitterTitle: metaTitle,
    description: metaDesc,
    ogDescription: metaDesc,
    twitterDescription: metaDesc,
    twitterCard: "summary_large_image",
});
</script>

<template>
    <main>
        <ContentRenderer :value="page ?? { body: [] }" />
    </main>
</template>
