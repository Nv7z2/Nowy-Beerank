<template>
  <section class="services">
    <NuxtLink
      :to="service.link"
      class="services__service"
      v-for="service in serviceBlocks"
      :key="service.name"
      :title="service.name"
    >
      <p class="services__service-name">{{ service.name }}</p>
      <div>
        <img
          :src="service.icon"
          role="presentation"
          class="services__service-icon"
        />
      </div>
      <div class="services__service-bottom-block">
        <p class="services__service-description">
          {{ service.description }}
        </p>
        <span class="services__service-link">
          Dowiedz się więcej
          <img
            src="@images/icons/arrow-right-black.svg"
            role="presentation"
            class="services__service-link-icon"
          />
        </span>
      </div>
    </NuxtLink>
  </section>
</template>

<script setup>
const serviceBlocks = [
  {
    name: "Analityka stron internetowych",
    icon: "/icons/service-1.svg",
    description:
      "Instalowanie i wyjaśnienie Google Analytics 4 i Meta Pixel-a.",
    link: "/oferta/analityka",
  },
  {
    name: "Pozycjonowanie stron i sklepów",
    icon: "/icons/service-2.svg",
    description: "Z nami SEO nie jest skomplikowane i trudne do zrozumienia.",
    link: "/oferta/seo",
  },
  {
    name: "Reklamy w Google",
    icon: "/icons/service-3.svg",
    description:
      "Zajmiemy się Twoją reklamą w Google, remarketingiem i optymalizacją.",
    link: "/oferta/reklama",
  },
  {
    name: "Optymalizacja SXO",
    icon: "/icons/service-4.svg",
    description: "Dostarczamy rozwiązania z zakresu SXO dla biznesu.",
    link: "/oferta/sxo",
  },
];
</script>

<style scoped lang="scss">
@use "@styles/variables" as *;
@use "@styles/mixins" as *;

.services {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 0 $desktop-section-padding 6.25rem;

  @include on-mobile {
    padding: 0 $mobile-section-padding 4rem;
    grid-template-columns: repeat(1, 1fr);
  }

  &__service {
    background-color: #f9f9f9;
    display: flex;
    text-decoration: none;
    color: $text-color;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    padding: 2.5rem 2rem;
    transition: background-color 0.1s ease;

    @include on-mobile {
      padding: 2rem 1.5rem;
    }

    &-name {
      font-weight: 500;
      font-size: $font-xlarge;
      margin: 0;
      text-align: left;
      width: 100%;

      @include on-mobile {
        font-size: $font-xlarge-mobile;
      }
    }

    &-description {
      font-size: $font-base;
      margin: 0;
      text-align: left;

      @include on-mobile {
        font-size: $font-base-mobile;
      }
    }

    &-icon {
      max-width: 13.75rem;
      margin: 4.5rem 0 2rem 0;

      @include on-mobile {
        max-width: 7.5rem;
        margin: 3rem 0 0.5rem;
      }
    }

    &-bottom-block {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 1.5rem;
      transform: translateY(4rem);
      transition: transform 0.2s ease;
    }

    &-link {
      padding: 0.625rem 1rem;
      display: flex;
      border-radius: 2rem;
      width: fit-content;
      font-size: $font-small;
      text-decoration: none;
      color: $text-color;
      justify-content: space-between;
      align-items: center;
      line-height: 1;
      background-color: $color-white;
      opacity: 0;
      gap: 0.625rem;
      transition:
        opacity 0.2s ease,
        transition-delay 0.2s ease,
        gap 0.2s ease;

      @include on-mobile {
        font-size: $font-small-mobile;
      }

      &:hover {
        gap: 1.25rem;
      }
    }

    &:hover {
      background-color: $primary-color;
      color: #fff;
    }

    &:hover &-icon {
      filter: brightness(0) invert(1);
    }

    &:hover &-bottom-block {
      transform: translateY(0);
    }

    &:hover &-link {
      opacity: 1;
    }
  }
}
</style>
