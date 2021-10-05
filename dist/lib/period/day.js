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
exports.periodDay = void 0;
const moment = __importStar(require("moment-timezone"));
const JDate = __importStar(require("../../script/date"));
const JDT = __importStar(require("../../script/jdt"));
const periodDay = (days, date, timezone) => {
    date = date || new Date();
    if (!JDate.checkDate(date))
        throw new TypeError('Invalid Date');
    if (!JDate.checkTimezone(timezone || ''))
        timezone = JDT.timezone();
    if (isNaN(days) || days < 1)
        throw new TypeError('Days must be bigger than 0');
    const to = moment
        .default(date)
        .tz(timezone || 'Asia/Tehran')
        .endOf('D')
        .toDate();
    const from = new Date(to.getTime() - days * 24 * 3600000 + 1);
    const periods = [];
    let start = from;
    while (start < to) {
        periods.push({ from: start, to: new Date(start.getTime() + 24 * 3600000 - 1) });
        start = new Date(start.getTime() + 24 * 3600000);
    }
    return { from, to, periods };
};
exports.periodDay = periodDay;
//# sourceMappingURL=day.js.map