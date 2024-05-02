<template>
	<div id="single-blog">
		<h1>{{ blog.title }}</h1>
		<article>{{ blog.content }}</article>
		<div>
			<p>Author: {{ blog.author }}</p>
			<p>Categories: {{ blog?.categories?.join(", ") }}</p>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			id: this.$route.params.id,
			blog: {}
		}
	},
	created() {
		this.$http.get(`https://blog-list-1b3fe-default-rtdb.europe-west1.firebasedatabase.app/posts/${this.id}.json`)
			.then((data) => {
				return data.json()
			}).then(data => {
				this.blog = data
			})
		}
}
</script>

<style scoped>
	#single-blog {
		max-width: 960px;
		margin: 0 auto;
	}
</style>