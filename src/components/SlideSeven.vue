<template>
  <main>
    <Header />
    <a href="/8">
      <h1>Security</h1>
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
  name: 'SlideSeven',
  components: { Header }
}
</script>

<style lang="scss" scoped>
@import '../main.scss';
</style>
