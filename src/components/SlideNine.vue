<template>
  <main class="main-slides">
    <Header />
    <a href="/10">
      <h1>Black Box vs. White Box</h1>
        <h2>(Gray Box)</h2>

     <div id="boxDiv" v-on:click.self="show">   
      <ul>
        <li>What's in the Box?</li>
        <li>Represents different methods of testing. </li>
        <li>Quick and general or indepth and precise</li>
        <li>What about a mix of both?</li>
      </ul>
      </div>
    </a>
  </main>
</template>

<script>

import Header from './Header'
export default {
  name: 'SlideNine',
  components: { Header }
}


</script>

<style lang="scss" scoped>
@import '../main.scss';



</style>
