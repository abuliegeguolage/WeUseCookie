<script setup lang="ts">
import { ref } from 'vue';

const drawer = ref(false);
const links = [
    {
        title: '餅乾一覽',
        path: 'cookies'
    }, {
        title: '都士小報',
        path: 'news'
    }, {
        title: '常見問題',
        path: 'faq'
    }
];

</script>

<template>
    <div class="header">

        <RouterLink to="/" class="logo">
            <h2>都士嘉德</h2>
            <h3>餅乾專賣店</h3>
        </RouterLink>
        <ul class="links">
            <li v-for="link in links" class="button-like">
                <RouterLink :to="'/' + link.path">
                    {{ link.title }}
                </RouterLink>
            </li>
        </ul>
        <button class="button-like fold-nav" @click.stop="drawer = !drawer">
            ···
        </button>

    </div>

    <v-layout>
        <v-navigation-drawer v-model="drawer" :location="$vuetify.display.mobile ? 'right' : undefined" temporary>
            <ul class="drawer-links">
                <button @click="drawer = false" class="button-like closer">╳</button>
                <hr>
                <li v-for="link in links" class="button-like">
                    <RouterLink :to="'/' + link.path">
                        {{ link.title }}
                    </RouterLink>
                </li>
            </ul>
        </v-navigation-drawer>
    </v-layout>
</template>

<style scoped lang="scss">
.header {
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    padding: 6px 40px;
    width: 100%;
    height: var(--header-h);
    background-color: var(--low-key-primary);
    border-bottom: 1px solid var(--stronger-primary);

    @media screen and (max-width: 767px) {
        height: var(--smaller-header-h);
    }

    .logo {
        display: flex;
        flex-direction: column;
        align-items: center;

        h2 {
            color: var(--secondary-color);
            text-shadow: var(--shadow);
        }

        h3 {
            color: var(--stronger-primary);
        }
    }

    .links {
        display: flex;
        align-items: center;

        @media screen and (max-width: 767px) {
            display: none;
        }

        li {
            padding: 10px;

            &:hover {
                background-color: var(--low-key-secondary);
            }
        }
    }

    .fold-nav {
        display: none;
        width: 40px;
        height: 40px;
        font-size: xx-large;

        @media screen and (max-width: 767px) {
            display: block;
        }
    }
}


.drawer-links {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .closer {
        margin: 10px;
        padding: 10px;
    }

    li {
        margin: 5px 0;
        padding: 10px;
        width: 100%;
        border-radius: unset;
    }
}
</style>