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

test('getDate: must returns false for invalid date parameter', () => {
    const test = dateString.getDate(null);
    expect(test).toBe(false);
});

test('getDate: must returns specific string value', () => {
    const test = dateString.getDate(new Date(date), { timezone: 'Asia/Tehran' });
    expect(test).toBe('1358-03-13');
});

test('getTime: must returns false for invalid date parameter', () => {
    const test = dateString.getTime(null);
    expect(test).toBe(false);
});

test('getTime: must returns specific string value', () => {
    const test = dateString.getTime(new Date(date), { timezone: 'Asia/Tehran' });
    expect(test).toBe('01:23:45');
});

test('getString: must returns false for invalid date parameter', () => {
    const test = dateString.getString(null);
    expect(test).toBe(false);
});

test('getString: must returns specific string value', () => {
    const test = dateString.getString(new Date(date), { timezone: 'Asia/Tehran' });
    expect(test).toBe('1358-03-13 01:23:45');
});

test('getTitle: must returns false for invalid date parameter', () => {
    const test = dateString.getTitle(null);
    expect(test).toBe(false);
});

test('getTitle: must returns specific string value', () => {
    const test = dateString.getTitle(new Date(date), { timezone: 'Asia/Tehran' });
    expect(test).toBe('یک‌شنبه, ۱۳ خرداد ۱۳۵۸');
});

test('getFullText: must returns false for invalid date parameter', () => {
    const test = dateString.getFullText(null);
    expect(test).toBe(false);
});

test('getFullText: must returns specific string value', () => {
    const test = dateString.getFullText(new Date(date), { timezone: 'Asia/Tehran' });
    expect(test).toBe('یک‌شنبه, ۱۳ خرداد ۱۳۵۸ ۰۱:۲۳:۴۵');
});
