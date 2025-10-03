export default defineNuxtRouteMiddleware((to, from) => {
  const redirects: Record<string, string> = {
    '/poradniki/ile-kosztuje-pozycjonowanie': '/blog/ile-kosztuje-pozycjonowanie-strony-w-2025-roku',
    '/google-ads/jak-nadac-dostep': '/blog/google-ads-jak-nadac-dostep',
    '/poradniki/jak-sprawdzic-pozycje-w-google': '/blog/jak-sprawdzic-pozycje-strony-w-google'
  }

  if (redirects[to.path]) {
    return navigateTo(redirects[to.path], { redirectCode: 301 })
  }
})