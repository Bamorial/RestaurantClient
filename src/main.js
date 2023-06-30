import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import MenuPage from './components/MenuPage.vue'
import CategoryPage from './components/CategoryPage.vue'


const tables=[1,2,3,4,5]
const routes = tables.flatMap((table) => [
    {
      path: `/${table}/:id`,
      name: `Table${table}Products`,
      component: MenuPage
    },
    {
      path: `/${table}/checkout`,
      name: `Table${table}Checkout`,
      component: MenuPage
    },
    {
      path: `/${table}/`,
      name: `Table${table}`,
      component: CategoryPage
    },
   
    
  ])
 

  const router = createRouter({
    history: createWebHistory(),
    routes: [
      
      ...routes // Add the dynamically generated routes to the main routes array
    ]
  })

createApp(App)
.use(router)
.mount('#app')
