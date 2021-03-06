"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JalaliDateTime = void 0;
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