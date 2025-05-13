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
exports.nextDay = nextDay;
exports.nextDayOfWeek = nextDayOfWeek;
const JDate = __importStar(require("../../script/date"));
const JDT = __importStar(require("../../script/jdt"));
/**
 * @deprecated This method is deprecated and will be removed in future versions. Please use nextDayOfWeek instead
 */
function nextDay(day, date, timezone) {
    return nextDayOfWeek(day, date || new Date(), timezone || JDT.timezone());
}
function nextDayOfWeek(dayOfWeek, arg1, arg2) {
    if (isNaN(dayOfWeek) || dayOfWeek < 0 || dayOfWeek > 6)
        throw new TypeError('dayOfWeek must be between 0 and 6');
    const { date, timezone } = JDT.date_timezone(arg1, arg2);
    let next = JDate.getMoment(date, timezone).add(1, 'd').startOf('D').toDate();
    while (JDate.getMoment(next, timezone).weekday() !== dayOfWeek) {
        next = JDate.getMoment(next, timezone).add(1, 'd').startOf('D').toDate();
    }
    return next;
}
//# sourceMappingURL=day-of-week.js.map