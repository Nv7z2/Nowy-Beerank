<script setup>
const route = useRoute();
const { data: page } = await useAsyncData(
    route.path,
    () => queryCollection("pages").path("/pages/polityka-prywatnosci").first()
);

const metaTitle = computed(() => page?.value?.seo.title);
const metaDesc = computed(() => page?.value?.seo.description);

useSeoMeta({
  title: metaTitle,
  ogTitle: metaTitle,
  twitterTitle: metaTitle,
  description: metaDesc,
  ogDescription: metaDesc,
  robots: ['noindex, nofollow'],
  twitterDescription: metaDesc,
  twitterCard: "summary_large_image",
});
</script>

<template>
    <div class="polityka-prywatnosci">
        <ContentRenderer v-if="page" :value="page" />
    </div>
</template>

<style lang="scss">
@use "@styles/variables" as *;
@use "@styles/mixins" as *;

.polityka-prywatnosci {
    padding: 0 $desktop-section-padding;

    @include on-mobile {
        padding: 0 $mobile-section-padding;
    }

    h2, h3 {
        margin-top: 2rem;
    }

    h2 > a, h3 > a {
        text-decoration: none;
        color: $text-color;
    }
}
</style>
