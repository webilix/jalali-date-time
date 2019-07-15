/*!
 * jalali-date-time
 * Lightweight library for parsing and formating Jalali date with timezone functionality
 * Author: Ali Amirnezhad <webilix@gmail.com>
 * MIT Licensed
 */

'use strict';

const moment = require('moment-timezone');

const option = require('./src/scripts/option');
const dateString = require('./src/lib/date-string');

/**
 * @param {object} config
 * @param {string} config.timezone Default timezone
 * @param {string} config.locale Default number values locale (en/fa)
 * @param {string} config.fullTextFormat Default full text format string
 * @param {string} config.titleFormat Default title format string
 * @param {string} config.dateFormat Default date format string
 * @param {string} config.timeFormat Default time format string
 */
module.exports = (config = null) => {
    option.init(config);

    return {
        now: dateString.getNow,
        toDate: dateString.getDate,
        toTime: dateString.getTime,
        toString: dateString.getString,
        toTitle: dateString.getTitle,
        toFullText: dateString.getFullText,

        toObject: require('./src/lib/date-object'),
        gregorian: require('./src/lib/gregorian'),

        /**
         * @return {string[]}
         */
        timezones: () => {
            return moment.tz.names();
        }
    };
};
