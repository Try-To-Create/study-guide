import { defineClientConfig } from 'vuepress/client'
import Footer from './components/Footer.vue'

export default defineClientConfig({
    enhance({ app }) {
        app.component('guide-footer', Footer)
    }
})
