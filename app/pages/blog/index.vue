<script setup>
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("blog").all();
});
</script>

<template>
  <div class="blog">
    <div class="blog-box" v-for="post in page" :key="post.id">
      <NuxtLink :to="post.path">
        {{ post.title }}
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.blog {
  &-box {
    margin: 2rem;
  }
}
</style>
