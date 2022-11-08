const gulp = require('gulp');
const ts = require('gulp-typescript');
const babel = require('gulp-babel');
const del = require('del');

function clean() {
  return del(['./lib/**', './es/**']);
}

function buildES() {
  return gulp
    .src('src/icons/*.tsx')
    .pipe(
      ts({
        moduleResolution: 'node',
        target: 'ES2015',
        jsx: 'react',
        declaration: true,
        skipLibCheck: true,
        allowSyntheticDefaultImports: true,
      }),
    )
    .pipe(gulp.dest('./es/'));
}

function buildCJS() {
  return gulp
    .src(['es/**/*.js'])
    .pipe(
      babel({
        plugins: ['@babel/plugin-transform-modules-commonjs'],
      }),
    )
    .pipe(gulp.dest('lib/'));
}

exports.default = gulp.series(clean, buildES, buildCJS);
