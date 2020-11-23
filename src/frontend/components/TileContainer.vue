<template>
	<section>
		<a class="tile" :class="{ loading: isLoading }" v-for="tile in tiles" :key="tile.title" :href="tile.url">
			<div class="image-container">
				<img :src="`/icons/${tile.icon}`" alt="" />
			</div>
			<p>{{ tile.name }}</p>
		</a>
	</section>
</template>

<script>
import { getServices } from "../api";

export default {
	name: "TileContainer",
	data() {
		return {
			isLoading: true,
			// skeleton
			tiles: new Array(12).fill({}),
		};
	},
	created() {
		getServices().then((data) => {
			this.tiles = data;
			this.isLoading = false;
		});
	},
};
</script>

<style lang="scss" scoped>
@import "../scss/breakpoints.scss";
@import "../scss/colors.scss";

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
	margin: 1em;
	background-color: $cl-background-dark;
	display: flex;
	flex-direction: column;
	color: inherit;
	text-decoration: none;

	@include media-breakpoint-down(xs) {
		width: 45%;
		height: 6em;
		margin: 0.3em;
	}

	&:hover {
		filter: brightness(1.1);
	}

	.image-container {
		height: 0;
		flex: 1;
		padding-top: 4%;
	}

	img {
		display: block;
		height: 100%;
		margin: 0 auto;
	}

	p {
		margin: 4% auto;
		flex: 0;
	}
}
</style>
