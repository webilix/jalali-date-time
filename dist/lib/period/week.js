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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.periodWeek = void 0;
const moment = __importStar(require("moment-timezone"));
const JDate = __importStar(require("../../script/date"));
const JDT = __importStar(require("../../script/jdt"));
const getTo = (date, timezone) => {
    while (date.getDay() != 5)
        date = new Date(date.getTime() + 24 * 3600000);
    return JDate.getEndOf('D', date, timezone);
};
const periodWeek = (weeks, date, timezone) => {
    date = date || new Date();
    if (!JDate.checkDate(date))
        throw new TypeError('Invalid Date');
    if (!JDate.checkTimezone(timezone || ''))
        timezone = JDT.timezone();
    if (isNaN(weeks) || weeks < 1)
        throw new TypeError('Weeks must be bigger than 0');
    const to = getTo(date, timezone || 'Asia/Tehran');
    const from = JDate.getStartOf('D', new Date(to.getTime() - weeks * 7 * 24 * 3600000 + 1), timezone);
    const periods = [];
    let start = from;
    while (start < to) {
        periods.push({
            from: start,
            to: JDate.getEndOf('D', new Date(start.getTime() + 7 * 24 * 3600000 - 1), timezone),
        });
        start = JDate.getStartOf('D', moment
            .default(start)
            .tz(timezone || 'Asia/Tehran')
            .add(7, 'day')
            .toDate(), timezone);
    }
    return { from, to, periods };
};
exports.periodWeek = periodWeek;
//# sourceMappingURL=week.js.map