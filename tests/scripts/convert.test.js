const convert = require('../../src/scripts/convert');

test('toJalali: must returns valid object with specific key-values', () => {
    const date = { week: 1, year: 1979, month: 6, day: 3, hour: 1, minute: 23, second: 45 };
    const test = convert.toJalali(date);
    expect(test).toStrictEqual({ week: 1, year: 1358, month: 3, day: 13, hour: 1, minute: 23, second: 45 });
});

test('toGregorian: must returns valid object with specific key-values', () => {
    const date = { year: 1358, month: 3, day: 13 };
    const test = convert.toGregorian(date);
    expect(test).toStrictEqual({ year: 1979, month: 6, day: 3, date: '1979-06-03' });
});
