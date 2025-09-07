<script setup>
import ContactButton from '../global/ContactButton.vue';

const navigation = ref("navigation");
let isMobileMenuOpen = ref(false);

function openMobileMenu() {
  navigation.value.classList.add("header__nav-list--active");
  isMobileMenuOpen.value = true;
}

function closeMobileMenu() {
  navigation.value.classList.remove("header__nav-list--active");
  isMobileMenuOpen.value = false;
}
</script>

<template>
  <header class="header">
    <div class="header__logo">
      <NuxtLink to="/"><img src="@images/beerank-sygnet.svg" alt="Logo" role="presentation" /></NuxtLink>
    </div>
    <nav class="header__nav">
      <ul class="header__nav-list" ref="navigation">
        <li><NuxtLink to="/oferta" class="header__link">Usługi</NuxtLink></li>
        <li><NuxtLink to="/case-studies" class="header__link">Jak to robimy</NuxtLink></li>
        <li><NuxtLink to="/blog" class="header__link">Baza wiedzy</NuxtLink></li>
        <li>
          <contact-button />
        </li>
      </ul>
    </nav>

    <button class="header__hamburger-button" @click="openMobileMenu">
      <img
        src="@images/icons/hamburger-icon.svg"
        role="presentation"
        alt="Menu"
      />
    </button>

    
  </header>

  <button
      class="header__close-mobile-menu-button"
      v-if="isMobileMenuOpen"
      @click="closeMobileMenu"
    >
      <img
        src="@images/icons/mobile-menu-close-icon.svg"
        role="presentation"
        alt="Zamknij menu"
        @click="navigation.classList.remove('header__nav-list--active')"
      />
    </button>
</template>

<style scoped lang="scss">
@use "sass:color";
@use "@styles/variables" as *;
@use "@styles/mixins" as *;

.header {
  padding: 2rem $desktop-section-padding;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: rgba($background-color, .85);
  z-index: 100;
  // transition: padding .1s ease;

  @include on-mobile {
    padding: 1rem $mobile-section-padding 1rem;
  }

  &__nav {
    &-list {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      gap: 0.25rem;

      @include on-mobile {
        flex-direction: column;
        gap: 1rem;
        align-items: end;
        position: fixed;
        height: 100vh;
        width: 100%;
        top: 0;
        right: 0;
        padding: 8rem 2rem 2rem;
        background-color: rgba(#000, 0.45);
        backdrop-filter: blur(4px);
        transform: translateX(100%);
        transition: transform 0.1s ease;
      }

      &--active {
        @include on-mobile {
          transform: translateX(0);
        }
      }
    }

    li {
      @include on-mobile {
        width: 100%;
      }
    }
  }

  &__link {
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 600;
    padding: 0.75rem 1rem;
    border-radius: 2rem;
    display: inline-block;
    background-color: $color-white;
    color: $text-color;
    text-decoration: none;
    transition: all 0.1s ease;

    @include on-mobile {
      width: 100%;
      text-align: center;
      font-size: 14px;
    }

    &:hover {
      background-color: $primary-color;
    }

    &--custom {
      background-color: $primary-color;
      display: flex;
      gap: 0.625rem;
      align-items: center;

      img {
        height: 18px;
      }

      &:hover {
        background-color: color.adjust($primary-color, $lightness: -10%);
      }
    }
  }

  &__hamburger-button,
  &__close-mobile-menu-button {
    display: none;

    @include on-mobile {
      display: inline;
      padding: 0.75rem 1rem;
      background-color: $color-white;
      border-radius: 2rem;
      border: none;
    }
  }

  &__close-mobile-menu-button {
    @include on-mobile {
      padding: 2rem;
      position: fixed;
      bottom: 10vh;
      right: 50%;
      transform: translateX(50%);
      z-index: 111;

      img {
        width: 2rem;
        height: 2rem;
      }
    }
  }
}
</style>
