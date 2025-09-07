<script setup></script>

<template>
<section class="home-services">
    <div class="home-services__top">
        <h2 class="home-services__heading">
            <slot name="heading" mdc-unwrap="p"></slot>
        </h2>
        <slot name="description"></slot>
    </div>
</section>
</template>

<style lang="scss">
@use "@styles/variables" as *;
@use "@styles/mixins" as *;

.home-services {
    padding: 1.75rem $desktop-section-padding 6.25rem;
    margin-top: 7rem;

    @include on-mobile {
        margin-top: 4rem;
        padding: 2.5rem $mobile-section-padding 2.5rem;
    }

    &__top {
        display: flex;
        justify-content: space-between;

        @include on-mobile {
            flex-direction: column;
            gap: 5rem;
        }

        & > p {
            font-size: $font-base;
            margin: 0;
            flex: 1;
            max-width: 48rem;
            line-height: 1.2;
            letter-spacing: -.5px;

            @include on-mobile {
                font-size: $font-base-mobile;
            }
        }
    }

    &__heading {
        margin: 0;
        font-weight: 600;
        font-size: $font-xxlarge;
        flex: 1;

        @include on-mobile {
            font-size: $font-xxlarge-mobile;
        }
    }
}
</style>