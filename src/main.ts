import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/main.scss'
import './registerServiceWorker'
import router from './router'

import FontAwesomeIcons from '@/utilities/font-awesome-icons'

createApp(App).use(router).component('FontAwesomeIcon', FontAwesomeIcons).mount('#app')
