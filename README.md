# [gulp](http://gulpjs.com)-kissy-xtemplate [![Build Status](https://travis-ci.org/daxingplay/gulp-kissy-xtemplate.svg?branch=master)](https://travis-ci.org/daxingplay/gulp-kissy-xtemplate)

> Lorem ipsum


## Install

```bash
$ npm install --save-dev gulp-kissy-xtemplate
```


## Usage

```js
var gulp = require('gulp');
var kissyXtemplate = require('gulp-kissy-xtemplate');

gulp.task('default', function () {
	return gulp.src('src/app.ext')
		.pipe(kissyXtemplate())
		.pipe(gulp.dest('dist'));
});
```


## API

### kissyXtemplate(options)

#### options

##### foo

Type: `Boolean`  
Default: `false`

Lorem ipsum.


## License

MIT © [daxingplay](https://github.com/daxingplay)
