<template>
	<div id="app">
		<Nav/>
		<HelloWorld msg="Welcome to Project Tag"/>
		<!--<Statistics/>-->
		<Search/>
	</div>
</template>

<script>
	import HelloWorld from './components/HelloWorld.vue'
	import Search from "@/components/Search";
	import Nav from "@/components/Nav";

	export default {
		name: 'app',
		components: {
			Nav,
			// Statistics,
			Search,
			HelloWorld
		}
	}
</script>

<style>
	#app {
		font-family: 'Quicksand', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		/*margin-top: 60px;*/
	}
</style>
