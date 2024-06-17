import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
    lang: 'zh-CN',
    title: '学习指南',
    description: '一份 VuePress 构建的前端学习指南',
    head: [['link', { rel: 'icon', href: '/guide.svg' }]],
    theme: defaultTheme({
        logo: 'guide.svg',
        navbar: ['/',
            {
                text: '指南',
                prefix: '/guide/',
                children: [
                    'introduction',
                    'markdown',
                    'typeScript',
                    'networkRequestLibrary',
                    'vue',
                    'SSG',
                    'bundler'
                ]
            },
            {
                text: 'Github',
                link: 'https://github.com/Try-To-Create/study-guide'
            },
            {
                text: 'Try-To-Create',
                link: 'https://github.com/Try-To-Create'
            }
        ],
        sidebar: {
            '/guide/': [
                {
                    text: '介绍',
                    link: 'introduction'
                },
                {
                    text: 'Markdown',
                    link: 'markdown'
                },
                {
                    text: 'TypeScript',
                    link: 'typeScript'
                },
                {
                    text: '网络请求库',
                    link: 'networkRequestLibrary'
                },
                {
                    text: 'Vue.js',
                    link: 'vue'
                },
                {
                    text: '静态网站生成器',
                    link: 'SSG'
                },
                {
                    text: '模块打包工具',
                    link: 'bundler'
                }
            ]
        }
    }),
    bundler: viteBundler(),
})
