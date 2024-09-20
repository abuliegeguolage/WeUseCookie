<script setup lang="ts">
import PageTitle from '../components/PageTitle.vue';

let cookies = await fetch('/json/cookies.json').then(res => res.json());
console.log(cookies[0].name);

</script>

<template>
    <PageTitle>
        餅乾一覽
    </PageTitle>
    <ul class="cookies">
        <li v-for="cookie in cookies">
            <div class="display-case">
                <img :src="cookie.src" alt="">
            </div>
            <div class="desc">
                <h4>{{ cookie.name }}</h4>
                <hr>
                <p>{{ cookie.desc }}</p>
            </div>
        </li>
    </ul>
</template>

<style scoped lang="scss">
.cookies {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: auto;

    li {
        overflow: hidden;
        display: flex;
        flex-direction: column;
        position: relative;
        margin: 20px;
        width: 200px;
        height: 260px;
        background-color: var(--low-key-primary);
        border-radius: 6px;
        box-shadow: var(--shadow);

        @media screen and (max-width: 767px) {
            margin: 20px 10px;
            width: 80vw;
            height: 300px;
        }

        .display-case {
            overflow: hidden;
            display: flex;
            justify-content: center;
            width: 100%;
            height: 50%;

            @media screen and (max-width: 767px) {
                height: 60%;
            }

            img {
                margin: auto;
                width: 100%;
                filter: drop-shadow(3px 6px 6px rgba(0, 0, 0, .5));

                &:hover {
                    width: 120%;
                    max-width: 120%;
                }
            }
        }

        .desc {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 50%;
            text-align: left;
            background-color: var(--secondary-color);

            @media screen and (max-width: 767px) {
                height: 40%;
            }

            h4 {
                padding: 10px;
                color: var(--stronger-primary);
            }

            p {
                padding: 20px;
                padding-top: 10px;
                color: var(--low-key-color);

                @media screen and (max-width: 767px) {
                    padding: 10px;
                    padding-top: 5px;
                }
            }
        }
    }
}
</style>