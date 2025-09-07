<script setup>
const props = defineProps({
  sliderMainText: {
    type: String,
    default: "Jesteśmy",
  },
  sliderTexts: {
    type: Array,
  },
  backgroundForLinks: {
    type: Boolean,
    default: false,
    required: false,
  },
  links: {
    type: Array,
    default: [],
    required: true,
  },
});
</script>

<template>
  <section class="slider-section">
    <div class="slider-section__texts">
      <span class="slider-section__main-text">{{ props.sliderMainText }}</span>
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

    <div
      class="slider-section__bottom"
      :class="{
        'slider-section__bottom--links-with-bg': props.backgroundForLinks,
      }"
    >
      <slot name="description"></slot>
      
      <ul>
        <li v-for="link in props.links" :key="link.url">
          <a :href="link.url" v-if="link.url.startsWith('http')" target="_blank">{{ link.label }}</a>
          <NuxtLink :to="link.url" v-else>{{ link.label }}</NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss">
@use "@styles/variables" as *;
@use "@styles/mixins" as *;

.slider-section {
  padding: 6.25rem $desktop-section-padding;
  background: url("@images/home-slider-bg-beerank.avif") center center / cover
    no-repeat;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 6.25rem;

  @include on-mobile {
    margin-bottom: 2rem;
    padding: 2.5rem $mobile-section-padding;
  }

  &__texts {
    font-size: $font-xxlarge;
    color: $text-color-white;
    display: flex;
    gap: 1rem;

    @include on-mobile {
      flex-direction: column;
      font-size: $font-xxlarge-mobile;
    }

    & ul {
      @include on-mobile {
        display: flex;
        flex-wrap: nowrap;
        overflow: hidden;
        gap: 1.25rem;
      }
    }

    & ul,
    & li {
      margin: 0;
      padding: 0;
      list-style: none;
    }
  }

  &__main-text {
    margin-top: 4.25rem;

    @include on-mobile {
      margin-top: 0;
    }
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: end;

    @include on-mobile {
      flex-direction: column;
      gap: 2.5rem;
    }

    & > p {
      max-width: 28rem;
      color: $text-color-white;
      font-size: $font-base;
      margin: 0;

      @include on-mobile {
        font-size: $font-base-mobile;
      }
    }

    & ul,
    & li {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    & ul {
      display: flex;
      gap: 0.25rem;

      @include on-mobile {
        flex-wrap: wrap;
      }
    }

    & li > a {
      text-decoration: none;
      padding: 0.625rem 1rem;
      color: $text-color-white;

      &:hover {
        text-decoration: underline;
      }

      @include on-mobile {
        display: inline-block;
      }
    }

    &--links-with-bg {
      & li > a {
        padding: 0.625rem 1rem;
        background-color: rgba(#fff, 0.25);
        border-radius: 2rem;
        transition: background-color 0.15s;

        &:hover {
          background-color: rgba(#fff, 0.5);
          text-decoration: none;
        }
      }
    }
  }
}
</style>
