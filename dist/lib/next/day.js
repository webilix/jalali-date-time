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
exports.nextDay = void 0;
const JDate = __importStar(require("../../script/date"));
const JDT = __importStar(require("../../script/jdt"));
const nextDay = (day, date, timezone) => {
    date = date || new Date();
    if (!JDate.checkDate(date))
        throw new TypeError('Invalid Date');
    if (!JDate.checkTimezone(timezone || ''))
        timezone = JDT.timezone();
    if (isNaN(day) || day < 0 || day > 6)
        throw new TypeError('Day must be between 0 and 6');
    let next = JDate.getMoment(date, timezone).add(1, 'd').startOf('D').toDate();
    while (JDate.getMoment(next, timezone).weekday() !== day) {
        next = JDate.getMoment(next, timezone).add(1, 'd').startOf('D').toDate();
    }
    return next;
};
exports.nextDay = nextDay;
//# sourceMappingURL=day.js.map