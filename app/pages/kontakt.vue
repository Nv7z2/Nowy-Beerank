<script setup>
import ContactForm from "~/components/global/ContactForm.vue";
</script>

<template>
    <div class="contact-wrapper">
        <ContactForm />
    </div>
</template>

<style scoped lang="scss">
@use "@styles/variables" as *;
@use "@styles/mixins" as *;

.contact-wrapper {
    padding: 0 $desktop-section-padding;

    @include on-mobile {
        padding: 0 $mobile-section-padding;
    }
}
</style>
