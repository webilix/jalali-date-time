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
exports.periodYear = void 0;
const JDate = __importStar(require("../../script/date"));
const JDT = __importStar(require("../../script/jdt"));
const string_1 = require("../string");
const days_in_month_1 = require("../days-in-month");
const gregorian_1 = require("../gregorian");
const getYear = (year, timezone) => {
    const start = `${year}-01-01`;
    const gStart = (0, gregorian_1.gregorian)(start).date;
    const from = JDate.getMoment(new Date(gStart), timezone).startOf('D').toDate();
    const month = `${year}-12`;
    const end = `${year}-12-${(0, days_in_month_1.daysInMonth)(month)}`;
    const gEnd = (0, gregorian_1.gregorian)(end).date;
    const to = JDate.getMoment(new Date(gEnd), timezone).endOf('D').toDate();
    return { from, to };
};
function periodYear(years, arg1, arg2) {
    if (isNaN(years) || years < 1)
        throw new TypeError('Years must be bigger than 0');
    const { date, timezone } = JDT.date_timezone(arg1, arg2);
    let year = +(0, string_1.toString)(date, { timezone, format: 'Y' });
    const periods = [];
    while (periods.length < years)
        periods.unshift(getYear(year--, timezone));
    return { from: periods[0].from, to: periods[periods.length - 1].to, periods };
}
exports.periodYear = periodYear;
//# sourceMappingURL=year.js.map