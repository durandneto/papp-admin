var concat = require('gulp-concat'),
    gulp = require('gulp'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    copy2 = require('gulp-copy2'),
    babel = require('gulp-babel');

gulp.task('babel', () => gulp.src('./src/**/*.jsx')
    .pipe(babel({
        presets: ['es2015'],
    }))
    .pipe(gulp.dest('./dist'))
);

gulp.task('babel-dist', () => gulp.src('./src/index.jsx')
    .pipe(babel({
        presets: ['es2015'],
    }))
    .pipe(gulp.dest('./'))
);

gulp.task('index-dist', () => gulp.src('./src/index.jsx')
    .pipe(babel({
        presets: ['es2015'],
    }))
    .pipe(gulp.dest('/Users/renato-vml/oi-diversos/react-header-footer/node_modules/oilib/'))
);

gulp.task('babel-renato', () => gulp.src('./src/**/*.jsx')
    .pipe(babel({
        presets: ['es2015'],
    }))
    .pipe(gulp.dest('/Users/renato-vml/oi-diversos/react-header-footer/node_modules/oilib/dist/'))
);

gulp.task('css', () => gulp.src('./src/**/*.css')
    .pipe(gulp.dest('./dist'))
);

gulp.task('build', ['babel', 'sass']);


gulp.task('copy-fonts', function() {
    var paths = [
        {
            src: './src/styles/fonts/**/',
            dest: './public/fonts/'
        }
    ];
    return copy2(paths);
});

gulp.task('copy-dist', function() {
    var paths = [
        {
            src: './dist/**/',
            dest: '/Users/renato-vml/oi-diversos/react-header-footer/node_modules/oilib/dist/'
        }
    ];
    return copy2(paths);
});


gulp.task('watch-js', function() {
    // Endless stream mode 
    return watch('./src/**/*.jsx')
        .pipe(babel({
            presets: ['es2015'],
        }))
        .pipe(gulp.dest('./dist'))
});

gulp.task('sass', function() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public'));
});


gulp.task('watch-js-dist', function() {
    // Endless stream mode 
    return watch('./src/**/*.jsx')
        .pipe(babel({
            presets: ['es2015'],
        }))
        .pipe(gulp.dest('/Users/renato-vml/oi-diversos/react-header-footer/node_modules/oilib/dist/'))
});

gulp.task('sass-dist', function() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('/Users/renato-vml/oi-diversos/react-header-footer/node_modules/oilib/dist/styles'));
});

gulp.task('fonts-dist', function() {
    var paths = [
        {
            src: './src/styles/fonts/**/',
            dest: '/Users/renato-vml/oi-diversos/react-header-footer/node_modules/oilib/dist/styles/fonts/'
        }
    ];
    return copy2(paths);
});


gulp.task('sass:watch', function() {
    gulp.watch('./src/styles/scss/**/*', ['sass']);
});

gulp.task('sass:watch-dist', function() {
    gulp.watch('./src/styles/**/*', ['sass-dist']);
});

