<script setup lang="ts">
import { INews } from '../interfaces/News';
import PageTitle from '../components/PageTitle.vue';


const news = await fetch('/WeUseCookie/json/news.json').then(res => res.json());

const previewLen = 75;

news.map((item: INews) => {
    for (let p of item.paragraphs) {
        if (!item.preview) {
            item.preview = '';
        }
        let gap = previewLen - item.preview.length;
        if (gap > 0) {
            item.preview += p.slice(0, gap);
        } else {
            break;
        }
    }
});

</script>

<template>
    <PageTitle>
        都士小報
    </PageTitle>
    <ul class="news">
        <li v-for="item in news" class="button-like">
            <RouterLink :to="'/news-solo/' + item.id" class="link">
                <section>
                    <h3 class="title">{{ item.title }}</h3>
                    <div class="preview">
                        <span class="preview-text">{{ item.preview }}</span>
                        <span class="read-more">……（點擊以查看全文）</span>
                    </div>
                </section>
                <img v-if="item?.cover.src" :src="item.cover.src" :alt="item.cover.desc">
            </RouterLink>
        </li>
    </ul>
</template>

<style scoped lang="scss">
.news {
    display: flex;
    flex-direction: column;

    .link {
        display: flex;
        justify-content: space-between;
        padding: 20px;
        width: 100%;

        @media screen and (max-width: 767px) {
            flex-direction: column-reverse;
            align-items: center;
        }

        section {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            text-align: left;

            .title {
                color: black;

                &:hover {
                    color: var(--stronger-primary);
                }

                @media screen and (max-width: 767px) {
                    margin-top: 20px;
                }
            }

            .preview {
                margin: 10px;
                padding: 10px;
                border-left: 1px solid var(--low-key-color);

                .preview-text {
                    color: var(--low-key-color);
                }

                .read-more {
                    color: var(--stronger-primary);
                }
            }

        }

        img {
            width: 200px;
            border: 1px solid var(--low-key-color);
            background-color: var(--secondary-color);
            border-radius: 6px;
        }
    }
}
</style>