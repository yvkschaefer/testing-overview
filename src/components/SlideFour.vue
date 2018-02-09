<template>
  <main class="main-slides">
    <Header />
    <a href="/5">
      <h1>Functional</h1>
      <ul>
        <li>software is tested to ensure it conforms with all requirements</li>
        <li>verifies software is providing the same output as required by the end-user</li>
        <li>Detox/Postman</li>
        <li>RN currently has 6
        </li>
        <li>{ auth, accountTab, banking, transfers, transactions, goal }
        </li>
      </ul>
      <div>
      </div>
    </a>
  </main>
</template>

<script>

import Header from './Header'
export default {
  name: 'SlideFour',
  components: { Header }
}
</script>

<style lang="scss" scoped>
@import '../main.scss';
li:nth-of-type(5) {
  color: #723fab;
  font-size: 22px;
}
</style>
