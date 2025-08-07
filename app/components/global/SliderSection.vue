<script setup>
const props = defineProps({
  sliderTexts: {
    type: Array,
  },
  backgroundForLinks: {
    type: String,
    default: false,
    required: false
  }
});

console.log(props)
</script>

<template>
  <section class="slider-section">
    <div class="slider-section__texts">
      <span class="slider-section__main-text">Jesteśmy</span>
      <ul>
        <li
          v-for="(text, index) in props.sliderTexts"
          :key="index"
          class="slider-section__text"
        >
          {{ text }}
        </li>
      </ul>
    </div>

    <div class="slider-section__bottom" :class="{ 'slider-section__bottom--links-with-bg' : props.backgroundForLinks }">
        <slot name="description"></slot>
        <slot name="links" mdc-unwrap="p"></slot>
    </div>
  </section>
</template>

<style lang="scss">
@use "@styles/variables" as *;

.slider-section {
  padding: 6.25rem $desktop-section-padding;
  background: url("@images/home-slider-bg-beerank.avif") center center / cover
    no-repeat;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__texts {
    font-size: $font-xxlarge;
    color: $text-color-white;
    display: flex;
    gap: 1rem;

    & ul,
    & li {
      margin: 0;
      padding: 0;
      list-style: none;
    }
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: end;

    & > p {
        max-width: 28rem;
        color: $text-color-white;
        font-size: $font-base;
    }

    & ul, & li {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    & ul {
        display: flex;
        gap: .25rem;
    }

    & li > a {
        text-decoration: none;
        color: $text-color-white;
    }

    &--links-with-bg {
        & li > a {
            padding: .625rem 1rem;
            background-color: rgba(#fff, .25);
            border-radius: 2rem;
            transition: background-color .15s;

            &:hover {
                background-color: rgba(#fff, .5);
            }
        }
    }
  }
}
</style>
