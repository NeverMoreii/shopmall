const gulp = require("gulp");

/*
	拷贝.html
 */
gulp.task("copy-html", function(){
	return gulp.src("*.html")
	.pipe(gulp.dest("dist/"))
	.pipe(connect.reload());
})

gulp.task("scripts", function(){
	return gulp.src(["*.js", "!gulpfile.js"])
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
})

gulp.task("images", function(){
	return gulp.src(["*.{jpg,png}", "images/*.jpg"])
	.pipe(gulp.dest("dist/images"))
	.pipe(connect.reload());
})

gulp.task("data", function(){
	return gulp.src(["*.json", "!package.json"])
	.pipe(gulp.dest("dist/data"))
	.pipe(connect.reload());
})

const scss = require("gulp-scss");
const minifyCSS = require("gulp-minify-css");
const rename = require("gulp-rename");

gulp.task("scss", function(){
	return gulp.src("stylesheet/index.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("index.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})

/*
	我们监听代码之前，先要将上述所有的代码执行一遍
 */
gulp.task("build", ["copy-html", "scripts", "images", "data", "scss"], function(){
	console.log("项目建立成功");
})


//编写监听
gulp.task("watch", function(){
	gulp.watch("*.html", ["copy-html"]);
	gulp.watch(["*.js", "!gulpfile.js"], ['scripts']);
	gulp.watch(["*.{jpg,png}", "images/*.jpg"], ['images']);
	gulp.watch(["*.json", "!package.json"], ["data"]);
	gulp.watch("stylesheet/index.scss", ['scss']);
})

const connect = require("gulp-connect");

gulp.task("server", function(){
	connect.server({
		root: "dist",
		port: 8888,
		livereload: true
	})
})



gulp.task("default", ["watch", "server"]);














