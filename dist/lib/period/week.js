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
exports.periodWeek = periodWeek;
const JDate = __importStar(require("../../script/date"));
const JDT = __importStar(require("../../script/jdt"));
const getFriday = (date, timezone) => {
    date = JDate.getMoment(date, timezone).endOf('D').toDate();
    while (JDate.getMoment(date, timezone).weekday() !== 5) {
        date = JDate.getMoment(new Date(date.getTime() + 1), timezone)
            .endOf('D')
            .toDate();
    }
    return date;
};
const getSaturday = (date, timezone) => {
    date = JDate.getMoment(date, timezone).startOf('D').toDate();
    while (JDate.getMoment(date, timezone).weekday() !== 6) {
        date = JDate.getMoment(new Date(date.getTime() - 1), timezone)
            .startOf('D')
            .toDate();
    }
    return date;
};
function periodWeek(weeks, arg1, arg2) {
    if (isNaN(weeks) || weeks < 1)
        throw new TypeError('Weeks must be bigger than 0');
    const { date, timezone } = JDT.date_timezone(arg1, arg2);
    let to = getFriday(date, timezone);
    const periods = [];
    while (periods.length < weeks) {
        const from = getSaturday(to, timezone);
        periods.unshift({ from, to });
        to = new Date(from.getTime() - 1);
    }
    return { from: periods[0].from, to: periods[periods.length - 1].to, periods };
}
//# sourceMappingURL=week.js.map