<script setup>
import pricing from "~/constants/pricing.json";

const props = defineProps({
  heading: {
    type: String,
    required: true,
  },
  serviceType: {
    type: String,
    default: "seo",
  },
});
</script>

<template>
  <section class="service-costs" id="cennik">
    <h2 class="service-costs__heading">
      {{ heading }}
    </h2>

    <div class="service-costs__boxes">
      <div
        class="service-costs__box"
        v-for="price in pricing[serviceType]"
        :key="price.name"
      >
        <h3 class="service-costs__service-name">{{ price.name }}</h3>

        <div class="service-costs__box-bottom">
          <span class="service-costs__price">{{ price.price }}</span> zł netto
        </div>
      </div>
    </div>

    <div class="service-costs__alternative">
      <p>
        Wolisz indywidualną wycenę, lub chcesz wybrać poszczególne usługi z
        oferty? Nie ma problemu!
      </p>
      <p>
        <a
          href="#kontakt"
          title="Przejdź do formularza kontaktowego na naszej stronie"
          >Napisz do nas</a
        >
        lub
        <a
          href="https://calendar.app.google/DwYLu7JAuHCp6rTX6"
          target="_blank"
          title="Otwórz kalendarz Google z dostępnymi terminami spotkania"
          >umów bezpłatne spotkanie</a
        >
        i porozmawiajmy o nowej ofercie.
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "sass:color";
@use "@styles/mixins" as *;
@use "@styles/variables" as *;

.service-costs {
  padding: 26.25rem $desktop-section-padding 6.25rem;
  background: url(@images/dedicated-backgrounds/service-pricing-bg.svg);
  background-position: center -12vh;
  background-size: calc(100vw - 6rem);
  background-repeat: no-repeat;

  @include on-mobile {
    padding: 10rem $mobile-section-padding 2rem;
    background-position: 20% -10%;
    background-size: 200%;
  }

  &__heading {
    margin: 0 0 6.25rem;
    font-size: $font-xxlarge;

    @include on-mobile {
      margin: 0 0 2rem;
      font-size: $font-xxlarge-mobile;
    }
  }

  &__boxes {
    display: grid;
    gap: 0.5rem;
    grid-template-columns: repeat(3, 1fr);

    @include on-mobile {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  &__box {
    padding: 2.5rem 2rem;
    background-color: $primary-color;
    color: $text-color-white;
    font-size: $font-base;
    height: 12.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @include on-mobile {
      padding: 2rem 1.5rem;
      height: 8.75rem;
      font-size: $font-base-mobile;
    }
  }

  &__service-name {
    font-weight: 500;
    margin: 0;
    font-size: $font-base;

    @include on-mobile {
      font-size: $font-base-mobile;
    }
  }

  &__price {
    font-size: $font-xxlarge;

    @include on-mobile {
      font-size: $font-xxlarge-mobile;
    }
  }

  &__alternative {
    margin-top: 4rem;
    font-size: $font-base;

    p:not(:last-child) {
      margin: 0;
    }

    a {
      font-weight: bold;
      color: color.adjust($primary-color, $lightness: -10%);
      text-decoration: underline;
      font-weight: 500;
    }

    @include on-mobile {
      font-size: $font-base-mobile;
    }
  }
}
</style>
