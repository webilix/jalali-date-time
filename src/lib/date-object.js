'use strict';

const moment = require('moment-timezone');

const check = require('../scripts/check');
const option = require('../scripts/option');
const convert = require('../scripts/convert');
const format = require('../scripts/format');

/**
 * @typedef {object} DateObject
 * @property {number} week week day (saturday=0)
 * @property {number} year year
 * @property {number} month month
 * @property {number} day day
 * @property {number} hour hour
 * @property {number} minute minute
 * @property {number} second second
 */

/**
 * @param {Date} date date value
 * @param {string} timezone timezone
 * @return {boolean | DateObject}
 */
module.exports = (date, timezone = null) => {
    if (!check.isDate(date)) {
        return false;
    }

    if (!timezone || !check.isTimezone(timezone)) {
        timezone = option.get('timezone');
    }

    date = moment(date).tz(timezone);
    return convert.toJalali(format.toObject(date));
};
