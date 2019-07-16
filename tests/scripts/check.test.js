const check = require('../../src/scripts/check');

test('isDate: should returns true', () => {
    const test = check.isDate(new Date());
    expect(test).toBe(true);
});

test('isDate: should returns false', () => {
    const test = check.isDate(null);
    expect(test).toBe(false);
});

test('isTimezone: should returns true', () => {
    const test = check.isTimezone('Asia/Tehran');
    expect(test).toBe(true);
});

test('isTimezone: should returns false', () => {
    const test = check.isTimezone(null);
    expect(test).toBe(false);
});

test('isLocale: should returns true', () => {
    const test = check.isLocale('EN');
    expect(test).toBe(true);
});

test('isLocale: should returns false', () => {
    const test = check.isLocale(null);
    expect(test).toBe(false);
});

test('isString: should returns true', () => {
    const test = check.isString('this is a test');
    expect(test).toBe(true);
});

test('isString: should returns false', () => {
    const test = check.isString(null);
    expect(test).toBe(false);
});
