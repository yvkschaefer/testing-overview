<template>
  <main>
    <Header />
    <h1>Page Not Found</h1>
  </main>
</template>

<script>

import Header from './Header'
export default {
  name: 'NotFound',
  components: { Header }
}
</script>

<style lang="scss" scoped>
@import '../main.scss';
</style>
