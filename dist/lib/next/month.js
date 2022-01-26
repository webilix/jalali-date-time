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
exports.nextMonth = void 0;
const JDate = __importStar(require("../../script/date"));
const JDT = __importStar(require("../../script/jdt"));
const string_1 = require("../string");
const days_in_month_1 = require("../days-in-month");
const gregorian_1 = require("../gregorian");
const nextMonth = (day, date, timezone) => {
    date = date || new Date();
    if (!JDate.checkDate(date))
        throw new TypeError('Invalid Date');
    if (!JDate.checkTimezone(timezone || ''))
        timezone = JDT.timezone();
    if (!['FIRST', 'LAST'].includes(day.toString()) && (typeof day !== 'number' || day < 1 || day > 31))
        throw new TypeError('Type must be FIRST, LAST or number between 1, 31');
    const d = +(0, string_1.toString)(date, { timezone, format: 'D' });
    let y = +(0, string_1.toString)(date, { timezone, format: 'Y' });
    let m = +(0, string_1.toString)(date, { timezone, format: 'M' });
    const cMonth = `${y.toString()}-${m.toString().padStart(2, '0')}`;
    const cDays = (0, days_in_month_1.daysInMonth)(cMonth);
    m++;
    if (m >= 13) {
        y++;
        m = 1;
    }
    const nMonth = `${y.toString()}-${m.toString().padStart(2, '0')}`;
    const nDays = (0, days_in_month_1.daysInMonth)(nMonth);
    let gDate;
    switch (day) {
        case 'FIRST':
            gDate = (0, gregorian_1.gregorian)(`${nMonth}-01`).date;
            break;
        case 'LAST':
            gDate = d >= cDays ? (0, gregorian_1.gregorian)(`${nMonth}-${nDays}`).date : (0, gregorian_1.gregorian)(`${cMonth}-${cDays}`).date;
            break;
        default:
            const month = d >= day ? nMonth : cMonth;
            gDate = (0, gregorian_1.gregorian)(`${month}-${day.toString().padStart(2, '0')}`).date;
            while (+(0, string_1.toString)(JDate.getMoment(new Date(gDate), timezone).toDate(), { format: 'D' }) !== day) {
                m++;
                if (m >= 13) {
                    y++;
                    m = 1;
                }
                const Y = y.toString();
                const M = m.toString().padStart(2, '0');
                const D = day.toString().padStart(2, '0');
                gDate = (0, gregorian_1.gregorian)(`${Y}-${M}-${D}`).date;
            }
    }
    return JDate.getMoment(new Date(gDate), timezone).startOf('D').toDate();
};
exports.nextMonth = nextMonth;
//# sourceMappingURL=month.js.map