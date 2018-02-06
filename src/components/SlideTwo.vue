<template>
  <main class="main-slides">
    <Header />
    <a href="/3">
      <h1>Unit</h1>
      <ul>
        <li>aims to provide coverage over the smallest testable part of an application</li>
        <li>forms the basis for component testing</li>
        <li>RN currently has: 4</li>
      </ul>
    </a>
  </main>
</template>

<script>

import Header from './Header'
export default {
  name: 'SlideTwo',
  components: { Header }
}
</script>

<style lang="scss" scoped>
@import '../main.scss';
</style>
