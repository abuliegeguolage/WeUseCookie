<script setup lang="ts"></script>

<template>
    <div class="title-wrapper">
        <h1 class="title-shadow">都是假的</h1>
        <h1 class="title">都士嘉德</h1>
        <h2>餅乾專賣店</h2>
    </div>
    <ul class="links">
        <li class="button-like">
            <RouterLink to="/cookies">餅乾一覽</RouterLink>
        </li>
        <li class="button-like">
            <RouterLink to="/news">都士小報</RouterLink>
        </li>
        <li class="button-like">
            <RouterLink to="/faq">常見問題</RouterLink>
        </li>
    </ul>
</template>

<style scoped lang="scss">
.title-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: auto;
    margin-bottom: 20px;
    width: 90%;
    height: 300px;

    h1 {
        position: absolute;
        font-size: 10vw;
        cursor: default;

        @media screen and (max-width: 767px) {
            font-size: 18vw;
        }
    }

    .title {
        color: var(--secondary-color);
        text-shadow: 0 0 20px var(--stronger-primary);

        @media screen and (max-width: 767px) {
            text-shadow: 0 0 10px var(--stronger-primary);
        }
    }

    .title-shadow {
        color: rgba(0, 0, 0, 0);
        text-shadow: 20px 20px 8px var(--low-key-color);

        @media screen and (max-width: 767px) {
            text-shadow: 15px 15px 5px var(--low-key-color);
        }
    }

    h2 {
        position: absolute;
        bottom: 20px;
        color: var(--stronger-primary);
        cursor: default;
    }
}

.links {
    display: flex;
    justify-content: space-evenly;

    @media screen and (max-width: 767px) {
        flex-direction: column;
    }

    li {
        margin: 20px;
        padding: 10px;
        background-color: var(--secondary-color);
        border: 1px solid var(--stronger-primary);
    }
}
</style>