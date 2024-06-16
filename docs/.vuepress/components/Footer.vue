<script setup>
const githubOrgsName = 'Try-To-Create'
const githubOrgsAddress = `https://github.com/${githubOrgsName}`
const githubName = 'PlayDrinkEatCode'
const githubAddress = `https://github.com/${githubName}`
</script>

<template>
    <div class="vp-footer">
        <div>
            <span>
                项目组织：
                <a :href="githubOrgsAddress" target="_blank" rel="noopener noreferrer">{{ githubOrgsName }}</a>
            </span>
            <span>
                项目作者：
                <a :href="githubAddress" target="_blank" rel="noopener noreferrer">{{ githubName }}</a>
            </span>
            <span>
                Powered By 
                <a href="https://vuepress.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">VuePress</a>
            </span>
        </div>
        <div>
            MIT 协议 | 版权所有 © 2024 - 至今 {{ githubOrgsName }}
        </div>
    </div>
</template>

<style scoped>
div:not(:first-child) {
    margin-top: 1em;
}
span:not(:first-child) {
    margin-left: 0.5em;
}
</style>
