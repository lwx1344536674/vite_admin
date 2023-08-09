import { createApp } from 'vue'
import router from '@/router'
import store from "@/store/index.js";
import './assets/styles/element-variables.scss'
import 'normalize.css/normalize.css'

// global css
import './assets/styles/index.scss'

import App from './App.vue'

import SvgIcon from '@/components/SvgIcon/index.vue'

// svg
import 'virtual:svg-icons-register'

const app = createApp(App)
app.component('svg-Icon',SvgIcon)
app.use(router)
app.use(store)
app.mount('#app')
