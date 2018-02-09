<template>
  <main class="main-slides">
    <Header />
    <a href="/11">
      <h1>Smoke</h1>
      <ul>
        <li><img class='imageTitle' src="../assets/thisisfine.png" alt="Mylo logo"></li>
        <li>This is NOT fine</li>
        <li>Smoke Tests are designed to catch things before everything is on fire</li>
        <li>Series of simple, straight forward tests to cover basics before in depth testing begins</li>
      </ul>
    </a>
  </main>
</template>

<script>

import Header from './Header'
export default {
  name: 'SlideTen',
  components: { Header }
}
</script>

<style lang="scss" scoped>
@import '../main.scss';
.imageTitle{
  padding-bottom:40px;

}
</style>
