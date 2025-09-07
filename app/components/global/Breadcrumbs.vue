<script setup>
const props = defineProps({
  middleLink: {
    type: Object[String, String],
    default: null,
    validator: val => val.label && val.url
  }
})
</script>

<template>
  <div class="breadcrumbs">
    <NuxtLink to="/">Beerank</NuxtLink>
    <NuxtLink v-if="middleLink" :to="middleLink.url">{{ middleLink.label }}</NuxtLink>
    <slot mdc-unwrap="p"></slot>
  </div>
</template>

<style lang="scss">
@use "@styles/mixins" as *;
@use "@styles/variables" as *;

.breadcrumbs {
  padding: 1.75rem $desktop-section-padding 0;
  font-size: $font-small;

  @include on-mobile {
    padding: .75rem $mobile-section-padding 0;
    font-size: $font-small-mobile;
  }

  a {
    color: rgba($color-black, 0.4);
    text-decoration: none;

    &::after {
      content: "•";
      color: rgba($color-black, 0.4);
      display: inline-block;
      margin: 0 0.75rem;
    }
  }
}
</style>
