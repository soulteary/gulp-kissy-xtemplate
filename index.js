'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var Xtemplate = require('kissy-xtemplate');

module.exports = function (options) {
//	if (!options.version) {
//		throw new gutil.PluginError('gulp-kissy-xtemplate', '`version` required');
//	}
    options = options || {};
    options.outputCharset = options.outputCharset || 'utf8';
    options.inputCharset = options.inputCharset || 'utf8';

	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			this.push(file);
			return cb();
		}

		if (file.isStream()) {
			this.emit('error', new gutil.PluginError('gulp-kissy-xtemplate', 'Streaming not supported'));
			return cb();
		}

		try {
            var xtemp = new Xtemplate(options);
			file.contents = new Buffer(xtemp._compile(file.contents.toString(), file.path, options.inputCharset, options.outputCharset));
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-kissy-xtemplate', err));
		}

		this.push(file);
		cb();
	});
};
