<template>
	<section class="hero is-primary is-bold">
		<div class="hero-body">
			<div class="container">
				<h1 class="title">
					{{ msg }}
				</h1>
				<h2 class="subtitle">
					A simple application to analyze sentences
				</h2>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'HelloWorld',
		props: {
			msg: String
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
