const moment = require('moment-timezone');
const date = '1979-06-03T01:23:45' + moment(new Date(), 'Asia/Tehran').format('Z');

const option = require('../../src/scripts/option');
option.init({});

const dateString = require('../../src/lib/date-string');

test('now: must return string with specific length', () => {
    const test = dateString.getNow('Asia/Tehran');
    expect(typeof test).toBe('string');
    expect(test.length).toBe(19);
});

test('getDate: must throw TypeError for invalid date parameter', () => {
    const test = () => {
        dateString.getDate(null);
    };
    expect(test).toThrow(TypeError);
});

test('getDate: must returns specific string value', () => {
    const test = dateString.getDate(new Date(date), { timezone: 'Asia/Tehran' });
    expect(test).toBe('1358-03-13');
});

test('getTime: must throw TypeError for invalid date parameter', () => {
    const test = () => {
        dateString.getTime(null);
    };
    expect(test).toThrow(TypeError);
});

test('getTime: must returns specific string value', () => {
    const test = dateString.getTime(new Date(date), { timezone: 'Asia/Tehran' });
    expect(test).toBe('01:23:45');
});

test('getString: must throw TypeError for invalid date parameter', () => {
    const test = () => {
        dateString.getString(null);
    };
    expect(test).toThrow(TypeError);
});

test('getString: must returns specific string value', () => {
    const test = dateString.getString(new Date(date), { timezone: 'Asia/Tehran' });
    expect(test).toBe('1358-03-13 01:23:45');
});

test('getTitle: must throw TypeError for invalid date parameter', () => {
    const test = () => {
        dateString.getTitle(null);
    };
    expect(test).toThrow(TypeError);
});

test('getTitle: must returns specific string value', () => {
    const test = dateString.getTitle(new Date(date), { timezone: 'Asia/Tehran' });
    expect(test).toBe('یک‌شنبه, ۱۳ خرداد ۱۳۵۸');
});

test('getFullText: must throw TypeError for invalid date parameter', () => {
    const test = () => {
        dateString.getFullText(null);
    };
    expect(test).toThrow(TypeError);
});

test('getFullText: must returns specific string value', () => {
    const test = dateString.getFullText(new Date(date), { timezone: 'Asia/Tehran' });
    expect(test).toBe('یک‌شنبه, ۱۳ خرداد ۱۳۵۸ ۰۱:۲۳:۴۵');
});
