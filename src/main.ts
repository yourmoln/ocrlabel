import { createApp } from 'vue'  
import App from './App.vue'  
import { createRouter, createWebHashHistory } from 'vue-router'  
import Login from '@pages/login.vue'  
import NotFound from '@pages/NotFound.vue'  
import Home from '@pages/home.vue'
import Tag from '@pages/tag.vue'
import Rank from '@pages/rank.vue'

//import theme from '@/config/theme'
const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/404', component: NotFound },
    { path: '/home', component: Home },
    { path: '/tag', component: Tag },
    { path: '/rank', component: Rank },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

import axios from 'axios'
axios.defaults.baseURL = 'https://api.2024ocr.top/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'

const app = createApp(App)  
app.use(router)

// app.config.globalProperties.$theme = theme

app.mount('#app')