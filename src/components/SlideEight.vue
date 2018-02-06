<template>
  <main>
    <Header />
    <a href="/9">
      <h1>Load</h1>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </a>
  </main>
</template>

<script>

import Header from './Header'
export default {
  name: 'SlideEight',
  components: { Header }
}
</script>

<style lang="scss" scoped>
@import '../main.scss';
</style>
