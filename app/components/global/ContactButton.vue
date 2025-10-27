<script setup>
const props = defineProps({
  isWhite: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'contact',
    validator: val => ['contact', 'tel'].includes(val)
  }
});
</script>

<template>
  <NuxtLink
    to="/kontakt"
    class="contact-button"
    :class="{ 'contact-button--white': isWhite }"
    prefetch
    v-if="type == 'contact'"
  >
    Konsultacja z ekspertem
    <img src="@images/icons/arrow-right-black.svg" role="presentation" alt="" />
  </NuxtLink>

  <a
    href="tel:+48790556756"
    class="contact-button"
    :class="{ 'contact-button--white': isWhite }"
    prefetch
    v-if="type == 'tel'"
  >
    Zadzwoń: 790 556 756 
  </a>
</template>

<style scoped lang="scss">
@use "sass:color";
@use "@styles/mixins" as *;
@use "@styles/variables" as *;

.contact-button {
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 600;
  padding: 0.75rem 1rem;
  border-radius: 2rem;
  display: inline-block;
  text-decoration: none;
  transition: all 0.1s ease;
  background-color: $primary-color;
  color: $text-color;
  display: inline-flex;
  gap: 0.625rem;
  align-items: center;

  img {
    height: 18px;
  }

  &--white {
    background-color: $color-white;
  }

  @include on-mobile {
    // width: 100%;
    text-align: center;
    font-size: 14px;
  }

  &:hover {
    background-color: color.adjust($primary-color, $lightness: -10%);
  }

  &--white &:hover {
    background-color: $primary-color;
  }
}
</style>
