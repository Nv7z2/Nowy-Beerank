<script setup>
const currentHash = ref(null);

const updateHash = () => {
  if (typeof window !== "undefined") {
    // Sprawdzenie, czy window jest dostępne
    currentHash.value = window.location.hash;
  }
};

onMounted(() => {
  if (typeof window !== "undefined") {
    // Sprawdzenie, czy window jest dostępne
    window.addEventListener("hashchange", updateHash);
    updateHash(); // Ustawienie początkowego hasha
  }
});

onBeforeUnmount(() => {
  if (typeof window !== "undefined") {
    // Sprawdzenie, czy window jest dostępne
    window.removeEventListener("hashchange", updateHash);
  }
});
</script>

<template>
  <section class="home-steps">
    <slot name="heading"></slot>

    <nav class="home-steps__navigation">
      <ul>
        <li>
          <a
            href="#analiza"
            :class="{
              'home-steps__step-link--active':
                currentHash == '#analiza' || !currentHash,
            }"
          >
            <span>WSTĘPNA ANALIZA</span>
          </a>
        </li>
        <li>
          <a
            href="#oferta"
            :class="{
              'home-steps__step-link--active': currentHash == '#oferta',
            }"
          >
            <span>Przygotowanie OFERTY</span>
          </a>
        </li>
        <li>
          <a
            href="#umowa"
            :class="{
              'home-steps__step-link--active': currentHash == '#umowa',
            }"
          >
            <span>SZCZEGÓŁY UMOWNE</span>
          </a>
        </li>
      </ul>
    </nav>

    <div class="home-steps__steps-wrapper">
      <ul class="home-steps__steps-ul">
        <li
          id="analiza"
          class="home-steps__step"
          :class="{
            'home-steps__step--active':
              currentHash == '#analiza' || !currentHash,
          }"
        >
          <a href="#analiza">
            Wstępna analiza potrzeb to proces identyfikacji i oceny wymagań oraz
            oczekiwań, niezbędnych do skutecznego zrealizowania projektu lub
            zadania.
          </a>
        </li>
        <li
          id="oferta"
          class="home-steps__step"
          :class="{ 'home-steps__step--active': currentHash == '#oferta' }"
        >
          <a href="#oferta">
            Stworzenie propozycji oferty odpowiadającej zidentyfikowanym
            potrzebom i oczekiwaniom klienta, aby zwiększyć szanse na jej
            akceptację.
          </a>
        </li>
        <li
          id="umowa"
          class="home-steps__step"
          :class="{ 'home-steps__step--active': currentHash == '#umowa' }"
        >
          <a href="#umowa">
            Opracowanie szczegółowych warunków umowy, które będą regulować
            współpracę między stronami, w tym zakres prac, terminy,
            wynagrodzenie i inne istotne kwestie.
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss">
@use "sass:color";
@use "@styles/variables" as *;
@use "@styles/mixins" as *;

.home-steps {
  padding: 6.25rem $desktop-section-padding 5rem;
  background-color: $color-white;

  @include on-mobile {
    padding: 2.5rem $mobile-section-padding;
  }

  & > p {
    margin: 0;
    font-size: $font-xxlarge;
    display: inline-block;
    max-width: 60%;

    @include on-mobile {
      max-width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: $font-xxlarge-mobile;
    }

    & > strong {
      font-size: $font-base;
      font-weight: 500;
      margin-right: 10rem;
      display: inline-block;
      transform: translateY(-2rem);

      @include on-mobile {
        transform: translateY(0);
        font-size: $font-base-mobile;
      }
    }
  }

  &__navigation {
    margin-top: 6.25rem;
    margin-bottom: 3rem;

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      gap: 0.25rem;

      @include on-mobile {
        flex-direction: column;
      }
    }

    li {
      display: inline-block;

      a {
        text-decoration: none;
        color: $text-color;
        font-size: $font-small;
        text-transform: uppercase;
        padding: 0.625rem 1rem;
        border-radius: 2rem;
        // background-color: rgba(#0d0d0d, 0.075);
        border: 1px solid rgba($primary-color, 0.95);
        display: inline-block;
        font-weight: bold;
        letter-spacing: .5px;

        @include on-mobile {
          font-size: $font-small-mobile;
        }

        &:hover {
          color: $text-color-white;
          border-color: transparent;
          background-color: color.adjust($primary-color, $lightness: -10%);
        }
      }
    }
  }

  &__steps-wrapper {
    overflow-x: scroll;
    width: 100%;
    scroll-behavior: smooth;
    scroll-margin-block: 10rem;
    padding-bottom: 6rem;

    &::-webkit-scrollbar {
      height: 0.5rem;

      @include on-mobile {
        display: none;
      }
    }

    &::-webkit-scrollbar-thumb {
      background-color: $primary-color;
      border-radius: 0.25rem;
    }

    &::-webkit-scrollbar-track {
      background-color: $gray-color;
      border-radius: 0.25rem;
    }

    &::-webkit-scrollbar-corner {
      background-color: transparent;
    }

    &::-webkit-scrollbar-button {
      display: none;
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      gap: 5rem;
      flex-wrap: nowrap;
      width: max-content;

      @include on-mobile {
        flex-wrap: wrap;
        width: 100%;
        gap: 1.25rem;
        flex-direction: column;
      }
    }

    li {
      font-size: $font-large;
      max-width: 50vw;

      @include on-mobile {
        max-width: 100%;
        font-size: $font-large-mobile;
      }
    }
  }

  &__step a {
    color: rgba($text-color, 0.25);
    text-decoration: none;
  }

  &__step--active a {
    color: $text-color;
  }

  &__step-link--active {
    color: $text-color-white !important;
    border-color: transparent !important;
    background-color: color.adjust($primary-color, $lightness: -10%) !important;
  }
}
</style>
