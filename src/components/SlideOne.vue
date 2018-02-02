<template>
  <main>
    <Header />
    <a href="/2">
      <h1>Some Testing Types</h1>
      <ul>
        <li v-for="item in items" :key="item.id">{{item.title}}</li>
      </ul>
    </a>
  </main>
</template>

<script>

import Header from './Header'
export default {
  name: 'SlideOne',
  components: { Header },
  data () {
    return {
      items: [
        { title: 'Unit' },
        { title: 'Snapshot' },
        { title: 'Functional' },
        { title: 'Regression' },
        { title: 'Performance' },
        { title: 'Security' },
        { title: 'Load' },
        { title: 'Black box' },
        { title: 'Smoke' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../main.scss';
h1 {
  transform: scale(1.4);
  padding-left: 2vw;
}
ul {
  padding-top: 2vh;
  list-style-type: none;
  display: inline-block;
  margin: auto;
}
li {
  background-color: $mylo-blue;
  color: #fff;
  padding: 5px;
  border-radius: 6px;
  font-size: 4vh;
  font-weight: bold;
  width: 30vw;
  margin-bottom: 5px;
}
li:hover {
  background-color: #ffe64c;
  color: #723fab;
  transform: scale(1.2);
}
</style>
