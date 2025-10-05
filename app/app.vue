<script setup lang="ts">
import { useHead } from '#app'

// Tu podaj swój GTM ID
const GTM_ID = 'GTM-T6TKB3P9'

// Wstrzyknięcie skryptu GTM do <head>
useHead({
  script: [
    {
      hid: 'gtm-script',
      innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${GTM_ID}');`,
      type: 'text/javascript',
      charset: 'utf-8',
    }
  ],
  // Wyłączenie sanityzacji innerHTML, bo inaczej Nuxt wytnie ten skrypt
  __dangerouslyDisableSanitizersByTagID: {
    'gtm-script': ['innerHTML']
  }
})
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.15s;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(5px);
}
</style>
