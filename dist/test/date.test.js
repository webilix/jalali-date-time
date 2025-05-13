"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const JDate = __importStar(require("../script/date"));
test('JDate: check date (TRUE)', () => {
    const test = JDate.isDate(new Date());
    expect(test).toBe(true);
});
test('JDate: check date (FALSE)', () => {
    const test = eval('JDate.isDate()');
    expect(test).toBe(false);
});
test('JDate: check locale (TRUE)', () => {
    const test = JDate.isLocale('Fa');
    expect(test).toBe(true);
});
test('JDate: check locale (FALSE)', () => {
    const test = JDate.isLocale('Fn');
    expect(test).toBe(false);
});
test('JDate: check timezone (TRUE)', () => {
    const test = JDate.isTimezone('Asia/Tehran');
    expect(test).toBe(true);
});
test('JDate: check timezone (FALSE)', () => {
    const test = JDate.isTimezone('Asian/Tehran');
    expect(test).toBe(false);
});
test('JDate: check month (TRUE)', () => {
    const test = JDate.isMonth('1398-01');
    expect(test).toBe(true);
});
test('JDate: check month (FALSE)', () => {
    const test = JDate.isMonth('1398-21');
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