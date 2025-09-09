<script setup lang="ts">
import Breadcrumbs from "~/components/global/Breadcrumbs.vue";
import DividerWithTitle from "~/components/global/DividerWithTitle.vue";
import RecentBlogPosts from "~/components/global/RecentBlogPosts.vue";
import { h } from "vue";
import { NuxtImg } from "#components";

const NETLIFY_IMG_BASE = ''

const route = useRoute();
const { data: page } = await useAsyncData(
  route.path,
  () =>
    queryCollection("blog")
      .path("/blog/" + route.params.slug)
      .first() // Adjust the path to match your content structure
);

const components = {
  img(props) {
    const src = props.src.startsWith("/") ? props.src : "/" + props.src;
    const widths = [320, 480, 768, 1024, 1280, 1440]; // dostosuj rozmiary do potrzeb

    const srcset = widths
      .map(
        (w) =>
          `${NETLIFY_IMG_BASE}/.netlify/images?url=${encodeURIComponent(src)}&w=${w} ${w}w`
      )
      .join(", ");

    const alt = props.alt || "";
    const sizes = "(max-width: 768px) 100vw, 768px";

    return h("NuxtImg", {
      ...props,
      alt,
      title: alt,
      loading: "lazy",
      decoding: "async",
      fetchpriority: "low",
      src: `${NETLIFY_IMG_BASE}/.netlify/images?url=${encodeURIComponent(src)}&w=768`,
      srcset,
      sizes,
    });
  },
};

const metaTitle = computed(() => page?.value?.seo.title);
const metaDesc = computed(() => page?.value?.seo.description);

useSeoMeta({
  robots: "index, follow",
  title: metaTitle,
  ogTitle: metaTitle,
  twitterTitle: metaTitle,
  description: metaDesc,
  ogDescription: metaDesc,
  twitterDescription: metaDesc,
  ogUrl: `https://beerank.pl${route.path}`,
  ogType: "article",
  twitterCard: "summary_large_image",
  author: "Kacper Baran",
});
</script>

<template>
  <main class="blog-post">
    <breadcrumbs :middle-link="{ label: 'Blog', url: '/blog' }">
      {{ page?.title.split("|")[0] }}
    </breadcrumbs>

    <div class="blog-post__hero">
      <h1 class="blog-post__h1">{{ page?.meta.heading }}</h1>
      <div class="blog-post__tags">
        <span class="blog-post__tag" v-for="tag in page?.meta.tags">
          {{ tag.replaceAll("-", " ") }}
        </span>
      </div>
      <p
        class="blog-post__teaser"
        v-html="page?.meta?.teaser.replace('\n', '<br /><br />')"
      ></p>
    </div>

    <article class="blog-post__content">
      <nav class="blog-post__toc">
        <p class="blog-post__toc-heading">W artykule przeczytasz:</p>
        <ul class="blog-post__toc-main-list">
          <li v-for="link in page?.body.toc?.links" :key="link.id">
            <a :href="'#' + link.id">
              <img
                src="@images/icons/arrow-right-black.svg"
                role="presentation"
                alt=""
              />
              {{ link.text }}
            </a>

            <!-- TODO: Maybe enable TOC for H3 later -->
            <!-- <ul class="blog-post__toc-sub-list">
              <li
                v-for="sublink in link.children"
                :key="sublink.id"
                v-if="link.children"
              >
                <a :href="'#' + sublink.id">{{ sublink.text }}</a>
              </li>
            </ul> -->
          </li>
        </ul>
      </nav>

      <div class="blog-post__empty-space"></div>

      <div class="blog-post__content-inner">
        <ContentRenderer
          v-if="page"
          :value="page"
          style="scroll-margin-top: 8rem"
          :components="components"
        />
      </div>
    </article>

    <divider-with-title>Przeczytaj także</divider-with-title>
    <recent-blog-posts />
  </main>
</template>

<style lang="scss">
@use "sass:color";
@use "@styles/mixins" as *;
@use "@styles/variables" as *;

.blog-post {
  &__hero {
    padding: 5rem $desktop-section-padding;
    background-image: url(@images/dedicated-backgrounds/services-bg.svg);
    background-position: calc(100% - $desktop-section-padding) 200%;
    background-size: auto;
    background-repeat: no-repeat;

    @include on-mobile {
      padding: 2rem $mobile-section-padding 8rem;
      background-position: center 110%;
      background-size: contain;
      background-repeat: no-repeat;
    }
  }

  &__h1 {
    font-size: $font-xxlarge;
    max-width: 75%;

    @include on-mobile {
      max-width: unset;
      font-size: $font-xlarge-mobile;
    }
  }

  &__tags {
    margin: 2.5rem 0 4rem;
    display: flex;
    gap: 0.25rem;

    @include on-mobile {
      margin: 2rem 0;
    }
  }

  &__tag {
    text-transform: uppercase;
    font-weight: 500;
    padding: 0.625rem 1rem;
    border-radius: 2rem;
    background-color: rgba($text-color, 0.1);
    font-size: $font-small;

    @include on-mobile {
      font-size: $font-small-mobile;
    }
  }

  &__teaser {
    font-size: $font-medium;
    max-width: 60%;
    margin: 0;
    line-height: calc($font-medium * 1.35);

    @include on-mobile {
      max-width: unset;
      font-size: $font-medium-mobile;
    }
  }

  &__content {
    background-color: $color-white;
    padding: 6.25rem $desktop-section-padding;
    display: flex;
    font-size: $font-base;
    position: relative;
    margin-bottom: 5rem;

    @include on-mobile {
      padding: 2rem $mobile-section-padding;
      font-size: $font-base-mobile;
      margin-bottom: 2rem;
      flex-direction: column;
    }

    p,
    a,
    span,
    h1,
    h2,
    h3,
    h4 {
      color: $text-color;
    }

    h1 a,
    h2 a,
    h3 a,
    h4 a {
      text-decoration: none;
    }

    h2 {
      font-size: $font-large;
      margin-bottom: 2rem;

      &:not(:first-child) {
        margin-top: 5rem;
      }

      @include on-mobile {
        font-size: $font-large-mobile;
      }
    }

    h3 {
      font-size: $font-medium;
      margin-top: 3.5rem;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -0.5rem;
        width: 5rem;
        height: 4px;
        background-color: $primary-color;
      }

      @include on-mobile {
        font-size: $font-medium-mobile;
      }
    }
  }

  &__toc {
    flex: 3;
    position: sticky;
    top: 8rem;
    align-self: flex-start;
    font-size: $font-base;

    a {
      text-decoration: none;
    }

    &-main-list {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    &-main-list > li > a {
      padding: 1.75rem 0;
      display: inline-flex;
      width: 100%;
      gap: 1rem;
      border-bottom: 1px solid rgba($text-color, 0.25);
      transition: transform 0.1s ease;

      &:hover {
        transform: translateX(2rem);
      }

      @include on-mobile {
        padding: 0.5rem 0;
        gap: 0.5rem;

        &:hover {
          transform: unset;
        }
      }
    }

    // TODO: Styles for H3 TOC, currently not needed
    // &-sub-list {
    //   margin-left: 4rem !important;

    //   @include on-mobile {
    //     margin-left: 2rem !important;
    //   }
    // }

    // &-sub-list a {
    //   padding: 0.5rem 0;
    //   display: inline-block;

    //   @include on-mobile {
    //     padding: .25rem 0;
    //   }
    // }

    @include on-mobile {
      top: 0;
      margin-bottom: 3rem;
      position: relative;
      font-size: $font-base-mobile;
    }
  }

  &__toc-heading {
    font-size: $font-base;
    margin: 0 0 2.5rem;

    @include on-mobile {
      font-size: $font-base-mobile;
    }
  }

  &__empty-space {
    flex: 1;
  }

  &__content-inner {
    flex: 8;
    line-height: 1.4;

    & [id] {
      scroll-margin-top: 8rem;

      @include on-mobile {
        scroll-margin-top: 4rem;
      }
    }

    a {
      background-color: rgba($primary-color, 0.25);
      text-decoration-color: $primary-color;
      text-decoration-style: dotted;
      color: color.adjust($primary-color, $lightness: -35%);
      transition: background-color 0.1s ease;

      &:hover {
        background-color: rgba($primary-color, 0.65);
      }
    }

    h2 a,
    h3 a {
      background-color: initial;
      color: initial;
      text-decoration: none;

      &:hover {
        background-color: initial;
      }
    }

    p img {
      max-width: 100%;
      height: auto;
      display: block;
      margin: 0 auto 3rem;
    }
  }
}
</style>
