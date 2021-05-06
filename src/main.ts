import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import '@/styles/index.scss'
/* Store */
import { store, key } from './store'
import { clickOutsideDirective } from '@/directive/clickOutside'
/* set default localized format for dayjs */
import { setDayjsLocalizedFormat } from '@/utils/lib/dayjs'
/* create dummy sample data */
import { generateDummyData } from '@/dummy'

/* set default localized format for dayjs */
setDayjsLocalizedFormat()
/* create dummy sample data */
generateDummyData()

const app = createApp(App)

app
  .directive('click-outside', clickOutsideDirective())
  .use(store, key)
  .use(router)
  .mount('#app')

export { app }
