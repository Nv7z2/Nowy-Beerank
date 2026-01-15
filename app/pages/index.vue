<script setup lang="ts">
useSeoMeta({
    title: 'Beerank - Pozycjonowanie SEO i Marketing w internecie',
    ogTitle: 'Beerank - Pozycjonowanie SEO i Marketing w internecie',
    twitterTitle: 'Beerank - Pozycjonowanie SEO i Marketing w internecie',
    description:
        'Poznaj BeeRank psz czołową agencje SEO w Polsce. Która działa w synergii z biznesem. Pozwól działać marketingowym pszczołom. Zapylimy Twój biznes',
    ogDescription:
        'Poznaj BeeRank psz czołową agencje SEO w Polsce. Która działa w synergii z biznesem. Pozwól działać marketingowym pszczołom. Zapylimy Twój biznes',
    twitterDescription:
        'Poznaj BeeRank psz czołową agencje SEO w Polsce. Która działa w synergii z biznesem. Pozwól działać marketingowym pszczołom. Zapylimy Twój biznes',
    twitterCard: 'summary_large_image',
});

const sliderSectionData = {
    texts: [
        'Wizjonerami',
        'SEO Specjalistami',
        'Konsultami dla Twojego Biznesu',
        'Marketingowymi Pszczołami',
    ],
    links: [
        {
            label: 'Analityka',
            url: '/oferta/analityka',
        },
        {
            label: 'Pozycjonowanie',
            url: '/oferta/seo',
        },
        {
            label: 'Reklamy Google',
            url: '/oferta/reklama',
        },
        {
            label: 'SXO',
            url: '/oferta/sxo',
        },
    ],
};

const fullscreenCtaData = {
    links: [
        {
            label: 'Facebook',
            url: 'https://facebook.com/beerank.seo',
        },
        {
            label: 'Instagram',
            url: 'https://www.instagram.com/beerank.seo',
        },
        {
            label: 'LiknedIn',
            url: 'https://www.linkedin.com/company/beerank',
        },
    ],
};
</script>

<template>
    <main>
        <HomeHero />

        <SliderSection
            :slider-texts="sliderSectionData.texts"
            :background-for-links="true"
            :links="sliderSectionData.links"
        >
            Zbieraj nektar sukcesu, zwiększając swoją obecność w wynikach wyszukiwania i budując
            przewagę na rynku.
        </SliderSection>

        <DividerWithTitle> 150+ zrealizowanych projektów </DividerWithTitle>

        <HomeServices>
            <template v-slot:heading>
                Skupiamy się na efektach i prostych rozwiązaniach by dostarczyć miód dla Twojego
                biznesu.
            </template>
            <template v-slot:description>
                W dzisiejszym świecie obecność online to nie luksus - to konieczność. Ale sama
                obecność to za mało. Trzeba jeszcze przyciągnąć uwagę, wzbudzić zaufanie i zapisać
                się w pamięci potencjalnych klientów. I właśnie w tym pomagamy.
            </template>
        </HomeServices>

        <LazyHomeServicesBlocks hydrate-on-visible />

        <LazyHomeSteps hydrate-on-visible>
            <template v-slot:heading>
                <strong>Realizujemy cele</strong> 3 proste kroki by cieszyć się rosnącym napływem 🐝
                miodu dla Twojego binzesu.
            </template>
        </LazyHomeSteps>

        <LazyHomeFullscreenCta
            heading="Zapylamy Twoją widoczność"
            description="Beerank to grupa zapaleńców SEO, którzy lubią to, co robią i robimy to psz—świetnie."
            :social-links="fullscreenCtaData.links"
            hydrate-on-visible
        />

        <LazyDividerWithTitle hydrate-on-visible> Sprawdź naszą bazę wiedzy </LazyDividerWithTitle>

        <LazyRecentBlogPosts hydrate-on-visible />

        <LazyContactForm hydrate-on-visible />
    </main>
</template>
