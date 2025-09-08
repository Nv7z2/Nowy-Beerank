<script setup>
const formData = ref({
  name: "",
  email: "",
  message: "",
  acceptance: false,
});
</script>

<template>
  <section class="contact" id="kontakt">
    <h2 class="contact__heading">Bee:In Touch 🐝</h2>
    <form class="contact__form">
      <div class="contact__form-group">
        <label for="name" class="contact__form-label">
          <span
            class="contact__form-label-text"
            :class="{
              'contact__form-label-text--active': !!formData.name,
              'contact__form-label-text--valid': formData.name.length > 0,
            }"
          >
            Imię
          </span>
          <input
            type="text"
            id="name"
            class="contact__form-input"
            v-model="formData.name"
            :class="{
              'contact__form-label-text--valid': formData.name.length > 0,
            }"
          />
        </label>
        <label for="email" class="contact__form-label">
          <span
            class="contact__form-label-text"
            :class="{
              'contact__form-label-text--active': !!formData.email,
              'contact__form-label-text--valid':
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
              'contact__form-label-text--invalid':
                formData.email.length > 0 &&
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
            }"
          >
            Twój adres e-mail *
          </span>
          <input
            type="email"
            id="email"
            class="contact__form-input"
            :class="{
              'contact__form-label-text--valid':
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
              'contact__form-label-text--invalid':
                formData.email.length > 0 &&
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
            }"
            v-model="formData.email"
          />
        </label>
      </div>
      <div class="contact__form-group">
        <label for="message" class="contact__form-label">
          <span
            class="contact__form-label-text"
            :class="{
              'contact__form-label-text--active': !!formData.message,
              'contact__form-label-text--valid': formData.message.length > 0,
            }"
          >
            Wiadomość
          </span>
          <textarea
            id="message"
            class="contact__form-textarea"
            v-model="formData.message"
            :class="{
              'contact__form-textarea--valid': formData.message.length > 0,
            }"
            rows="6"
          ></textarea>
        </label>
      </div>

      <div class="contact__form-group">
        <label for="acceptance" class="contact__form-label--checkbox">
          <input
            type="checkbox"
            id="acceptance"
            v-model="formData.acceptance"
          />
          Akceptuję politykę prywatności w celu przedstawienia oferty
        </label>
      </div>
      <button type="submit" class="contact__form-button">
        Wyślij wiadomość
      </button>
    </form>
  </section>
</template>

<style scoped lang="scss">
@use "@styles/variables" as *;
@use "@styles/mixins" as *;

$localGreenColor: #4caf50;
$localRedColor: #f44336;

.contact {
  padding: 5rem $desktop-section-padding 6.25rem;
  
  @include on-mobile {
    padding: 2.5rem $mobile-section-padding;
  }


  &__heading {
    font-size: $font-huge;
    margin: 0;

    @include on-mobile {
      font-size: $font-huge-mobile;
    }
  }

  &__form {
    margin-top: 5rem;
    max-width: 66%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @include on-mobile {
      flex-direction: column;
      max-width: 100%;
      margin-top: 2.5rem;
    }
  }

  &__form-group {
    display: flex;
    gap: 0.5rem;

    @include on-mobile {
      flex-direction: column;
    }
  }

  &__form-label-text {
    font-size: $font-medium;
    color: $text-color;
    transform: translateY(3rem);
    transition: transform 0.1s ease-in-out;

    @include on-mobile {
      font-size: $font-medium-mobile;
    }

    &--invalid {
      color: $localRedColor;
    }

    &--valid {
      color: $localGreenColor;
    }
  }

  &__form-label-text--active {
    transform: translateY(0);
    padding: 0.15rem 0;
    font-size: $font-base;
  }

  &__form-label {
    flex: 1;
    display: flex;
    font-size: $font-medium;
    flex-direction: column;

    @include on-mobile {
      font-size: $font-medium-mobile;
    }
  }

  &__form-input:focus-visible &__form-label-text,
  &__form-textarea:focus-visible &__form-label-text {
    @extend .contact__form-label-text--active;
  }

  &__form-input,
  &__form-textarea {
    width: 100%;
    font-size: $font-medium;
    border: none;
    border-bottom: 2px solid $color-black;
    background-color: transparent;
    padding: 1.25rem 0;
    color: $text-color;

    @include on-mobile {
      font-size: $font-medium-mobile;
    }

    &:focus-visible {
      outline-color: $primary-color;
    }

    &--invalid {
      border-color: $localRedColor;
    }

    &--valid {
      border-color: $localGreenColor;
    }
  }

  &__form-label--checkbox {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: $font-base;

    @include on-mobile {
      font-size: $font-base-mobile;
    }

    input[type="checkbox"] {
      width: 2.5rem;
      height: 2.5rem;
      cursor: pointer;
      border: none;
      accent-color: $primary-color;
    }
  }

  &__form-button {
    font-size: $font-medium;
    padding: 1.5rem 3rem;
    color: $text-color-white;
    background-color: $color-black;
    width: fit-content;
    border: none;
    border-radius: 4rem;

    @include on-mobile {
      width: 100%;
      font-size: $font-medium-mobile;
    }
  }
}
</style>
