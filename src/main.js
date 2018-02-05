// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import SlideOne from './components/SlideOne'
import SlideTwo from './components/SlideTwo'
import SlideThree from './components/SlideThree'
import SlideFour from './components/SlideFour'
import SlideFive from './components/SlideFive'
import SlideSix from './components/SlideSix'
import SlideSeven from './components/SlideSeven'
import SlideEight from './components/SlideEight'
import SlideNine from './components/SlideNine'
import SlideTen from './components/SlideTen'
import SlideEleven from './components/SlideEleven'
import SlideTwelve from './components/SlideTwelve'
import NotFound from './components/NotFound'

const routes = {
  '/': App,
  '/1': SlideOne,
  '/2': SlideTwo,
  '/3': SlideThree,
  '/4': SlideFour,
  '/5': SlideFive,
  '/6': SlideSix,
  '/7': SlideSeven,
  '/8': SlideEight,
  '/9': SlideNine,
  '/10': SlideTen,
  '/11': SlideEleven,
  '/12': SlideTwelve
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
