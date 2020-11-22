/* eslint-env node */
const CopyWebpackPlugin = require("copy-webpack-plugin");

const src_dir = "src/frontend",
	dest_dir = "build/public";

module.exports = {
	outputDir: dest_dir,
	pages: {
		index: {
			entry: `${src_dir}/main.js`,
			template: `${src_dir}/index.html`,
			title: "Chirality - Home",
		},
	},
	devServer: {
		port: 3000,
		proxy: {
			"^/api": {
				target: "http://localhost:5000",
			},
		},
	},
	configureWebpack: () => {
		return {
			plugins: [new CopyWebpackPlugin({
				patterns: [
					{ from: "**/*", context: `${src_dir}/static/` },
					{ from: `${src_dir}/assets/logo.svg`, to: "favicon.svg" },
				],
			})],
		};
	},
};
