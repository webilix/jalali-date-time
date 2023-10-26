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
exports.calendar = void 0;
const JDate = __importStar(require("../script/date"));
const gregorian_1 = require("./gregorian");
const string_1 = require("./string");
const date_1 = require("./date");
const full_text_1 = require("./full-text");
function calendar(month) {
    month = month || (0, string_1.toString)(new Date(), { format: 'Y-M' });
    if (!JDate.isMonth(month))
        throw new TypeError('Invalid Month');
    const gDate = (0, gregorian_1.gregorian)(month + '-01').date;
    const cDate = new Date(gDate + 'T12:00:00');
    const title = (0, full_text_1.toFullText)(cDate, { format: 'N Y' });
    let begin = cDate;
    while (begin.getDay() !== 6)
        begin = new Date(begin.getTime() - 24 * 3600 * 1000);
    const weeks = [];
    let days = [];
    let date = (0, date_1.toDate)(begin);
    while (date.substring(0, 7) <= month || days.length % 7 !== 0) {
        days.push({ date, month: date.substring(0, 7), day: +date.substring(8) });
        if (days.length === 7) {
            weeks.push(days);
            days = [];
        }
        begin = new Date(begin.getTime() + 24 * 3600 * 1000);
        date = (0, date_1.toDate)(begin);
    }
    return { month, title, weeks };
}
exports.calendar = calendar;
//# sourceMappingURL=calendar.js.map