<template>
	<v-app>
		<v-navigation-drawer app></v-navigation-drawer>
			 
		  <v-app-bar dark>
	      
	      <v-app-bar-nav-icon></v-app-bar-nav-icon>

	      <v-toolbar-title>CANTV</v-toolbar-title>

	      <div class="flex-grow-1"></div>

	      <v-btn icon>
	        <v-icon>mdi-heart</v-icon>
	      </v-btn>

	      <v-btn >
	        <v-icon>mdi-magnify</v-icon>
	      </v-btn>
	      <v-btn >
			<router-link tag="li" to="/">Home</router-link>
	      </v-btn>


	      <v-btn icon>
			<router-link tag="li" to="/about">About</router-link>
	      </v-btn>
	      <v-menu
	        left
	        bottom
	      >
	        <template v-slot:activator="{ on }">
	          <v-btn icon v-on="on">
	            <v-icon>mdi-dots-vertical</v-icon>
	          </v-btn>
	        </template>

	        <v-list>
	          <v-list-item
	            v-for="n in 5"
	            :key="n"
	            @click="() => {}"
	          >
	            <v-list-item-title>Option {{ n }}</v-list-item-title>
	          </v-list-item>
	        </v-list>
	      </v-menu>
	    </v-app-bar>

	    
		<v-toolbar app>
		</v-toolbar>

		<v-content step="1">
		  <v-container fluid>

			<!-- the most important shit-->

			<router-view></router-view>
		  </v-container>
		</v-content>

		<v-footer app>
		</v-footer>
	</v-app>
</template>

<script>
	
	export default {
	};
</script>