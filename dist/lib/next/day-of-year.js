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
exports.nextDayOfYear = exports.nextYear = void 0;
const JDate = __importStar(require("../../script/date"));
const JDT = __importStar(require("../../script/jdt"));
const string_1 = require("../string");
const gregorian_1 = require("../gregorian");
const getMonth = (y, m) => {
    const g = (0, gregorian_1.gregorian)(y.toString() + m).date;
    const d = new Date(g);
    return (0, string_1.toString)(d, { format: '-M-D' });
};
/**
 * @deprecated This method is deprecated and will be removed in future versions. Please use nextDayOfYear instead
 */
function nextYear(date, timezone) {
    return nextDayOfYear(date || new Date(), timezone || JDT.timezone());
}
exports.nextYear = nextYear;
function nextDayOfYear(arg1, arg2) {
    const date = arg1 && JDate.checkDate(arg1) ? arg1 : new Date();
    if (!JDate.checkDate(date))
        throw new TypeError('Invalid Date');
    let timezone = arg1 && typeof arg1 === 'string' ? arg1 : arg2 || '';
    if (!JDate.checkTimezone(timezone))
        timezone = JDT.timezone();
    let y = +(0, string_1.toString)(date, { timezone, format: 'Y' });
    const month = (0, string_1.toString)(date, { timezone, format: '-M-D' });
    do {
        y++;
    } while (getMonth(y, month) !== month);
    const gDate = (0, gregorian_1.gregorian)(y.toString() + month).date;
    return JDate.getMoment(new Date(gDate), timezone).startOf('D').toDate();
}
exports.nextDayOfYear = nextDayOfYear;
//# sourceMappingURL=day-of-year.js.map