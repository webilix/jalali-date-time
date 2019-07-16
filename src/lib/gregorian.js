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
 * @return {GregorianDateObject}
 */
module.exports = jalali => {
    if (typeof jalali !== 'string') throw new TypeError('Date is not String');

    let [year, month, day] = jalali.split('-');
    year = parseInt(year, 10);
    if (isNaN(year) || year < 1000) throw new RangeError('Year must be 4 digits');
    month = parseInt(month, 10);
    if (isNaN(month) || month < 1 || month > 12) throw new RangeError('Month is not between 1, 12');
    day = parseInt(day, 10);
    if (isNaN(day) || day < 1 || day > 31) throw new RangeError('Day is not between 1, 31');

    return convert.toGregorian({ year, month, day });
};
