<template>
	<nav>
		<ul>
			<li><router-link to="/" exact>Blog</router-link></li>
			<li><router-link to="/add" exact>Add a New Blog</router-link></li>
		</ul>
	</nav>
</template>

<script>
	export default {
	}
</script>

<style scoped>
ul {
	list-style: none;
	text-align: center;
	padding: 0;
	margin: 0;
}

li {
	display: inline-block;
	margin: 0 10px;
}

a {
	color: #fff;
	text-decoration: none;
	padding: 6px 8px;
	border-radius: 10px;
}

a.router-link-active {
	background-color: #eee;
	color: #444;
}

nav {
	background-color: #444;
	padding: 14px;
	margin-bottom: 40px;
}
</style>