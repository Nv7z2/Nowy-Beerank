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

.home-services {
    padding: 1.75rem $desktop-section-padding 6.25rem;

    &__top {
        display: flex;
        justify-content: space-between;

        & > p {
            font-size: $font-base;
            margin: 0;
            flex: 1;
            max-width: 48rem;
            line-height: 1.2;
            letter-spacing: -.5px;
        }
    }

    &__heading {
        margin: 0;
        font-weight: 600;
        font-size: $font-xxlarge;
        flex: 1;
    }
}
</style>