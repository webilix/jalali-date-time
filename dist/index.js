"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const JDT = __importStar(require("./script/jdt"));
const now_1 = require("./lib/now");
const date_1 = require("./lib/date");
const time_1 = require("./lib/time");
const string_1 = require("./lib/string");
const title_1 = require("./lib/title");
const full_text_1 = require("./lib/full-text");
const object_1 = require("./lib/object");
const days_in_month_1 = require("./lib/days-in-month");
const calendar_1 = require("./lib/calendar");
const gregorian_1 = require("./lib/gregorian");
const timezones_1 = require("./lib/timezones");
function JalaliDateTime(options) {
    JDT.init(options);
    return {
        now: now_1.now,
        toDate: date_1.toDate,
        toTime: time_1.toTime,
        toString: string_1.toString,
        toTitle: title_1.toTitle,
        toFullText: full_text_1.toFullText,
        toObject: object_1.toObject,
        daysInMonth: days_in_month_1.daysInMonth,
        calendar: calendar_1.calendar,
        gregorian: gregorian_1.gregorian,
        timezones: timezones_1.timezones,
    };
}
exports.JalaliDateTime = JalaliDateTime;
//# sourceMappingURL=index.js.map