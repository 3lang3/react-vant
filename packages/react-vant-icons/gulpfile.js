const gulp = require('gulp');
const ts = require('gulp-typescript');

gulp.task('default', () => {
  return gulp
    .src('assets/svg/*.tsx')
    .pipe(
      ts({
        noImplicitAny: true,
        jsx: 'react',
        declaration: true,
      }),
    )
    .pipe(gulp.dest('es/'));
});
