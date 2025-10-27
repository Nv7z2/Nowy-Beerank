<script setup>
import ContactButton from "../global/ContactButton.vue";

const staticToc = [
  {
    label: "Jakie są korzyści",
    url: "#korzysci"
  },
  {
    label: "Jak możemy Ci pomóc",
    url: "#proces"
  },
  {
    label: "Ile to kosztuje",
    url: "#cennik"
  }
]
</script>

<template>
  <section class="service-hero">
    <h1 class="service-hero__main-heading">
      <slot name="main-heading" mdc-unwrap="p"></slot>
    </h1>

    <div class="service-hero__inner-content">
      <div class="service-hero__left">
        <h2 class="service-hero__additional-heading">
          <slot name="additional-heading" mdc-unwrap="p"></slot>
        </h2>

        <p class="service-hero__description">
          <slot name="description" mdc-unwrap="p"></slot>
        </p>

        <div class="service-hero__buttons">
          <contact-button />
          <contact-button type="tel" />
        </div>
      </div>

      <div class="service-hero__empty-space"></div>

      <div class="service-hero__right">
        <div class="service-hero__toc">
          <p class="service-hero__toc-label">Na skróty</p>
          <ul class="service-hero__toc-list">
            <li
              v-for="link in staticToc"
              :key="link.url"
              class="service-hero__toc-element"
            >
              <a :href="link.url" class="service-hero__toc-link">
                <img
                  src="@images/icons/arrow-right-black.svg"
                  role="presentation"
                  alt=""
                />
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "sass:color";
@use "@styles/mixins" as *;
@use "@styles/variables" as *;

.service-hero {
  padding: 5rem $desktop-section-padding 12rem;
  background: url(@images/dedicated-backgrounds/services-bg.svg);
  background-position: $desktop-section-padding 150%;
  background-size: auto;
  background-repeat: no-repeat;

  @include on-mobile {
    padding: 2.5rem $mobile-section-padding 6rem;
    background-size: contain;
    background-position: left 110%;
  }

  &__main-heading {
    margin: 0 0 6.25rem;
    font-size: $font-huge;
    font-weight: 500;

    @include on-mobile {
      margin: 0 0 2.5rem;
      font-size: $font-huge-mobile;
    }
  }

  &__additional-heading {
    font-size: $font-xxlarge;
    margin: 0 0 3.5rem;
    font-weight: 500;

    @include on-mobile {
      margin: 0 0 1.5rem;
      font-size: $font-xlarge-mobile;
    }
  }

  &__description {
    font-size: $font-base;
    margin: 0;
    max-width: 50%;
    margin-bottom: 1.5rem;

    @include on-mobile {
      max-width: 100%;
      font-size: $font-base-mobile;
    }
  }

  &__buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: start;
  }

  &__toc {
    font-size: $font-base;

    @include on-mobile {
      margin-top: 2.5rem;
      font-size: $font-base-mobile;
    }

    &-label {
      margin: 0 0 2.5rem;
    }

    &-list {
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      list-style: none;
    }

    &-element {
      border-bottom: 1px solid rgba($color-black, 0.1);
    }

    &-link {
      font-size: $font-base;
      text-decoration: none;
      color: $text-color;
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1.75rem 0;

      &:hover {
        text-decoration: underline;
      }

      @include on-mobile {
        font-size: $font-base-mobile;
        padding: 1rem 0;
      }
    }
  }

  &__inner-content {
    display: flex;

    @include on-mobile {
      flex-direction: column;
    }
  }

  &__left {
    flex: 6;
  }

  &__empty-space {
    flex: 1;
  }

  &__right {
    flex: 5;
  }
}
</style>
