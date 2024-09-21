<script setup lang="ts">

import { onBeforeMount, ref } from 'vue';
import { INews } from '../interfaces/News';

const href = location.href.split('/');
const newsId = href[href.length - 1];

let news = ref<INews>();

onBeforeMount(async () => {
    news.value = await fetch('/WeUseCookie/json/news.json').then(res => res.json())
        .then(json => {
            return json.find((item: INews) => item.id === newsId);
        }) as INews;
});

</script>

<template>
    <div class="wrapper">
        <img v-if="news?.cover.src" :src="news?.cover.src" :alt="news?.cover.desc">
        <div v-if="news?.cover.desc" class="annotation">
            {{ ' ↑ ' + news?.cover.desc }}
        </div>

        <h3 class="title">{{ news?.title }}</h3>
        <section class="content">
            <p v-for="p in news?.paragraphs" class="paragraph">
                {{ '　　' + p }}
            </p>
        </section>
    </div>
</template>

<style scoped lang="scss">
.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    img {
        margin: 10px;
        width: 50%;

        @media screen and (max-width: 767px) {
            width: 90%;
        }
    }

    .annotation {
        color: var(--low-key-color);
    }

    .title {
        display: inline-block;
        margin: 10px;
        margin-top: 20px;
        padding: 10px;
        border: 1px solid var(--stronger-primary);
        border-left: unset;
        border-right: unset;
    }

    .content {
        padding: 20px;
        padding-top: 0;

        .paragraph {
            margin: 10px;
        }
    }
}
</style>