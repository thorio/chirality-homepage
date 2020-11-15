<template>
	<section class="">
		<a class="tile" v-for="tile in tiles" :key="tile.message" :href="tile.url">
			<div class="image-container">
				<img :src="tile.icon" alt="" />
			</div>
			<p>{{ tile.title }}</p>
		</a>
	</section>
</template>

<script>
export default {
	name: "Header",
	props: {
		tiles: Array,
	},
};
</script>

<style scoped>
section {
	padding: 1em;
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
	max-width: 90em;
	margin: 0 auto;
}

.tile {
	transition: filter 0.2s;
	width: 15em;
	height: 8em;
	background-color: #181d21;
	margin: 1em;
	display: flex;
	flex-direction: column;
	color: inherit;
	text-decoration: none;
}

.tile:hover {
	filter: brightness(1.15);
}

.tile .image-container {
	height: 0;
	flex: 1;
	padding-top: 4%;
}

.tile img {
	display: block;
	height: 100%;
	margin: 0 auto;
}

.tile p {
	margin: 4% auto;
	flex: 0;
}

.loading .tile {
	animation: shimmer 1s infinite;
	background: linear-gradient(
		to bottom,
		#222222 0%,
		#262626 25%,
		#222222 50%
	);
	background-size: 2000px 2000px;
	background-attachment: fixed;
}
.loading .tile * {
	opacity: 0;
}

@keyframes shimmer {
	0% {
		background-position: 0 -1000px;
	}
	100% {
		background-position: 0 1000px;
	}
}
</style>
