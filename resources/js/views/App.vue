<template>
	<v-app>
		<v-navigation-drawer>
		</v-navigation-drawer>

		<v-toolbar>
		</v-toolbar>

		<v-content step="1">
		  <v-container fluid>
			<router-link tag="li" to="/">Home</router-link>
			<router-link tag="li" to="/about">About</router-link>

			<!-- the most important shit-->

			<router-view></router-view>
		  </v-container>
		</v-content>

		<v-footer>
		</v-footer>
	</v-app>
</template>

<script>
	
	export default {
	};
</script>