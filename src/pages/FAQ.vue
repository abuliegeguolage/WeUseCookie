<script setup lang="ts">

import PageTitle from '../components/PageTitle.vue';

const faqs = await fetch('/json/faq.json').then(res => res.json());

</script>

<template>
    <PageTitle>
        常見問題
    </PageTitle>

    <v-expansion-panels variant="inset">
        <v-expansion-panel v-for="faq in faqs" :title="faq.question" :text="faq.answer">
        </v-expansion-panel>
    </v-expansion-panels>
</template>

<style scoped lang="scss"></style>