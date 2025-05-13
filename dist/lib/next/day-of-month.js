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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextMonth = nextMonth;
exports.nextDayOfMonth = nextDayOfMonth;
const JDate = __importStar(require("../../script/date"));
const JDT = __importStar(require("../../script/jdt"));
const string_1 = require("../string");
const days_in_month_1 = require("../days-in-month");
const gregorian_1 = require("../gregorian");
/**
 * @deprecated This method is deprecated and will be removed in future versions. Please use nextDayOfMonth instead
 */
function nextMonth(day, date, timezone) {
    return nextDayOfMonth(day, date || new Date(), timezone || JDT.timezone());
}
function nextDayOfMonth(dayOfMonth, arg1, arg2) {
    if (!['FIRST', 'LAST'].includes(dayOfMonth.toString()) &&
        (typeof dayOfMonth !== 'number' || dayOfMonth < 1 || dayOfMonth > 31))
        throw new TypeError("dayOfMonth must be 'FIRST', 'LAST' or number between 1, 31");
    const { date, timezone } = JDT.date_timezone(arg1, arg2);
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
    switch (dayOfMonth) {
        case 'FIRST':
            gDate = (0, gregorian_1.gregorian)(`${nMonth}-01`).date;
            break;
        case 'LAST':
            gDate = d >= cDays ? (0, gregorian_1.gregorian)(`${nMonth}-${nDays}`).date : (0, gregorian_1.gregorian)(`${cMonth}-${cDays}`).date;
            break;
        default:
            const month = d >= dayOfMonth ? nMonth : cMonth;
            gDate = (0, gregorian_1.gregorian)(`${month}-${dayOfMonth.toString().padStart(2, '0')}`).date;
            while (+(0, string_1.toString)(JDate.getMoment(new Date(gDate), timezone).toDate(), { format: 'D' }) !== dayOfMonth) {
                m++;
                if (m >= 13) {
                    y++;
                    m = 1;
                }
                const Y = y.toString();
                const M = m.toString().padStart(2, '0');
                const D = dayOfMonth.toString().padStart(2, '0');
                gDate = (0, gregorian_1.gregorian)(`${Y}-${M}-${D}`).date;
            }
    }
    return JDate.getMoment(new Date(gDate), timezone).startOf('D').toDate();
}
//# sourceMappingURL=day-of-month.js.map