/* eslint-env node */
const gulp = require("gulp"),
	nodemon = require("gulp-nodemon"),
	source = require("vinyl-source-stream"),
	browserify = require("browserify"),
	watchify = require("watchify"),
	babelify = require("babelify");

module.exports = (src_dir, build_dir) => {

	const browserifyInstance = browserify({
			entries: ["main.js"],
			cache: {},
			packageCache: {},
			basedir: src_dir,
			node: true,
		})
		.transform(babelify.configure({
			presets: [
				["@babel/preset-env", {
					"targets": {
						"browsers": ["> 2%, not dead"],
					},
			}],
		],
		}));

	function build() {
		return browserifyInstance
			.bundle()
			.pipe(source("bundle.js"))
			.pipe(gulp.dest(build_dir));
	}

	async function watch() {
		watchify(browserifyInstance); // enables cache

		nodemon({
			script: `${build_dir}/bundle.js`,
			watch: `${build_dir}/bundle.js`,
		});

		gulp.watch(src_dir, build);
	}

	return { build, watch };
};
