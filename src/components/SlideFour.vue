<template>
  <main class="main-slides">
    <Header />
    <a href="/5">
      <h1>Functional</h1>
      <ul>
        <li>software is tested to ensure it conforms with all requirements</li>
        <li>verifies software is providing the same output as required by the end-user</li>
        <li>Detox/Postman</li>
      </ul>
    </a>
  </main>
</template>

<script>

import Header from './Header'
export default {
  name: 'SlideFour',
  components: { Header }
}
</script>

<style lang="scss" scoped>
@import '../main.scss';
</style>
