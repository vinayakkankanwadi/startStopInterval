var gulp = require('gulp');
var bump = require('gulp-bump');
var git = require('gulp-git');
var mocha  = require('gulp-mocha');

gulp.task('test', function() {
  return gulp
    .src('test/*.js')
    .pipe(mocha());
});

gulp.task('pre-commit', ['test'], function() {
  console.log('Bumpig up the version');
  gulp.src(['./package.json'])
  .pipe(bump({type:'patch'}))
  .pipe(gulp.dest('./'))
  .pipe(git.add()); 
});