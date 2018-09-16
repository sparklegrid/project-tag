import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

require('./assets/sass/main.scss');

Vue.use({
	install(Vue) {
		Vue.prototype.$api = axios.create({
			baseURL: process.env.VUE_APP_API_URL
		})
	}
});

Vue.config.productionTip = false;

new Vue({
	render: h => h(App)
}).$mount('#app');
