<template>
  <main class="main-slides">
    <Header />
    <a href="/6">
      <h1>Regression</h1>
      <ul>
        <li>After a bug is fixed and patch released, regression test for that specific occurence should be written and run in QA to ensure bug does not return</li>
        <li>existing tests can be altered to capture the regression</li>
        <li></li>
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
