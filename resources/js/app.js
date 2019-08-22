import './bootstrap';
import Vue from 'vue';
import vuetify from './plugins/vuetify';

// Route information for Vue Router
import Routes from '@/js/routes.js';

// Component File
import App from '@/js/views/App';

const app = new Vue({
	el: '#app',
	router: Routes,
	vuetify,
	render: h => h(App),
});

export default app;