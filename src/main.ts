import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// iView
import ViewUI from 'view-design';
import './assets/css/iview-variables.less'


// element-Ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ViewUI);
Vue.use(ElementUI)

// 样式
import '@/assets/css/index.scss'

import './assets/css/iview-reset.less'
import './assets/css/element-rest.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
