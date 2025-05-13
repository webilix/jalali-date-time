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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
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