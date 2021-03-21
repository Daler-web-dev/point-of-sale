import Vue from 'vue';
import App from './App.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import VueMeta from 'vue-meta';
import { BootstrapVue } from 'bootstrap-vue';

Vue.use(VueMeta);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
	created() {
		AOS.init();
	},
	render: (h) => h(App),
}).$mount('#app');
