import Vue from 'vue';
import vueRouter from 'vue-router';

import Home from '@/js/components/Home';
import About from '@/js/components/About';

Vue.use(vueRouter);

const router = new vueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/about',
			name: 'about',
			component: About
		}
	]
})

export default router;