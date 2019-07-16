const option = require('../../src/scripts/option');

test('verify: check default values', () => {
    const test = option.verify({});
    expect(test).toStrictEqual({
        timezone: 'Asia/Tehran',
        locale: 'en',
        fullTextFormat: 'W, D N Y H:I:S',
        titleFormat: 'W, D N Y',
        dateFormat: 'Y-M-D',
        timeFormat: 'H:I:S'
    });
});

test('verify: must returns an object with specific key-values', () => {
    const test = option.verify({
        timezone: 'UTC',
        locale: 'fa',
        fullTextFormat: 'W: D N Y - H:I:S',
        titleFormat: 'W: D N Y',
        dateFormat: 'Y M D',
        timeFormat: 'H I S'
    });
    expect(test).toStrictEqual({
        timezone: 'UTC',
        locale: 'fa',
        fullTextFormat: 'W: D N Y - H:I:S',
        titleFormat: 'W: D N Y',
        dateFormat: 'Y M D',
        timeFormat: 'H I S'
    });
});

test('get: must returns default values for timezone', () => {
    option.init({});
    const test = option.get('timezone');
    expect(test).toBe('Asia/Tehran');
});
