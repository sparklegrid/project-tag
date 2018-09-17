<template>
	<section class="section">
		<div class="container">

			<div class="field is-horizontal">
				<div class="field-label is-normal">
					<label class="label">Paragraph</label>
				</div>
				<div class="field-body">
					<div class="field">
						<div class="control">
							<textarea class="textarea" v-model.trim="paragraph" name="paragraph" placeholder="Enter a sentence in yoruba language to analyze"></textarea>
						</div>
					</div>
				</div>
			</div>


			<div class="field is-horizontal">
				<div class="field-label">
					<!-- Left empty for spacing -->
				</div>
				<div class="field-body">
					<div class="field is-grouped">
						<div class="control">
							<button class="button is-primary is-rounded" v-on:click="analyzeParagraph" v-bind:class="{'is-loading': loading}" :disabled="loading">Analyze</button>
						</div>
						<div class="control">
							<button class="button is-warning is-rounded" v-on:click="clear">Clear</button>
						</div>
					</div>
				</div>
			</div>


			<div class="container" v-if="solution">
				<article class="message is-success">
					<div class="message-header">
						<h5>Sentence Analysis</h5>
						<button class="delete" v-on:click="clear" aria-label="delete"></button>
					</div>
					<div class="message-body">
						<table class="table" v-if="Object.keys(solution).length">
							<tbody>
							<tr v-for="(value, key) in solution" v-bind:key="key">
								<th><span class="tag is-rounded title is-6">{{ key }}</span></th>

								<td v-for="word in value" v-bind:key="word">{{ word }}</td>
							</tr>
							</tbody>
						</table>
						<p v-else>{{ error || 'No key word found!' }}</p>
					</div>
				</article>

			</div>
		</div>
	</section>
</template>

<script>

	export default {
		name: "Search",
		props: {
			// paragraph: String
		},
		data: () => ({
			paragraph: '',
			loading: false,
			error: '',
			solution: null
		}),
		computed: {},
		methods: {
			analyzeParagraph: function () {
				this.loading = true;
				this.$api.post('/speech/analyze', {
					paragraph: this.paragraph,
				})
						.then(response => {
							this.solution = response.data.data
						})
						.catch(error => {
							this.error = error.message;
						})
						.finally(() => this.loading = false)
			},
			clear: function () {
				this.paragraph = null;
				this.solution = null;
			}
		}
	}
</script>

<style scoped>
	/*table {
		display: table;
	}

	table tr {
		display: table-cell;
	}

	table tr td {
		display: block;
	}*/
</style>