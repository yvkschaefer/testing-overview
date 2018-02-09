<template>
  <main class="main-slides">
    <Header />
    <a href="/7">
      <h1>Load vs Stress Testing</h1>
      <ul>
        <li>These are similar to Performance Testing but with different goals</li>
        <li>Load testing steadily increases the volume of traffic until the app can't take it anymore</li>
        <li>Stress testing breaks part of the system and examine's how the app responds</li>
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
