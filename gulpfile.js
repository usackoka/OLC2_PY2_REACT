var gulp = require('gulp');
var ts = require('gulp-typescript');

// Task para compilar TypeScript
gulp.task('typescript', () => {
    // Seleccionar todos los archivos .ts
    var tsResult = gulp.src('./src/compilador/AST/*.ts')
    .pipe(ts({
        noImplicitAny: true
    }));
    // Seleccionar todos los archivos .ts
    var tsResult2 = gulp.src('./src/compilador/AST/Expresiones/*.ts')
    .pipe(ts({
        noImplicitAny: true
    }));
    // Seleccionar todos los archivos .ts
    var tsResult3 = gulp.src('./src/compilador/AST/Sentencias/*.ts')
    .pipe(ts({
        noImplicitAny: true
    }));
    // Destino del proyecto compilado
    tsResult.js.pipe(gulp.dest('./src/compilador/AST_JS'));
    tsResult2.js.pipe(gulp.dest('./src/compilador/AST_JS/Expresiones'));
    return tsResult3.js.pipe(gulp.dest('./src/compilador/AST_JS/Sentencias'));
});

// Task para observar los cambios al proyecto
gulp.task('watch', () => {
    // Observar proyecto
    gulp.watch('./src/compilador/AST/*.ts', gulp.series('typescript'));
});

// Trigger a los tasks
gulp.task('default', gulp.parallel('typescript', 'watch'));