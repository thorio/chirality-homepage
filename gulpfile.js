/* eslint-env node */
const gulp = require("gulp"),
	del = require("del"),
	frontend = require("./tasks/frontend"),
	initServer = require("./tasks/server");

const src_dir = "./src",
	build_dir = "./build";

const server = initServer(`${src_dir}/server`, build_dir);

function clean() {
	return del(`${build_dir}/**/*`);
}

const build = gulp.parallel(frontend.build, server.build);
const watch = gulp.series(clean, server.build, gulp.parallel(server.watch, frontend.watch));

module.exports = { build, watch, clean };
