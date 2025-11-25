<script setup>
const { data: posts } = await useAsyncData("blog", () => {
    return queryCollection("blog")
        .select("title", "meta", "path")
        .limit(3)
        .all();
});
</script>

<template>
    <section class="recent-posts">
        <ul class="recent-posts__list">
            <li
                v-for="post in posts"
                :key="post._path"
                class="recent-posts__item-wrapper"
            >
                <blog-post-block :post="post" />
            </li>
        </ul>
    </section>
</template>

<style scoped lang="scss">
@use "@styles/variables" as *;
@use "@styles/mixins" as *;

.recent-posts {
    padding: 0 $desktop-section-padding 5rem;
    margin-top: 5rem;

    @include on-mobile {
        margin-top: 2rem;
        padding: 0 $mobile-section-padding 4rem;
    }

    &__list {
        margin: 0;
        padding: 0;
        list-style: none;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0.5rem;

        @include on-mobile {
            grid-template-columns: repeat(1, 1fr);
        }
    }
}
</style>
