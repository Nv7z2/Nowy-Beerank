<script setup>
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
    return queryCollection("blog").all();
});
</script>

<template>
    <div>
        <DividerWithTitle>Baza wiedzy</DividerWithTitle>
        <Breadcrumbs>Blog</Breadcrumbs>
        <section class="blog">
            <div class="blog-box" v-for="post in page" :key="post.id">
                <blog-post-block :post="post" />
            </div>
        </section>
    </div>
</template>

<style scoped lang="scss">
@use "@styles/variables" as *;
@use "@styles/mixins" as *;

.blog {
    padding: 0 $desktop-section-padding 5rem;
    margin-top: 5rem;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;

    @include on-mobile {
        grid-template-columns: repeat(1, 1fr);
        margin-top: 0;
        padding: 2.5rem $mobile-section-padding 6rem;
    }
}
</style>
