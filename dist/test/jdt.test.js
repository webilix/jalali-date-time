"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const JDT = __importStar(require("../script/jdt"));
test('JDT: check default values', () => {
    const test = JDT.init();
    expect(test).toStrictEqual({
        timezone: 'Asia/Tehran',
        locale: 'en',
        fullTextFormat: 'W, D N Y H:I:S',
        titleFormat: 'W, D N Y',
        dateFormat: 'Y-M-D',
        timeFormat: 'H:I:S',
    });
});
test('JDT: check incorrect values', () => {
    const test = JDT.init({ timezone: 'Asia/Tehrans', locale: 'FF' });
    expect(test).toStrictEqual({
        timezone: 'Asia/Tehran',
        locale: 'en',
        fullTextFormat: 'W, D N Y H:I:S',
        titleFormat: 'W, D N Y',
        dateFormat: 'Y-M-D',
        timeFormat: 'H:I:S',
    });
});
test('JDT: default timezone value', () => {
    const test = JDT.timezone();
    expect(test).toBe('Asia/Tehran');
});
test('JDT: response format string check', () => {
    const test = JDT.format('WwNnYyMmDdHhIiS', []);
    expect(test).toBe('');
});
test('JDT: invalid date on string function', () => {
    const test = () => {
        eval('JDT.string(null, {}, "")');
    };
    expect(test).toThrow(TypeError);
});
//# sourceMappingURL=jdt.test.js.map