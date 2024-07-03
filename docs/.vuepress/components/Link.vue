<script setup lang="ts">
interface LinkProps {
    text: string
    src: string
}
const { text, src } = defineProps<LinkProps>()
function to() {
    window.open(src, '_blank')
}
</script>

<template>
    <div @click="to">{{ text }}</div>
</template>

<style scoped>
div {
    display: flex;
    margin: 1em 0;
    padding-bottom: 0.5em;
    border-bottom: 2px solid transparent;
    width: fit-content;
    cursor: pointer;
    align-items: center;
}

div:hover {
    color: var(--c-brand);
    border-bottom-color: var(--c-brand);
}

div::after {
    content: '';
    display: inline-block;
    margin-left: 0.2em;
    width: 0.8em;
    height: 0.8em;
    background: var(--external-link-icon-color);
    mask-image: var(--external-link-icon);
}

div:hover::after {
    margin-top: 0.1em;
    background: var(--c-brand);
    transform: rotate(45deg);
}
</style>
