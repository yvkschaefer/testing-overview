<template>
  <main>
    <Header />
    <a href="/4">
      <h1>Snapshot</h1>
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
  name: 'SlideThree',
  components: { Header }
}
</script>

<style lang="scss" scoped>
@import '../main.scss';
</style>
