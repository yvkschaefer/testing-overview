<template>
  <div class="hello hello-world">
    <h1>{{ msg }}</h1>
    <h2>Matthew Young & Kara Schaefer</h2>
    <a href="/1">First Slide >></a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Testing Pipeline'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../main.scss';
</style>
