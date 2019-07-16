const gregorian = require('../../src/lib/gregorian');

test('gregorian: must returns false for invalid date string', () => {
    const test = gregorian('999-03-13');
    expect(test).toBe(false);
});

test('gregorian: must returns false for invalid date string', () => {
    const test = gregorian('1358-13-13');
    expect(test).toBe(false);
});

test('gregorian: must returns false for invalid date string', () => {
    const test = gregorian('1358-03-32');
    expect(test).toBe(false);
});

test('gregorian: must returns valid object with specific key-values', () => {
    const test = gregorian('1358-03-13');
    expect(test).toStrictEqual({ year: 1979, month: 6, day: 3, date: '1979-06-03' });
});
