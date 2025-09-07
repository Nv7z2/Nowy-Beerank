<script setup>
const props = defineProps({
  blocks: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.every((block) => block.title && block.description);
    },
  },
  heading: {
    type: Object,
    validator: (val) => val.label && val.id,
  },
});

let activeBlock = ref(0);

function toggleBlock(index) {
  const blocks = document.querySelectorAll(".service-process__block");

  blocks.forEach((block, i) => {
    if (i === index) {
      block.classList.toggle("service-process__block--active");
      activeBlock.value = i;
    } else {
      block.classList.remove("service-process__block--active");
    }
  });
}
</script>

<template>
  <section class="service-process" :id="heading.id">
    <h2 class="service-process__heading" :data-label="heading.tocLabel" :data-id="heading.id">
      {{ heading.label }}
    </h2>

    <div class="service-process__inner-content">
      <div class="service-process__blocks">
        <div
          class="service-process__block"
          v-for="(block, index) in props.blocks"
          :key="index"
          :class="{
            'service-process__block--active': index === 0,
          }"
        >
          <div class="service-process__block-top-row">
            <div class="service-process__block-title-wrapper">
              <span class="service-process__block-number">{{ index + 1 }}</span>
              <button
                class="service-process__block-title-button-wrapper"
                @click="toggleBlock(index)"
              >
                <h3 class="service-process__block-title">{{ block.title }}</h3>

                <span class="service-process__block-title-cross">
                  <span v-if="activeBlock == index">-</span>
                  <span v-else>+</span>
                </span>
              </button>
            </div>
          </div>
          <p class="service-process__block-description">
            {{ block.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "@styles/mixins" as *;
@use "@styles/variables" as *;

.service-process {
  padding: 6rem $desktop-section-padding 5rem;
  background-color: $color-white;

  @include on-mobile {
    padding: 2.5rem $mobile-section-padding;
  }

  &__heading {
    font-size: $font-xxlarge;
    max-width: 66%;

    @include on-mobile {
      max-width: 100%;
      font-size: $font-xxlarge-mobile;
    }
  }

  &__blocks {
    width: 50%;
    margin-top: 7rem;

    @include on-mobile {
        width: 100%;
        margin-top: 2.5rem;
    }
  }

  &__block {
    padding: 2.5rem 0;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid rgba($color-black, 0.1);
    transition: all 0.2s ease;

    &:first-of-type {
        padding-top: 0;
    }

    @include on-mobile {
        padding: 2rem 0;
    }

    &-top-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &-title-wrapper {
      display: flex;
      gap: 1.25rem;
      flex: 1;
      align-items: center;

      @include on-mobile {
        gap: 1rem;
      }
    }

    &-title-button-wrapper {
      cursor: pointer;
      display: flex;
      align-items: stretch;
      flex: 1;
      justify-content: space-between;
      border: none;
      background: transparent;
    }

    &-number {
      font-size: $font-base;
      padding: 0.75rem;
      background-color: $primary-color;
      border-radius: 2rem;
      width: 3rem;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;

      @include on-mobile {
        font-size: $font-base-mobile;
        width: 2.5rem;
        height: 2.5rem;
      }
    }

    &-title {
      letter-spacing: 0;
      font-weight: 500;
      font-size: $font-base;
      align-self: center;

      @include on-mobile {
        font-size: $font-base-mobile;
      }
    }

    &-description {
      margin: 0;
      max-height: 0;
      overflow: hidden;
      transition:
        max-height 0.3s ease,
        margin 0.2s ease;
    }

    &--active &-description {
      margin-top: 2rem;
      max-height: max-content;

      @include on-mobile {
        margin-top: 1rem;
      }
    }

    &-title-cross {
      font-size: $font-large;
      color: $text-color;

      @include on-mobile {
        font-size: $font-large-mobile;
      }
    }
  }
}
</style>
