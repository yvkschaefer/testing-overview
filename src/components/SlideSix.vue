<template>
  <main class="main-slides">
    <Header />
    <a href="/7">
      <h1>Performance</h1>
      <ul>
        <li>So, what's the difference between Functional and Performance Tests?</li>
        <li>Functional tests asks does it work?  Performance tests asks, how does it work under pressure?</li>
        <li>Can give us insight into problems we currently do not see.</li>
          <ol>How does the app perform under heavy traffic?</ol>
          <ol>How does the app perform under poor network conditions?</ol>
          </br>
        <li>Helps us solve the dreaded "Well, it works on my machine" problem</li>  
      </ul>
    </a>
  </main>
</template>

<script>

import Header from './Header'
export default {
  name: 'SlideSix',
  components: { Header }
}
</script>

<style lang="scss" scoped>
@import '../main.scss';
</style>
