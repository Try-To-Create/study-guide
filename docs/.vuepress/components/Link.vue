<script setup lang="ts">
import { computed } from 'vue';

interface LinkProps {
    text: string
    src: string
}
const { text, src } = defineProps<LinkProps>()
const isInternal = computed<boolean>(() => { 
    return src.match(/^(https?:)?\/\//) ? false : true
})
function to(event: MouseEvent) {
    let needNewWindow: boolean = !isInternal.value || event.ctrlKey
    window.open(src, needNewWindow ? '_blank' : '_self')
}
</script>

<template>
    <p @click="to" :isInternal="isInternal">{{ text }}</p>
</template>

<style scoped>
p {
    display: flex;
    margin: 1em 0;
    padding-bottom: 0.5em;
    width: fit-content;
    border-bottom: 2px solid transparent;
    font-weight: 500;
    color: #555555;
    cursor: pointer;
    align-items: center;
}

p:hover {
    color: var(--c-brand);
    border-bottom-color: var(--c-brand);
}

p:not([isinternal="true"]):after {
    content: '';
    display: inline-block;
    margin-left: 0.2em;
    width: 0.8em;
    height: 0.8em;
    background: var(--external-link-icon-color);
    mask-image: var(--external-link-icon);
}

p:hover::after {
    margin-top: 0.1em;
    background: var(--c-brand);
    transform: rotate(45deg);
}

p p {
    display: inline-flex;
    margin: 0;
    padding: 0;
    border: unset;
    color: var(--c-brand);
}
</style>
