<script>
import { NuxtImg } from '#components';
</script>

<template>
    <section class="home-hero">
        <svg
            width="1824"
            height="310"
            viewBox="0 0 1824 310"
            fill="none"
            class="home-hero__logo"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0 310V0H113.662C135.687 0 153.924 3.63281 168.372 10.8984C182.819 18.0632 193.63 27.8011 200.803 40.1123C207.977 52.3226 211.563 66.097 211.563 81.4355C211.563 94.3522 209.189 105.251 204.44 114.131C199.692 122.91 193.327 129.974 185.345 135.322C177.465 140.57 168.776 144.404 159.279 146.826V149.854C169.584 150.358 179.637 153.688 189.437 159.844C199.338 165.898 207.522 174.526 213.988 185.728C220.454 196.929 223.687 210.552 223.687 226.597C223.687 242.44 219.949 256.668 212.473 269.282C205.097 281.795 193.68 291.735 178.222 299.102C162.764 306.367 143.012 310 118.966 310H0ZM46.8288 269.888H114.42C136.849 269.888 152.914 265.549 162.613 256.87C172.312 248.192 177.162 237.344 177.162 224.326C177.162 214.538 174.686 205.557 169.736 197.383C164.785 189.209 157.713 182.7 148.519 177.856C139.426 173.013 128.615 170.591 116.087 170.591H46.8288V269.888ZM46.8288 134.111H109.57C120.078 134.111 129.524 132.093 137.91 128.057C146.397 124.02 153.116 118.369 158.066 111.104C163.118 103.737 165.644 95.0586 165.644 85.0684C165.644 72.2526 161.148 61.5055 152.156 52.8272C143.164 44.1488 129.373 39.8096 110.783 39.8096H46.8288V134.111Z"
                fill="#0D0D0D"
            />
            <path
                d="M262.16 310V0H456.749V40.2637H308.989V134.717H446.596V174.829H308.989V269.736H458.568V310H262.16Z"
                fill="#0D0D0D"
            />
            <path
                d="M502.231 310V0H696.821V40.2637H549.06V134.717H686.667V174.829H549.06V269.736H698.639V310H502.231Z"
                fill="#0D0D0D"
            />
            <path
                d="M742.302 310V0H852.934C876.979 0 896.934 4.13737 912.796 12.4121C928.759 20.6868 940.681 32.1403 948.561 46.7725C956.442 61.3037 960.382 78.1055 960.382 97.1777C960.382 116.149 956.391 132.85 948.41 147.28C940.529 161.61 928.607 172.76 912.644 180.732C896.782 188.704 876.828 192.69 852.782 192.69H768.975V152.427H848.539C863.694 152.427 876.02 150.257 885.517 145.918C895.115 141.579 902.137 135.272 906.582 126.997C911.028 118.722 913.25 108.783 913.25 97.1777C913.25 85.472 910.977 75.3304 906.431 66.7529C901.985 58.1755 894.963 51.6162 885.365 47.0752C875.868 42.4333 863.391 40.1123 847.932 40.1123H789.131V310H742.302ZM895.519 170.137L972.203 310H918.858L843.689 170.137H895.519Z"
                fill="#0D0D0D"
            />
            <path
                d="M1026.51 310H976.804L1088.5 0H1142.6L1254.29 310H1204.58L1116.84 56.3086H1114.41L1026.51 310ZM1034.85 188.604H1196.1V227.959H1034.85V188.604Z"
                fill="#0D0D0D"
            />
            <path
                d="M1532.55 0V310H1489.51L1331.75 82.6465H1328.87V310H1282.04V0H1325.39L1483.3 227.656H1486.18V0H1532.55Z"
                fill="#0D0D0D"
            />
            <path
                d="M1583.79 310V0H1630.62V148.037H1634.41L1764.59 0H1823.55L1698.37 139.561L1824 310H1767.62L1667.3 171.499L1630.62 213.579V310H1583.79Z"
                fill="#0D0D0D"
            />
        </svg>

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
