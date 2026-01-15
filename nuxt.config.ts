import { resolve } from 'pathe';
import { defineOrganization } from 'nuxt-schema-org/schema';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    router: {
        base: '/',
    },
    target: 'static',
    telemetry: false,
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    modules: [
        '@nuxtjs/sitemap',
        '@nuxt/content',
        '@nuxt/fonts',
        '@nuxt/scripts',
        '@nuxt/image',
        'nuxt-schema-org',
    ],
    alias: {
        // Alias do folderu komponentów w app/
        '@components': resolve(__dirname, 'app/components'),
        '@styles': resolve(__dirname, 'assets/styles'),
        '@images': resolve(__dirname, 'assets/images'),
        '@icons': resolve(__dirname, 'assets/icons'),
    },
    scripts: {
        registry: {
            googleTagManager: {
                id: 'GTM-T6TKB3P9',
            },
        },
    },
    image: {
        quality: 80,
        format: ['avif', 'webp'],
    },
    features: {
        inlineStyles: false,
    },
    css: ['@styles/main.scss'],
    app: {
        hydrate: true,
        head: {
            htmlAttrs: {
                lang: 'pl',
            },
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }],
        },
        pageTransition: { name: 'page', mode: 'out-in' },
    },
    fonts: {
        families: [{ name: 'Inter', provider: 'google' }],
    },
    site: {
        trailingSlash: false,
        url: 'https://beerank.pl',
        name: 'Beerank - Pozycjonowanie SEO i Marketing w internecie',
    },
    schemaOrg: {
        identity: defineOrganization({
            // Basic Information
            name: 'Beerank',
            logo: '/logo.png',
            url: 'https://beerank.pl',
            description: 'Jesteśmy psz—czołową agencje SEO w Polsce',
            email: 'kontakt@beerank.pl',
            taxID: '5842739346',
            vatID: 'PL5842739346',
            legalName: 'BeeRank - Artur Kurczewski',
            knowsLanguage: 'PL',
            skills: 'SEO, Marketing, Google Ads, Facebook Ads, Instagram Ads',
            sameAs: [
                'https://www.facebook.com/beerank.seo',
                'https://instagram.com/beerank.seo',
                'https://www.linkedin.com/company/beerank/',
            ],
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Gdańsk',
                addressCountry: 'PL',
                postalCode: '80-363',
                streetAddress: 'ul. Piastowska 72B/9',
            },
        }),
    },
    vite: {
        build: {
            cssCodeSplit: false,
        },
    },
    content: {
        experimental: { nativeSqlite: true },
    },
    nitro: {
        prerender: {
            routes: ['/'],
            crawlLinks: true,
        },
    },
});
