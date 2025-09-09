<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () =>
  queryCollection("pages").path('/pages/oferta/' + route.params.slug).first(), {
    initialCache: false
  }
);

const pageSafe = computed(() => page?.value ?? {})

const metaTitle = computed(() => pageSafe?.value?.seo.title);
const metaDesc = computed(() => pageSafe?.value?.seo.description);

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
    <ContentRenderer :value="pageSafe" />
  </main>
</template>