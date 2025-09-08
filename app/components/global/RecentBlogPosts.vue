<script setup>
const { data: posts } = await useAsyncData("blog", () => {
  return queryCollection("blog").select("title", "meta", "path").limit(3).all();
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
        <NuxtLink :to="post.path" class="recent-posts__item">
          <div class="recent-posts__item-top">
            <div class="recent-posts__tags">
              <small
                class="recent-posts__tag"
                v-for="tag in post.meta.tags"
                :key="tag"
              >
                {{ tag.replaceAll("-", " ") }}
              </small>
            </div>
            <span class="recent-posts__title">{{
              post.title.split("|")[0]
            }}</span>
          </div>

          <span class="recent-posts__read-more">Czytaj dalej</span>
        </NuxtLink>
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

  a {
    text-decoration: none;
    color: $text-color;
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

  &__item {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    height: 100%;
    justify-content: space-between;
    padding: 2.5rem 2rem;
    background-color: $color-white;
    transition: all 0.075s ease-in-out;
  }

  &__item:hover {
    color: $text-color-white;
    background-color: $primary-color;
  }

  &__item-top {
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
