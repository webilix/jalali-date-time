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
const gregorian_1 = require("./gregorian");
const string_1 = require("./string");
const date_1 = require("./date");
const full_text_1 = require("./full-text");
function calendar(month) {
    month = month ? month : string_1.toString(new Date(), { format: 'Y-M' });
    if (!JDate.checkMonth(month))
        throw new TypeError('Invalid Month');
    const gDate = gregorian_1.gregorian(month + '-01').date;
    const cDate = new Date(gDate + 'T12:00:00');
    const title = full_text_1.toFullText(cDate, { format: 'N Y' });
    let begin = cDate;
    while (begin.getDay() !== 6)
        begin = new Date(begin.getTime() - 24 * 3600 * 1000);
    const weeks = [];
    let days = [];
    let date = date_1.toDate(begin);
    while (date.substr(0, 7) <= month || days.length % 7 !== 0) {
        days.push({
            date,
            month: date.substr(0, 7),
            day: Number(date.substr(8)),
        });
        if (days.length === 7) {
            weeks.push(days);
            days = [];
        }
        begin = new Date(begin.getTime() + 24 * 3600 * 1000);
        date = date_1.toDate(begin);
    }
    return { month, title, weeks };
}
exports.calendar = calendar;
//# sourceMappingURL=calendar.js.map