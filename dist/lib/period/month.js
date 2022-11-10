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
exports.periodMonth = void 0;
const JDate = __importStar(require("../../script/date"));
const JDT = __importStar(require("../../script/jdt"));
const string_1 = require("../string");
const days_in_month_1 = require("../days-in-month");
const gregorian_1 = require("../gregorian");
const getLastDay = (date, timezone) => {
    const month = (0, string_1.toString)(date, { timezone, format: 'Y-M' });
    const days = (0, days_in_month_1.daysInMonth)(month);
    const g = (0, gregorian_1.gregorian)(`${month}-${days}`).date;
    return JDate.getMoment(new Date(g), timezone).endOf('D').toDate();
};
const getFirstDay = (date, timezone) => {
    const month = (0, string_1.toString)(date, { timezone, format: 'Y-M' });
    const g = (0, gregorian_1.gregorian)(`${month}-01`).date;
    return JDate.getMoment(new Date(g), timezone).startOf('D').toDate();
};
const periodMonth = (months, date, timezone) => {
    date = date || new Date();
    if (!JDate.checkDate(date))
        throw new TypeError('Invalid Date');
    if (!JDate.checkTimezone(timezone || ''))
        timezone = JDT.timezone();
    if (isNaN(months) || months < 1)
        throw new TypeError('Months must be bigger than 0');
    let to = getLastDay(date, timezone || 'Asia/Tehran');
    const periods = [];
    while (periods.length < months) {
        const from = getFirstDay(to, timezone || 'Asia/Tehran');
        periods.unshift({ from, to });
        to = new Date(from.getTime() - 1);
    }
    return { from: periods[0].from, to: periods[periods.length - 1].to, periods };
};
exports.periodMonth = periodMonth;
//# sourceMappingURL=month.js.map