import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const About = () => import(/* webpackChunkName: "about" */ './views/About.vue')
const Users = () => import(/* webpackChunkName: "about" */ './views/Users.vue')

const Users_detail = () => import(/* webpackChunkName: "Users_detail" */ './views/Users_detail.vue')

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      //뷰티파이 라는것을 이용해서 작성 
      path: '/', //주소
      name: 'home',
      component: Home //주소와 연결하는 컴포넌트 선언
    },
    {
      path: '/about',
      name: 'about',
      
      component: About
    },
    {
      path: '/users',
      name: 'users',
      
      component: Users,
      //칠드런 속성으로 하위 경로
      //폴더 단위로 메뉴를 구성하면 될듯. 인서트, 수정, 딜리트 를 하나의 그룹으로 구현 

      children:[
        { 
          path : ":id",
          name : "users-detail",
          component: Users_detail 
          },

      ]


    }
  ]
})
