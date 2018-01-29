// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import SlideOne from './components/SlideOne'
import NotFound from './components/NotFound'

const routes = {
  '/': App,
  '/1': SlideOne
}

new Vue({ // eslint-disable-line no-new
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})
