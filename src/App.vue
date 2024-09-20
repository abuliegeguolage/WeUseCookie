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
  min-height: 100vh;
  padding: 20px;
  background-color: var(--low-key-secondary);

  @media screen and (max-width: 767px) {
    padding: 10px;
    width: 100vw;
  }
}
</style>
