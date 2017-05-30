const gulp = require('gulp');
const sass = require('gulp-sass');
const connect = require('gulp-connect');
const nodemon = require('gulp-nodemon');
const child_process = require('child_process');

// keeps gulp from crashing for scss errors
gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
      .pipe(sass({ errLogToConsole: true }))
      .pipe(gulp.dest('./public/css'));
});

gulp.task('livereload', function (){
  gulp.src('./views/**/*')
  .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./public/**/*', ['livereload']);
});

gulp.task('start', function () {
  nodemon({
    script: 'server.js'
  , ext: 'js html'
  , env: { 'NODE_ENV': 'development' }
  })
})

gulp.task('redis-start', function() {
  child_process.exec('redis-server', function(err, stdout, stderr) {
    process.on('exit', stopRedis);
    console.log(stdout);
    if (err !== null) {
      console.log('exec error: ' + err);
    }
  });
});


gulp.task('default', ['sass', 'watch', 'start','redis-start']);

function stopRedis(){
  child_process.exec('redis-cli shutdown', function(err, stdout, stderr) {
    console.log(stdout);
    console.log('stopping redis server');
    if (err !== null) {
      console.log('exec error: ' + err);
    }
  });
}