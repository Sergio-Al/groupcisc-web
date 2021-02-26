import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import bootstrap from 'bootstrap'
import jQuery from 'jquery'

import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'


import 'bootstrap/dist/css/bootstrap.min.css'





const app = createApp(App)

app.use(store)
app.use(router)
app.use(bootstrap)
app.use(jQuery)

app.component('the-header', TheHeader)
app.component('the-footer', TheFooter)

app.mount('#app')
