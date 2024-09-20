<script setup lang="ts">
import Header from './components/Header.vue'
</script>

<template>
  <Header></Header>
  <main>
    <Suspense>
      <RouterView />
    </Suspense>
  </main>
</template>

<style scoped lang="scss">
main {
  margin: auto;
  width: 80vw;
  min-height: calc(100vh - var(--header-h));
  padding: 20px;
  background-color: var(--low-key-secondary);
  box-sizing: border-box;

  @media screen and (max-width: 767px) {
    padding: 10px;
    width: 100vw;
    min-height: calc(100vh - var(--smaller-header-h));
  }
}
</style>
