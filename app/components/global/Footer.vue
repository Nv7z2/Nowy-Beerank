<script setup></script>

<template>
  <footer class="footer">
    <div class="footer__top-row">
      <div class="footer__cta-wrapper">
        <div class="footer__cta-box">
          <span class="footer__cta-label">Zadzwoń</span>
          <a href="tel:+48790556756" class="footer__cta-action">
            790 556 756
          </a>
        </div>
        <div class="footer__cta-box">
          <span class="footer__cta-label">Napisz</span>
          <a href="mailto:kontakt@beerank.pl" class="footer__cta-action">
            kontakt@beerank.pl
          </a>
        </div>
      </div>

      <div class="footer__social-media">
        <a href="https://facebook.com/beerank.seo" class="footer__social-link" target="_blank">Facebook</a>
        <a href="https://www.instagram.com/beerank.seo" class="footer__social-link" target="_blank">Instagram</a>
        <a href="https://www.linkedin.com/company/beerank" class="footer__social-link" target="_blank">LinkedIn</a>
      </div>
    </div>

    <div class="footer__copyright">
      <span>
        © 2025 BEERANK All rights reserved.<br />
        By WebsiteStyle
      </span>
      <br>
      <NuxtLink to="/polityka-prywatnosci" class="footer__privacy-policy-link">Polityka Prywatności</NuxtLink>
      <br>
      <NuxtLink to="/oferta/seo/gdansk" class="footer__privacy-policy-link">Pozycjonowanie Gdańsk</NuxtLink>
    </div>

    <div class="footer__image-wrapper">
      <img src="@images/BEERANK.svg" alt="Beerank logo" class="footer__image" loading="lazy" />
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use "@styles/variables" as *;
@use "@styles/mixins" as *;

.footer {
  background-color: $color-black;
  padding: 3rem $desktop-section-padding 0;
  color: $text-color-white;
  display: flex;
  flex-direction: column;

  @include on-mobile {
    padding: 2.5rem $mobile-section-padding 0;
  }

  &__top-row {
    display: flex;
    justify-content: space-between;

    @include on-mobile {
      flex-direction: column;
      gap: 2.5rem;
    }
  }

  &__cta-wrapper {
    display: flex;
    gap: 3rem;

    @include on-mobile {
      flex-direction: column;
      gap: 1.5rem;
    }
  }

  &__cta-box {
    display: flex;
    gap: 0.25rem;
    flex-direction: column;
  }

  &__cta-label {
    font-size: 16px;
  }

  &__cta-action {
    font-size: $font-large;
    text-decoration: none;
    color: $text-color-white;

    @include on-mobile {
      font-size: $font-large-mobile;
    }
  }

  &__social-media {
    display: flex;
    gap: 2rem;
  }

  &__social-link {
    font-size: $font-base;
    color: $text-color-white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    @include on-mobile {
      font-size: $font-base-mobile;
    }
  }

  &__copyright {
    margin-top: 8rem;

    @include on-mobile {
      margin-top: 4rem;
    }
  }

  &__image-wrapper {
    overflow: hidden;
    max-height: 50%;
  }

  &__image {
    width: 100%;
    filter: invert(1);
    transform: translateY(50%);
  }

  &__privacy-policy-link {
    display: inline-block;
    margin-top: 1rem;
    color: #fff;
  }
}
</style>
