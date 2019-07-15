'use strict';

const moment = require('moment-timezone');

const isDate = date => {
    return Object.prototype.toString.call(date) === '[object Date]';
};

const isTimezone = timezone => {
    return moment.tz.names().includes(timezone);
};

const isLocale = locale => {
    return ['en', 'EN', 'fa', 'FA'].includes(locale);
};

const isString = value => {
    return typeof value === 'string';
};

module.exports = {
    isDate,
    isTimezone,
    isLocale,
    isString
};
