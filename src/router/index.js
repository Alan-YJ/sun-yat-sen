import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/index'
import newsView from 'components/newsView'
import ShowView from 'components/showView'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:Index
    },
    {
      path: '/Venue',
      component:newsView,
      redirect:'/Venue/0',
      children:[
        {
          path: ':id',
          component:ShowView
        },
      ]
    }
  ]
})
