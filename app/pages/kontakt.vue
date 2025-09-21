<script setup>
import Breadcrumbs from "~/components/global/Breadcrumbs.vue";
import DividerWithTitle from "~/components/global/DividerWithTitle.vue";
import ContactForm from "~/components/global/ContactForm.vue";
</script>

<template>
    <div class="contact-wrapper">
        <DividerWithTitle>Bądźmy w kontakcie</DividerWithTitle>
        <Breadcrumbs>Kontakt</Breadcrumbs>
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
