const moment = require('moment-timezone');
const format = require('../../src/scripts/format');

test('check: must returns specific string', () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const test = format.check(`${chars.toUpperCase()} ${chars.toLowerCase()}`, []);
    expect(test).toBe('ABCEFGJKLOPQRTUVXZ abcefgjklopqrtuvxz');
});

test('toObject: must returns an object with specific key-values', () => {
    const value = '1979-06-03T01:23:45' + moment(new Date(), 'Asia/Tehran').format('Z');
    const date = moment(value).tz('Asia/Tehran');
    const test = format.toObject(date);
    expect(test).toStrictEqual({ week: 1, year: 1979, month: 6, day: 3, hour: 1, minute: 23, second: 45 });
});

test('toString: must returns specific date string', () => {
    const date = { week: 1, year: 1979, month: 6, day: 3, hour: 1, minute: 23, second: 45 };
    const test = format.toString(date, 'Y-M-D H:I:S y-m-d h:i:s', 'en');
    expect(test).toBe('1979-06-03 01:23:45 79-6-3 1:23:45');
});
