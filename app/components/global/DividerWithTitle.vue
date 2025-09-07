<script setup>
const props = defineProps({
  whiteBackground: {
    type: Boolean,
    default: false
  }
})


</script>

<template>
  <div class="divider-with-title" :style="{ backgroundColor: (props.whiteBackground ? 'white' : 'initial') }">
    <p class="divider-text">
      <slot mdc-unwrap="p"></slot>
    </p>

    <div class="divider-line"></div>
  </div>
</template>

<style scoped lang="scss">
@use "@styles/variables" as *;
@use "@styles/mixins" as *;

.divider-with-title {
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 0 $desktop-section-padding;

  @include on-mobile {
    padding: 0 $mobile-section-padding;
  }

  .divider-text {
    font-size: $font-base;
    white-space: nowrap;
    margin: 0;

    @include on-mobile {
      font-size: $font-base-mobile;
    }
  }

  .divider-line {
    width: 100%;
    height: 1.25px;
    background-color: $text-color;
  }
}
</style>
