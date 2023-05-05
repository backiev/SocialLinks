import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import Form from '../views/Form.vue';




const routes = [
   {
      path: '/',
      component: DefaultLayout,
      children: [
         {
            path: '/',
            name: 'home',
            component: Home
         },
         {
            path: '/form',
            name: 'form',
            component: Form
         },
      ]
   },
   
]

const router = createRouter({
   history: createWebHistory(),
   routes
})

export default router;