import { defineClientConfig } from 'vuepress/client'
import Link from './components/Link.vue'
import Footer from './components/Footer.vue'

export default defineClientConfig({
    enhance({ app }) {
        app.component('guide-link', Link)
        app.component('guide-footer', Footer)
    }
})
