"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const JDate = __importStar(require("../script/date"));
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
test('JDate: toJalali', () => {
    const date = { week: 1, year: 1979, month: 6, day: 3, hour: 12, minute: 34, second: 56 };
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
    const date = { week: 1, year: 1358, month: 3, day: 13, hour: 12, minute: 34, second: 56 };
    const test = JDate.toGregorian(date);
    expect(test).toStrictEqual({ year: 1979, month: 6, day: 3, date: '1979-06-03' });
});
//# sourceMappingURL=date.test.js.map