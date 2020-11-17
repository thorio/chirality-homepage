/* eslint-env node */
const webpack = require("webpack");

module.exports = {
	outputDir: "build/public",
	pages: {
		index: {
			entry: "src/client/main.js",
			template: "src/client/index.html",
			title: "Chirality - Home",
		},
	},
	filenameHashing: false,
	configureWebpack: () => {
		return {
			plugins: [new webpack.HotModuleReplacementPlugin()],
		};
	},
	pluginOptions: {
		browserSync: {
			// proxy: {
			// 	target: "http://localhost:3010",
			// },
			port: 3000,
		},
	},
};
