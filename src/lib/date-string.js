'use strict';

const moment = require('moment-timezone');

const option = require('../scripts/option');
const check = require('../scripts/check');
const convert = require('../scripts/convert');
const format = require('../scripts/format');

const _getDateFormat = config => {
    if (!config || !config.format) return false;
    return check.isString(config.format) ? config.format : false;
};

const _string = (date, config, dateFormat) => {
    if (!check.isDate(date)) {
        throw new TypeError('Invalid Date');
    }

    date = moment(date).tz(config.timezone);
    const jalali = convert.toJalali(format.toObject(date));
    return format.toString(jalali, dateFormat, config.locale);
};

/**
 * @param {object} config result configurations
 * @param {string} config.timezone timezone
 * @param {string} config.locale number values locale (en/fa)
 * @param {string} config.format result format string
 * @return {string}
 */
const getNow = (config = null) => {
    let dateFormat = _getDateFormat(config);
    config = option.verify(config);
    if (!dateFormat) dateFormat = config.dateFormat + ' ' + config.timeFormat;

    dateFormat = format.check(dateFormat, ['Y', 'M', 'D', 'H', 'I', 'S']);
    return _string(new Date(), config, dateFormat);
};

/**
 * @param {Date} date date value
 * @param {object} config result configurations
 * @param {string} config.timezone timezone
 * @param {string} config.locale number values locale (en/fa)
 * @param {string} config.format result format string
 * @return {string}
 */
const getDate = (date, config = null) => {
    let dateFormat = _getDateFormat(config);
    config = option.verify(config);
    if (!dateFormat) dateFormat = config.dateFormat;

    dateFormat = format.check(dateFormat, ['Y', 'M', 'D']);
    return _string(date, config, dateFormat);
};

/**
 * @param {Date} date date value
 * @param {object} config result configurations
 * @param {string} config.timezone timezone
 * @param {string} config.locale number values locale (en/fa)
 * @param {string} config.format result format string
 * @return {string}
 */
const getTime = (date, config = null) => {
    let dateFormat = _getDateFormat(config);
    config = option.verify(config);
    if (!dateFormat) dateFormat = config.timeFormat;

    dateFormat = format.check(dateFormat, ['H', 'I', 'S']);
    return _string(date, config, dateFormat);
};

/**
 * @param {Date} date date value
 * @param {object} config result configurations
 * @param {string} config.timezone timezone
 * @param {string} config.locale number values locale (en/fa)
 * @param {string} config.format result format string
 * @return {string}
 */
const getString = (date, config = null) => {
    let dateFormat = _getDateFormat(config);
    config = option.verify(config);
    if (!dateFormat) dateFormat = config.dateFormat + ' ' + config.timeFormat;

    dateFormat = format.check(dateFormat, ['Y', 'M', 'D', 'H', 'I', 'S']);
    return _string(date, config, dateFormat);
};

/**
 * @param {Date} date date value
 * @param {object} config result configurations
 * @param {string} config.timezone timezone
 * @param {string} config.locale number values locale (en/fa)
 * @param {string} config.format result format string
 * @return {string}
 */
const getTitle = (date, config = null) => {
    let dateFormat = _getDateFormat(config);
    let dateLocale = config && check.isLocale(config.locale) ? config.locale : 'fa';
    config = option.verify(config);
    config.locale = dateLocale;
    if (!dateFormat) dateFormat = config.titleFormat;

    dateFormat = format.check(dateFormat, ['W', 'N', 'Y', 'M', 'D']);
    return _string(date, config, dateFormat);
};

/**
 * @param {Date} date date value
 * @param {object} config result configurations
 * @param {string} config.timezone timezone
 * @param {string} config.locale number values locale (en/fa)
 * @param {string} config.format result format string
 * @return {string}
 */
const getFullText = (date, config = null) => {
    let dateFormat = _getDateFormat(config);
    let dateLocale = config && check.isLocale(config.locale) ? config.locale : 'fa';
    config = option.verify(config);
    config.locale = dateLocale;
    if (!dateFormat) dateFormat = config.fullTextFormat;

    dateFormat = format.check(dateFormat, ['W', 'N', 'Y', 'M', 'D', 'H', 'I', 'S']);
    return _string(date, config, dateFormat);
};

module.exports = {
    getNow,
    getDate,
    getTime,
    getString,
    getTitle,
    getFullText
};
