var gulp = require('gulp');
var bump = require('gulp-bump');
var git = require('gulp-git');


gulp.task('pre-commit', function() {
  console.log('Bumpig up the version');
  gulp.src(['./package.json'])
  .pipe(bump({type:'patch'}))
  .pipe(gulp.dest('./'))
  .pipe(git.add()); 
});