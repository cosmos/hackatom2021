export default {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  ssr: true,
  mode: 'spa',
  generate: {
    fallback: true,
    routes: ['/', '404'],
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: 'HackAtom VI 2021',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Strap on your spacepants and get ready to hack, Cosmonaut.',
      },
      // Open Graph
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'HackAtom VI 2021',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'HackAtom VI 2021',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Strap on your spacepants and get ready to hack, Cosmonaut.',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://hackatom.org',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://hackatom.org/og-image.jpg',
      },
      // Twitter Card
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@cosmos' },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'HackAtom VI 2021',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Strap on your spacepants and get ready to hack, Cosmonaut.',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://hackatom.org/og-image.jpg',
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'HackAtom VI 2021',
      },
    ],
    link: [
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon-svg.svg' },
      {
        rel: 'apple-touch-icon',
        size: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'apple-touch-icon-precomposed',
        href: '/apple-touch-icon-precomposed.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest',
      },
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: 'black',
      },
      {
        rel: 'preload',
        as: 'style',
        href: 'https://fonts.googleapis.com/css?family=Inter:400,700,900&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Inter:400,700,900&display=swap',
      },
    ],
    script: [
      {
        innerHTML: "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-KXGP6JS');",
        type: 'text/javascript',
        charset: 'utf-8'
      }
    ],
    __dangerouslyDisableSanitizers: ['script', 'innerHTML'],
  },
  body: {
    noscript: [
      {
        innerHTML: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KXGP6JS" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
      }
    ],
    __dangerouslyDisableSanitizers: ['script', 'innerHTML'],
  },
  /*
   ** Global CSS
   */
  css: [{ src: '~/assets/styles/main.styl', lang: 'stylus' }],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '~/plugins/v-tooltip.client.js',
    '~/plugins/vue-kinesis.client.js',
    '~/plugins/vue-scrollto.client.js',
    '~/plugins/vue-youtube.client.js',
    '~/plugins/youtube.client.js',
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // https://github.com/juliomrqz/nuxt-optimized-images
    '@aceforth/nuxt-optimized-images',
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
  ],
  optimizedImages: {
    optimizeImages: true,
  },
  styleResources: {
    stylus: [
      '~/assets/styles/abstracts/_*.styl',
      '~/node_modules/rfs/stylus.styl',
    ],
  },
  /*
   ** Nuxt.js modules
   */
  // https://github.com/nuxt-community/google-gtag
  // modules: ['@nuxtjs/google-gtag'],
  // 'google-gtag': {
  //   id: '2992125925',
  //   config: {
  //     anonymize_ip: true, // anonymize IP
  //     send_page_view: false, // might be necessary to avoid duplicated page track on page reload
  //     // linker: {
  //     //   domains: ['six.hackatom.org'],
  //     // },
  //   },
  //   debug: true, // enable to track in dev mode
  //   disableAutoPageTrack: false, // disable if you don't want to track each page route with router.afterEach(...).
  //   // https://support.google.com/google-ads/answer/6095821
  //   // additionalAccounts: [
  //   //   {
  //   //     id: 'G-6Y0VDQ6SFG', // required if you are adding additional accounts
  //   //     config: {
  //   //       send_page_view: false, // optional configurations
  //   //     },
  //   //   },
  //   // ],
  // },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    // https://nuxtjs.org/faq/postcss-plugins/#recommended-method
    transpile: ['vue-kinesis', 'v-tooltip'],
    postcss: {
      plugins: {
        'postcss-font-variant': {},
      },
      preset: {
        // To change the postcss-preset-env settings
        autoprefixer: {},
      },
    },
  },
}
