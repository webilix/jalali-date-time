'use strict';

const check = require('./check');

let _default = {
    date: false
};

const init = options => {
    _default = verify(options);
};

const verify = options => {
    const timezone = _default.timezone ? _default.timezone : 'Asia/Tehran';
    const locale = _default.locale ? _default.locale : 'en';
    const fullTextFormat = _default.fullTextFormat ? _default.fullTextFormat : 'W, D N Y H:I:S';
    const titleFormat = _default.titleFormat ? _default.titleFormat : 'W, D N Y';
    const dateFormat = _default.dateFormat ? _default.dateFormat : 'Y-M-D';
    const timeFormat = _default.timeFormat ? _default.timeFormat : 'H:I:S';

    return {
        timezone: options && check.isTimezone(options.timezone) ? options.timezone : timezone,
        locale: (options && check.isLocale(options.locale) ? options.locale : locale).toLowerCase(),
        fullTextFormat: options && check.isString(options.fullTextFormat) ? options.fullTextFormat : fullTextFormat,
        titleFormat: options && check.isString(options.titleFormat) ? options.titleFormat : titleFormat,
        dateFormat: options && check.isString(options.dateFormat) ? options.dateFormat : dateFormat,
        timeFormat: options && check.isString(options.timeFormat) ? options.timeFormat : timeFormat
    };
};

const get = option => {
    return _default[option] ? _default[option] : false;
};

module.exports = {
    init,
    verify,
    get
};
