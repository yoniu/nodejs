const gulp = require("gulp");

gulp.task("first", () => {

    gulp.src("./src/main.css")
    .pipe(gulp.dest("./dist"));

});