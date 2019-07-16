const moment = require('moment-timezone');
const date = '1979-06-03T01:23:45' + moment(new Date(), 'Asia/Tehran').format('Z');

const option = require('../../src/scripts/option');
option.init({});

const dateObject = require('../../src/lib/date-object');

test('toObject: must return false for invalid date parameter', () => {
    const test = dateObject(null, 'Asia/Tehran');
    expect(test).toBe(false);
});

test('toObject: must returns an object with specific key-values', () => {
    const test = dateObject(new Date(date), 'Asia/Tehran');
    expect(test).toStrictEqual({ week: 1, year: 1358, month: 3, day: 13, hour: 1, minute: 23, second: 45 });
});

test('toObject: must returns an object but with different key-values', () => {
    const test = dateObject(new Date(date), 'UTC');
    expect(typeof test).toBe('object');
    expect(test).not.toStrictEqual({ week: 1, year: 1358, month: 3, day: 13, hour: 1, minute: 23, second: 45 });
});
