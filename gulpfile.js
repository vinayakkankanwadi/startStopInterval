var gulp = require('gulp');
var bump = require('gulp-bump');
var git = require('gulp-git');
var mocha  = require('gulp-mocha');
var istanbul = require('gulp-istanbul');

gulp.task('pre-test', function () {
  return gulp.src(['*.js'])
    // Covering files
    .pipe(istanbul())
    // Force `require` to return covered files
    .pipe(istanbul.hookRequire());
});

gulp.task('test', ['pre-test'], function() {
  return gulp
    .src('test/*.js')
    .pipe(mocha())
	// Creating the reports after tests ran
    .pipe(istanbul.writeReports())
    // Enforce a coverage of at least 90%
    .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } }));
});

gulp.task('pre-commit', ['test'], function() {
  console.log('Bumpig up the version');
  gulp.src(['./package.json'])
  .pipe(bump({type:'patch'}))
  .pipe(gulp.dest('./'))
  .pipe(git.add()); 
});