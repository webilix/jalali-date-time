import { JalaliDateTime } from '../index';
const jalali = JalaliDateTime();

test('now', () => {
    const test = jalali.now();
    expect(test.length).toBe(19);
});

test('toDate', () => {
    const test = jalali.toDate(new Date('1979-06-03 12:00:00 GMT+4:30'));
    expect(test).toBe('1358-03-13');
});

test('toTime', () => {
    const test = jalali.toTime(new Date('1979-06-03 12:00:00 GMT+4:30'));
    expect(test).toBe('12:00:00');
});

test('toString', () => {
    const test = jalali.toString(new Date('1979-06-03 12:00:00 GMT+4:30'));
    expect(test).toBe('1358-03-13 12:00:00');
});

test('toTitle', () => {
    const test = jalali.toTitle(new Date('1979-06-03 12:00:00 GMT+4:30'));
    expect(test).toBe('یک‌شنبه, ۱۳ خرداد ۱۳۵۸');
});

test('toFullText', () => {
    const test = jalali.toFullText(new Date('1979-06-03 12:00:00 GMT+4:30'));
    expect(test).toBe('یک‌شنبه, ۱۳ خرداد ۱۳۵۸ ۱۲:۰۰:۰۰');
});

test('toObject', () => {
    const test = jalali.toObject(new Date('1979-06-03 12:00:00 GMT+4:30'));
    expect(test).toStrictEqual({ week: 1, year: 1358, month: 3, day: 13, hour: 12, minute: 0, second: 0 });
});

test('dayOfWeek', () => {
    const test = jalali.dayOfWeek(new Date('1979-06-03'));
    expect(test).toBe(1);

    const index: number[] = [...Array(7).keys()];
    const days: number[] = index.map((i: number) => {
        const date: Date = new Date(new Date().getTime() + i * 24 * 3600 * 1000);
        return jalali.dayOfWeek(date);
    });

    days.forEach((day: number) => expect(index.includes(day)).toBe(true));
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

test('nextDay', () => {
    const date = new Date(jalali.gregorian('1358-03-13').date);
    const test = jalali.toDate(jalali.nextDay(0, date));
    expect(test).toBe('1358-03-20');
});

test('nextMonth', () => {
    const date = new Date(jalali.gregorian('1358-03-13').date);
    const first = jalali.toDate(jalali.nextMonth('FIRST', date));
    const last = jalali.toDate(jalali.nextMonth('LAST', date));

    expect(first).toBe('1358-04-01');
    expect(last).toBe('1358-03-31');
});

test('nextYear', () => {
    const date = new Date(jalali.gregorian('1403-12-30').date);
    const test = jalali.nextYear(date);
    expect(test.getTime()).toBe(1900182600000);
});

test('periodHour', () => {
    const test = jalali.periodHour(24);
    expect(test.periods.length).toBe(24);
    expect(test.to.getTime() - test.from.getTime()).toBe(24 * 3600_000 - 1);
});

test('periodDay', () => {
    const test = jalali.periodDay(7);
    expect(test.periods.length).toBe(7);
    expect(test.to.getTime() - test.from.getTime()).toBe(7 * 24 * 3600_000 - 1);
});

test('periodMonth', () => {
    const test = jalali.periodMonth(12);
    expect(test.periods.length).toBe(12);
});

test('periodYear', () => {
    const date: Date = new Date();
    const test = jalali.periodYear(12, date);
    expect(test.periods.length).toBe(12);
    expect(+jalali.toString(test.from, { format: 'Y' })).toBe(+jalali.toString(date, { format: 'Y' }) - 11);
});
