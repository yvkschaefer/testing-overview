<template>
  <main class="main-slides">
    <Header />
    <a href="/6">
      <h1>Regression</h1>
      <ul>
        <li>Verifies software still runs as expected after it was changed or interfaced with other software</li>
        <li>Write tests, esp functional</li>
        <li>Run & re-run tests</li>
        <li>Jest & Detox</li>
      </ul>
    </a>
  </main>
</template>

<script>

import Header from './Header'
export default {
  name: 'SlideFive',
  components: { Header }
}
</script>

<style lang="scss" scoped>
@import '../main.scss';
</style>
