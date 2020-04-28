var gulp = require('gulp');
var ts = require('gulp-typescript');

// Task para compilar TypeScript
gulp.task('typescript', () => {
    // Seleccionar todos los archivos .ts
    var tsResult = gulp.src('./src/compilador/AST/*.ts')
    .pipe(ts({
    noImplicitAny: true
 }));
    // Destino del proyecto compilado
    return tsResult.js.pipe(gulp.dest('./src/compilador/AST_JS'));
});

// Task para observar los cambios al proyecto
gulp.task('watch', () => {
    // Observar proyecto
    gulp.watch('./src/compilador/AST/*.ts', gulp.series('typescript'));
});

// Trigger a los tasks
gulp.task('default', gulp.parallel('typescript', 'watch'));