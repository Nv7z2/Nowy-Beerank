<script setup>
const props = defineProps({
    blocks: {
        type: Array,
        required: true,
        validator: (value) => {
            return value.every((block) => block.title && block.description);
        },
    },
    heading: {
        type: String,
        required: true,
    },
});

let currentlyActiveBlock = ref(1);

onMounted(() => {
    const blocks = document.querySelectorAll(".service-advantages__block");
    blocks[0].classList.add("service-advantages__block--active");

    setInterval(() => {
        blocks[currentlyActiveBlock.value].classList.add(
            "service-advantages__block--active"
        );

        blocks.forEach((block, index) => {
            if (index !== currentlyActiveBlock.value) {
                block.classList.remove("service-advantages__block--active");
            }
        });

        currentlyActiveBlock.value += 1;
        if (currentlyActiveBlock.value >= blocks.length) {
            currentlyActiveBlock.value = 0;
        }
    }, 3000);
});
</script>

<template>
    <section class="service-advantages" id="korzysci">
        <h2 class="service-advantages__heading">
            {{ heading }}
        </h2>

        <div class="service-advantages__blocks">
            <ul>
                <li
                    v-for="(block, index) in blocks"
                    :key="index"
                    class="service-advantages__block"
                >
                    <span class="service-advantages__block-label">{{
                        block.title
                    }}</span>
                    <p class="service-advantages__block-description">
                        {{ block.description }}
                    </p>
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use "@styles/mixins" as *;
@use "@styles/variables" as *;
@use "sass:color";

.service-advantages {
    padding: 6.25rem $desktop-section-padding;
    background-color: $color-white;

    @include on-mobile {
        padding: 2rem $mobile-section-padding 2.5rem;
    }

    &__heading {
        font-size: $font-xxlarge;
        margin-bottom: 6.25rem;
        max-width: 50%;

        @include on-mobile {
            font-size: $font-xxlarge-mobile;
            margin-bottom: 2rem;
            max-width: 100%;
        }
    }

    &__blocks {
        ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 0.5rem;
            grid-template-columns: repeat(4, 1fr);

            @include on-mobile {
                grid-template-columns: repeat(1, 1fr);
            }
        }
    }

    &__block {
        font-size: $font-base;
        padding: 2.5rem 2rem;
        height: 18.5rem;
        display: flex;
        gap: 1rem;
        flex-direction: column;
        justify-content: space-between;
        background-color: color.adjust($gray-color, $lightness: 12%);
        transition: background-color 0.1s ease;

        @include on-mobile {
            // height: 11rem;
            height: auto;
            padding: 2rem 1.5rem;
            font-size: $font-base-mobile;
        }
    }

    &__block--active {
        background-color: $primary-color;
    }

    &__block--active &__block-description {
        color: $text-color-white;
    }

    &__block-label {
        display: block;
        color: rgba($color-black, 0.4);
    }

    &__block-description {
        margin: 0;
    }
}
</style>
