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
exports.periodHour = void 0;
const JDate = __importStar(require("../../script/date"));
const JDT = __importStar(require("../../script/jdt"));
function periodHour(hours, arg1, arg2) {
    if (isNaN(hours) || hours < 1)
        throw new TypeError('Hours must be bigger than 0');
    const { date, timezone } = JDT.date_timezone(arg1, arg2);
    let to = JDate.getMoment(date, timezone).endOf('h').toDate();
    const periods = [];
    while (periods.length < hours) {
        const from = JDate.getMoment(to, timezone).startOf('h').toDate();
        periods.unshift({ from, to });
        to = new Date(from.getTime() - 1);
    }
    return { from: periods[0].from, to: periods[periods.length - 1].to, periods };
}
exports.periodHour = periodHour;
//# sourceMappingURL=hour.js.map