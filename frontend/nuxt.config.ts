// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: {
        strict: true
    },

    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        'nuxt-icon',
        '@nuxt/image-edge',
        '@nuxtjs/color-mode',
   
    ],

   
    css: [
        '@/assets/scss/main.scss'
    ],

    build: {
        transpile: ['@heroicons/vue']
    },
    
    runtimeConfig: {
        public: {
            apiBase: process.env.API_URL,
            domainName: process.env.DOMAIN_NAME,
            baseUrl: process.env.BASE_URL,
        }
    }

})
