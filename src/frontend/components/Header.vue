<template>
	<header>
		<div class="item">
			<img src="../assets/logo.svg" alt="" />
			<span>Chirality</span>
		</div>
		<div class="item user" :class="{ loading: isLoading }">
			<span class="sm">{{ username }}</span>
			<a href="/logout">Logout</a>
		</div>
	</header>
</template>

<script>
export default {
	name: "TileContainer",
	props: {
		username: String,
		isLoading: Boolean,
	},
};
</script>

<style lang="scss" scoped>
@import "../scss/breakpoints.scss";
@import "../scss/colors.scss";

header {
	background-color: $cl-background-dark;
	font-size: 20pt;
	font-family: Roboto, Helvetica, Arial, sans-serif;
	display: flex;
	flex-direction: row;
	padding: 0.3em 0.3em;

	@include media-breakpoint-up(md) {
		padding: 0.3em 1em;
	}
}

.item {
	display: flex;
	flex-direction: row;

	&.user {
		margin-left: auto;
	}

	&.loading {
		filter: brightness(1.3);
		border-radius: 1em;
		width: 10ch;
	}

	img {
		height: 1em;
		margin: auto 0;
	}
}

.sm {
	margin: auto 0;
	font-size: 0.7em;

	@include media-breakpoint-down(xxs) {
		display: none;
	}
}

a {
	font-size: 0.55em;
	line-height: 2.2em;
	text-decoration: none;
	background-color: #303339;
	border: none;
	color: inherit;
	padding: 1px 6px;
	margin-left: 0.7em;

	&:hover {
		filter: brightness(1.1);
	}
}
</style>
