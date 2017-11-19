import Vue from 'vue'
import Router from 'vue-router'
import VueSimpleAutocomplete from '@/components/VueSimpleAutocomplete.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VueSimpleAutocomplete',
      component: VueSimpleAutocomplete
    }
  ]
})
