<script setup lang="ts">
const route = useRoute()
console.log("Current route:", route.path);
const { data: page } = await useAsyncData(route.path, () =>
  queryCollection("pages").path('/pages/uslugi').first() // Adjust the path to match your content structure
);

console.log("Page data:", page);

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
    <ContentRenderer v-if="page" :value="page" />
  </main>
</template>