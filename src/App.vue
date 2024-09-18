<script setup lang="ts">
import Header from './components/Header.vue'
</script>

<template>
  <Header></Header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped lang="scss">
main {
  margin: auto;
  width: 80vw;
  height: 100vh;
  background-color: var(--low-key-secondary);

  @media screen and (max-width: 767px) {
    width: 100vw;
  }
}
</style>
