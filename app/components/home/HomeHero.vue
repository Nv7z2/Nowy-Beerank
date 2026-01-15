<script>
import { NuxtImg } from '#components';
</script>

<template>
    <section class="home-hero">
        <img
            src="/img/home/BEERANK.svg"
            role="presentation"
            class="home-hero__logo"
            loading="eager"
            fetchpriority="high"
        />

        <div class="home-hero__bottom">
            <div class="home-hero__description-wrapper">
                <h1 class="home-hero__h1">Beerank - SEO i marketing</h1>
                <p>
                    Pomożemy Ci ogarnąć marketing w internecie. W Beerank działamy z SEO, ścieżkami
                    zakupowymi, reklamami i UX. 💰 Twoja strona zacznie zarabiać więcej.
                </p>
            </div>
            <div class="home-hero__bottom-right">
                <NuxtImg
                    src="/img/home/miniaturka_hero_beerank.avif"
                    alt="Beerank miniaturka pszczoła"
                    loading="eager"
                    fetchpriority="high"
                />
                <div class="home-hero__social-links">
                    <ul>
                        <li>
                            <a href="https://facebook.com/beerank.seo"> Facebook </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/beerank.seo"> Instagram </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/beerank"> LinkedIn </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@use '@styles/variables' as *;
@use '@styles/mixins' as *;

.home-hero {
    display: flex;
    margin: 1rem 0 3rem;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0 $desktop-section-padding;

    @include on-mobile {
        flex-direction: column;
        margin-top: 1.5rem;
        padding: 0 $mobile-section-padding;
    }

    &__h1 {
        font-size: $font-medium;
        margin: 0 0 2rem;
        font-weight: normal;
        letter-spacing: 0.5px;
        text-align: left;

        @include on-mobile {
            font-size: $font-medium-mobile;
        }
    }

    &__logo {
        max-width: 100%;
        height: auto;
    }

    &__bottom {
        display: flex;
        width: 100%;
        margin-top: 9rem;
        justify-content: space-between;
        align-items: flex-end;

        @include on-mobile {
            flex-direction: column;
            gap: 2.5rem;
            margin-top: 5rem;
        }
    }

    &__description-wrapper {
        max-width: 38rem;

        & > p {
            margin: 0;
            text-align: left;
            font-size: $font-large;

            @include on-mobile {
                font-size: $font-large-mobile;
            }
        }
    }

    &__bottom-right {
        display: flex;
        flex-direction: column;
        align-items: end;
        gap: 2rem;

        @include on-mobile {
            width: 100%;
            align-items: start;
        }

        & * {
            margin: 0;
        }

        & img {
            max-width: 20rem;
            width: 100%;

            @include on-mobile {
                width: 100%;
                max-width: unset;
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
            color: $text-color;

            &:hover {
                color: $primary-color;
                text-decoration: underline;
            }
        }
    }
}
</style>
