'use strict';

const convert = require('../scripts/convert');

/**
 * @typedef {object} GregorianDateObject
 * @property {number} year year
 * @property {number} month month
 * @property {number} day day
 * @property {string} date date string
 */

/**
 * @param {string} jalali jalali date string
 * @return {boolean|GregorianDateObject}
 */
module.exports = jalali => {
    if (!jalali) return false;

    let [year, month, day] = jalali.split('-');
    year = parseInt(year, 10);
    if (isNaN(year) || year < 1000) return false;
    month = parseInt(month, 10);
    if (isNaN(month) || month < 1 || month > 12) return false;
    day = parseInt(day, 10);
    if (isNaN(day) || day < 1 || day > 31) return false;

    return convert.toGregorian({ year, month, day });
};
