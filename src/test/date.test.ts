import * as JDate from '../script/date';
import { JalaliDateTimeObject } from '../interface/object';

test('JDate: check date (TRUE)', () => {
    const test = JDate.checkDate(new Date());
    expect(test).toBe(true);
});

test('JDate: check date (FALSE)', () => {
    const test = eval('JDate.checkDate()');
    expect(test).toBe(false);
});

test('JDate: check locale (TRUE)', () => {
    const test = JDate.checkLocale('Fa');
    expect(test).toBe(true);
});

test('JDate: check locale (FALSE)', () => {
    const test = JDate.checkLocale('Fn');
    expect(test).toBe(false);
});

test('JDate: check timezone (TRUE)', () => {
    const test = JDate.checkTimezone('Asia/Tehran');
    expect(test).toBe(true);
});

test('JDate: check timezone (FALSE)', () => {
    const test = JDate.checkTimezone('Asian/Tehran');
    expect(test).toBe(false);
});

test('JDate: check month (TRUE)', () => {
    const test = JDate.checkMonth('1398-01');
    expect(test).toBe(true);
});

test('JDate: check month (FALSE)', () => {
    const test = JDate.checkMonth('1398-21');
    expect(test).toBe(false);
});

test('JDate: toJalali', () => {
    const date: JalaliDateTimeObject = { week: 1, year: 1979, month: 6, day: 3, hour: 12, minute: 34, second: 56 };
    const test = JDate.toJalali(date);
    expect(test).toStrictEqual({
        week: 1,
        year: 1358,
        month: 3,
        day: 13,
        hour: 12,
        minute: 34,
        second: 56,
    });
});

test('JDate: toGregorian', () => {
    const date: JalaliDateTimeObject = { week: 1, year: 1358, month: 3, day: 13, hour: 12, minute: 34, second: 56 };
    const test = JDate.toGregorian(date);
    expect(test).toStrictEqual({ year: 1979, month: 6, day: 3, date: '1979-06-03' });
});
