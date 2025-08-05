<script setup></script>

<template>
  <div class="divider-with-title">
    <p class="divider-text">
      <slot></slot>
    </p>

    <div class="divider-line"></div>
  </div>
</template>

<style scoped lang="scss">
@use "@styles/variables" as *;

.divider-with-title {
  display: flex;
  gap: 1rem;
  align-items: center;

  .divider-text {
    font-size: 1rem;
    white-space: nowrap;
  }

  .divider-line {
    width: 100%;
    height: 1px;
    background-color: $text-color;
  }
}
</style>
