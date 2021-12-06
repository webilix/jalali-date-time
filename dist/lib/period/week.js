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
const getFriday = (date, timezone) => {
    date = moment.default(date).tz(timezone).endOf('D').toDate();
    while (date.getDay() !== 5) {
        date = moment
            .default(new Date(date.getTime() + 1))
            .tz(timezone)
            .endOf('D')
            .toDate();
    }
    return date;
};
const getSaturday = (date, timezone) => {
    date = moment.default(date).tz(timezone).startOf('D').toDate();
    while (date.getDay() !== 6) {
        date = moment
            .default(new Date(date.getTime() - 1))
            .tz(timezone)
            .startOf('D')
            .toDate();
    }
    return date;
};
const periodWeek = (weeks, date, timezone) => {
    date = date || new Date();
    if (!JDate.checkDate(date))
        throw new TypeError('Invalid Date');
    if (!JDate.checkTimezone(timezone || ''))
        timezone = JDT.timezone();
    if (isNaN(weeks) || weeks < 1)
        throw new TypeError('Weeks must be bigger than 0');
    let to = getFriday(date, timezone || 'Asia/Tehran');
    const periods = [];
    while (periods.length < weeks) {
        const from = getSaturday(to, timezone || 'Asia/Tehran');
        periods.unshift({ from, to });
        to = new Date(from.getTime() - 1);
    }
    return { from: periods[0].from, to: periods[periods.length - 1].to, periods };
};
exports.periodWeek = periodWeek;
//# sourceMappingURL=week.js.map