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
exports.periodMonth = void 0;
const moment = __importStar(require("moment-timezone"));
const JDate = __importStar(require("../../script/date"));
const JDT = __importStar(require("../../script/jdt"));
const string_1 = require("../string");
const days_in_month_1 = require("../days-in-month");
const getTo = (date, timezone) => {
    const to = moment
        .default(date)
        .tz(timezone || 'Asia/Tehran')
        .endOf('D')
        .toDate();
    const day = (0, string_1.toString)(to, { timezone, format: 'D' });
    const month = (0, string_1.toString)(to, { timezone, format: 'Y-M' });
    const days = (0, days_in_month_1.daysInMonth)(month);
    return new Date(to.getTime() + (days - +day) * 24 * 3600000);
};
const getFirstDay = (date, timezone) => {
    const month = (0, string_1.toString)(date, { timezone, format: 'Y-M' });
    const days = (0, days_in_month_1.daysInMonth)(month);
    return new Date(date.getTime() - days * 24 * 3600000 + 1);
};
const periodMonth = (months, date, timezone) => {
    date = date || new Date();
    if (!JDate.checkDate(date))
        throw new TypeError('Invalid Date');
    if (!JDate.checkTimezone(timezone || ''))
        timezone = JDT.timezone();
    if (isNaN(months) || months < 1)
        throw new TypeError('Months must be bigger than 0');
    const to = getTo(date, timezone || 'Asia/Tehran');
    let from = getFirstDay(to, timezone || 'Asia/Tehran');
    const periods = [{ from, to }];
    for (let i = 1; i < months; i++) {
        const last = new Date(from.getTime() - 1);
        from = getFirstDay(last, timezone || 'Asia/Tehran');
        periods.push({ from, to: last });
    }
    periods.reverse();
    return { from, to, periods };
};
exports.periodMonth = periodMonth;
//# sourceMappingURL=month.js.map