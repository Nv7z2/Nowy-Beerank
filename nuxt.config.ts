import { resolve } from 'pathe';
import { defineOrganization } from 'nuxt-schema-org/schema';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    telemetry: false,
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    modules: [
        '@nuxtjs/sitemap',
        '@nuxt/content',
        '@nuxt/scripts',
        '@nuxt/image',
        'nuxt-schema-org',
        '@nuxtjs/critters',
    ],
    alias: {
        // Alias do folderu komponentów w app/
        '@components': resolve(__dirname, 'app/components'),
        '@styles': resolve(__dirname, 'assets/styles'),
        '@images': resolve(__dirname, 'assets/images'),
        '@icons': resolve(__dirname, 'assets/icons'),
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
        head: {
            htmlAttrs: {
                lang: 'pl',
            },
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }],
        },
        pageTransition: { name: 'page', mode: 'out-in' },
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
        preset: 'static',
        prerender: {
            routes: ['/'],
            crawlLinks: true,
        },
    },
    routeRules: {
        '/': { prerender: true },
        '/blog/**': { prerender: true },
        '/_nuxt/**': {
            headers: {
                'Cache-Control': 'public, max-age=31536000, immutable',
            },
        },
        '/_fonts/**': {
            headers: {
                'Cache-Control': 'public, max-age=31536000, immutable',
            },
        },
        '/icons/**': {
            headers: {
                'Cache-Control': 'public, max-age=31536000, immutable',
            },
        },
        '/**/*.avif': {
            headers: {
                'Cache-Control': 'public, max-age=31536000, immutable',
            },
        },
        '/**': {
            headers: {
                'Cache-Control': 'public, max-age=0, must-revalidate',
            },
        },
    },
    critters: {
        config: {
            preload: 'swap',
        },
    },
});
