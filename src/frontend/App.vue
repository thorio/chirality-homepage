<template>
	<Header :username="user.name" :isLoading="isLoading" />
	<TileContainer />
</template>

<script>
import { getUser } from "./api";
import Header from "./components/Header.vue";
import TileContainer from "./components/TileContainer.vue";

export default {
	name: "App",
	components: {
		Header,
		TileContainer,
	},
	data() {
		return {
			isLoading: true,
			// skeleton
			user: { name: "" },
		};
	},
	created() {
		getUser().then((data) => {
			this.user.name = data.name;
			this.isLoading = false;
		});
	},
};
</script>

<style lang="scss">
@use "./scss/loadingShimmer.scss";
@import "./scss/colors.scss";
@import url("https://fonts.googleapis.com/css?family=Roboto");

body {
	margin: 0;
	background-color: $cl-background;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	color: #dcddde;
}

html {
	box-sizing: border-box;
}

*,
*:before,
*:after {
	box-sizing: inherit;
}

*:focus {
	outline: 1px solid #777;
}
</style>
