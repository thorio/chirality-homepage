/* eslint-env node */
const { promisify } = require("util"),
	exec = promisify(require("child_process").exec);

async function build() {
	await exec("npx vue-cli-service build --no-clean");
}

async function watch() {
	console.log("starting vue-cli watcher...");
	await exec("npx vue-cli-service serve");
}

module.exports = { build, watch };
