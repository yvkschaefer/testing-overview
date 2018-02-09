<template>
  <main class="main-slides">
    <Header />
    <a href="/8">
      <h1>Security</h1>
      <ul>
        <li>Known Knowns, Known Unknowns and Unknown Unknowns</li>
        <li>Have to be proactive!  Have to think in advance.</li>
        <li>No magic wand here, but ignoring it is dangerous</li>
          <ol>Can Web Application values be changed via inspecting?</ol>
          <ol>Have our input values been sanitized?</ol>
          <ol>Do we know where we are vulnerable?</ol>
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
