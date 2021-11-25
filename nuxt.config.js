export default {
  // access Nuxt.js development server on mobile
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '冰山撞甜心 IceSweet',
    htmlAttrs: {
      lang: 'zh'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: '冰山撞甜心 IceSweet - 官網', name: '冰山撞甜心 IceSweet - 官網', content: '冰山撞甜心，嚴選甜心貴妃。用愛生活讓世界美好；用心陪伴，讓你我幸福，現在就打開冰山撞甜心與貴妃談心，冰山撞甜心隨時隨地等候你，等你來開啟與貴妃的情緣，讓貴妃的甜蜜爆擊來溫暖你我的心！' },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:site_name', content: '冰山撞甜心 IceSweet - 官網' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '900' },
      { property: 'og:type', content: 'website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: {
    color: '#fff'
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/all.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: 'https://www.icesweet.com.tw/',
    defaults: {
      changefreq: 'daily',
      lastmod: new Date(),
      priority: 1
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  generate: {
    // https://nuxtjs.org/deployments/netlify#deploy-nuxt-on-netlify
    fallback: true
  },
  scrollBehavior: (_x, _y, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }

}
