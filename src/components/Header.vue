<template>
	<header>
		<div class="item">
			<img src="../assets/favicon.svg" alt="" />
			<span>Chirality</span>
		</div>
		<div class="item right">
			<span class="sm">{{ username }}</span>
			<button>logout</button>
		</div>
	</header>
</template>

<script>
export default {
	name: "TileContainer",
	props: {
		username: String,
		logoutLink: String,
	},
};
</script>

<style scoped>
header {
	background-color: #202225;
	font-size: 20pt;
	padding: 0.3em 1em;
	font-family: Roboto, Helvetica, Arial, sans-serif;
	display: flex;
	flex-direction: row;
}

.item {
	display: flex;
	flex-direction: row;
}

.item img {
	height: 1em;
	margin: auto 0;
}

.right {
	margin-left: auto;
}

span.sm {
	font-size: 0.7em;
}

button {
	background-color: #fff;
	border: none;
}
</style>
