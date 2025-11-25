<script setup>
const props = defineProps({
    post: {
        required: true,
    },
});
</script>

<template>
    <NuxtLink :to="post.path" class="blog-post-block">
        <div class="blog-post-block__top">
            <div class="blog-post-block__tags">
                <small
                    class="blog-post-block__tag"
                    v-for="tag in post.meta.tags || []"
                    :key="tag"
                >
                    {{ tag.replaceAll("-", " ") }}
                </small>
            </div>
            <span class="blog-post-block__title">{{
                post.title.split("|")[0]
            }}</span>
        </div>

        <span class="blog-post-block__read-more">Czytaj dalej</span>
    </NuxtLink>
</template>

<style scoped lang="scss">
@use "@styles/variables" as *;
@use "@styles/mixins" as *;

.blog-post-block {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    height: 100%;
    justify-content: space-between;
    padding: 2.5rem 2rem;
    background-color: $color-white;
    transition: all 0.075s ease-in-out;
    text-decoration: none;
    color: $text-color;

    &:hover {
        color: $text-color-white;
        background-color: $primary-color;
    }


    &__top {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    &__title {
        font-size: $font-medium;

        @include on-mobile {
            font-size: $font-medium-mobile;
        }
    }

    &__tags {
        display: flex;
        gap: 0.25rem;
    }

    &__tag {
        font-size: 12px;
        padding: 0.4rem 1rem;
        border-radius: 2rem;
        background-color: rgba(#0d0d0d, 0.1);
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        text-transform: uppercase;
    }

    &__read-more {
        font-size: $font-small;

        @include on-mobile {
            font-size: $font-small-mobile;
        }
    }
}
</style>
