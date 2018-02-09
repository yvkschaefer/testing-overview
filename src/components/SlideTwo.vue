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
      <p>coming soon to pre-commit hook:
        <span>$jest --bail --findRelatedTests</span>
      </p>
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
p {
  font-size: 25px;
}
span {
  background-color: rgba(0, 0, 0, 0.8);
  padding: 2vh 2vw;
  color: rgba(255, 252, 51, 0.9);
  font-family: 'Andale Mono';
  font-size: 30px;
}
</style>
