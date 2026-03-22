import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const root = document.querySelector('#app')
const currentPage = root?.dataset.page ?? 'home'

createApp(App, { currentPage }).mount(root)
