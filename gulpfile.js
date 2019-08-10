const gulp=require("gulp");
const sass=require("gulp-sass");
const connect=require("gulp-connect");
const min=require("gulp-minify-css");
const rename=require("gulp-rename");
gulp.task("img",function(){
    gulp.src("images/**/*")
    .pipe(gulp.dest("dist/images"))
    .pipe(connect.reload())
})
gulp.task("js",function(){
    gulp.src("js/**/*")
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload())
})
gulp.task("data",function(){
    gulp.src("data/**/*")
    .pipe(gulp.dest("dist/data"))
    .pipe(connect.reload())
})
// gulp.task("css",function(){
//     gulp.src("css/**/*")
//     .pipe(gulp.dest("dist/css"))
//     .pipe(connect.reload())
// })

gulp.task("css", function(){
    return gulp.src("css/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css"))
    .pipe(min())
    .pipe(rename("index.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());

    //*.css
    //*.min.css
})
gulp.task("html",function(){
    gulp.src("*.html")
    .pipe(gulp.dest("dist/"))
    .pipe(connect.reload())
})

gulp.task("build",["img","js","data","css","html"],function(){
    console.log("finish")
})

gulp.task("watch",function(){
    gulp.watch("*.html",["html"]);
    gulp.watch("images/**/*",["img"]);
    gulp.watch("js/**/*",["js"]);
    gulp.watch("css/**/*",["css"]);
    gulp.watch("data/**/*",["data"]);
})

gulp.task("server", function(){
    connect.server({
        root: "dist", //服务器根目录
        port: 8888, // 0~65535
        livereload: true
    })

    //配置实时刷新功能
})

gulp.task("start",["watch","server"])