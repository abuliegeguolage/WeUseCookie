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
  background-color: var(--low-key-secondary);

  @media screen and (max-width: 767px) {
    width: 100vw;
  }
}
</style>
