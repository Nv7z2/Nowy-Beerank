<script setup>
import ContactButton from '../global/ContactButton.vue';

const props = defineProps({
    heading: String,
    description: String,
    socialLinks: Array,
});
</script>

<template>
    <section class="home-cta">
        <div class="home-cta__heading-wrapper">
            <h2 class="home-cta__heading">
                {{ heading }}
            </h2>
        </div>

        <div class="home-cta__bottom-block">
            <div class="home-cta__description-wrapper">
                <p>
                    {{ description }}
                </p>

                <contact-button :isWhite="true" />
            </div>
            <ul class="home-cta__social-links">
                <li v-for="link in socialLinks" :key="link.url">
                    <a :href="link.url">{{ link.label }}</a>
                </li>
            </ul>
        </div>
    </section>
</template>

<style lang="scss">
@use '@styles/mixins' as *;
@use '@styles/variables' as *;

.home-cta {
    padding: 6.25rem $desktop-section-padding;
    display: flex;
    align-items: end;
    position: relative;
    height: 100vh;
    background: url('@images/home-fullscreen-cta-beerank.avif') center center / cover no-repeat;
    margin-bottom: 6.25rem;

    @include on-mobile {
        margin-bottom: 2rem;
        padding: 2.5rem $mobile-section-padding;
    }

    &__heading-wrapper {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        text-align: center;
    }

    &__heading {
        font-size: $font-xxlarge !important;
        font-weight: 500 !important;
        color: $text-color-white;
        margin: 0;

        @include on-mobile {
            font-size: $font-xxlarge-mobile !important;
        }
    }

    &__bottom-block {
        display: flex;
        align-items: end;
        width: 100%;
        justify-content: space-between;

        @include on-mobile {
            flex-direction: column;
            gap: 2rem;
            align-items: start;
        }

        & p {
            margin: 0;
            max-width: 28rem;
            font-size: $font-base;
            color: $text-color-white;
            margin-bottom: 1.5rem;

            @include on-mobile {
                font-size: $font-base-mobile;
            }
        }

        & ul {
            padding: 0;
            margin: 0;
            list-style: none;
        }

        & li {
            display: inline-block;
            margin-right: 1rem;
        }

        & li > a {
            text-decoration: none;
            font-weight: 500;
            color: $text-color-white;

            &:hover {
                text-decoration: underline;
            }
        }
    }
}
</style>
