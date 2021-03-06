import { JalaliDateTimeObject } from '../interface/object';
import { JalaliDateTime } from '../index';
const jalali = JalaliDateTime();

test('now', () => {
    const test = jalali.now();
    expect(test.length).toBe(19);
});

test('toDate', () => {
    const test = jalali.toDate(new Date('1979-06-03 12:00:00'));
    expect(test).toBe('1358-03-13');
});

test('toTime', () => {
    const test = jalali.toTime(new Date('1979-06-03 12:00:00'));
    expect(test).toBe('12:00:00');
});

test('toString', () => {
    const test = jalali.toString(new Date('1979-06-03 12:00:00'));
    expect(test).toBe('1358-03-13 12:00:00');
});

test('toTitle', () => {
    const test = jalali.toTitle(new Date('1979-06-03 12:00:00'));
    expect(test).toBe('یک‌شنبه, ۱۳ خرداد ۱۳۵۸');
});

test('toFullText', () => {
    const test = jalali.toFullText(new Date('1979-06-03 12:00:00'));
    expect(test).toBe('یک‌شنبه, ۱۳ خرداد ۱۳۵۸ ۱۲:۰۰:۰۰');
});

test('toObject', () => {
    const test = jalali.toObject(new Date('1979-06-03 12:00:00'));
    expect(test).toStrictEqual({ week: 1, year: 1358, month: 3, day: 13, hour: 12, minute: 0, second: 0 });
});

test('daysInMonth', () => {
    const test = jalali.daysInMonth('1391-12');
    expect(test).toBe(30);
});

test('gregorian', () => {
    const test = jalali.gregorian('1358-03-13');
    expect(test).toStrictEqual({ year: 1979, month: 6, day: 3, date: '1979-06-03' });
});

test('timezones', () => {
    const test = jalali.timezones();
    expect(test.indexOf('Asia/Tehran') !== -1).toBe(true);
});
