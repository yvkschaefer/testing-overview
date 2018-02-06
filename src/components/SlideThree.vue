<template>
  <main class="main-slides">
    <Header />
    <a href="/4">
      <h1>Snapshot</h1>
      <ul>
        <li>with Jest</li>
        <li>method: toMatchSnapshot()</li>
        <li>run and re-run test suites</li>
      </ul>
    </a>
  </main>
</template>

<script>

import Header from './Header'
export default {
  name: 'SlideThree',
  components: { Header }
}
</script>

<style lang="scss" scoped>
@import '../main.scss';
</style>
