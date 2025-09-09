<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () =>
  queryCollection("pages").path('/pages/oferta/' + route.params.slug).first() // Adjust the path to match your content structure
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
    <ContentRenderer :value="page" />
  </main>
</template>