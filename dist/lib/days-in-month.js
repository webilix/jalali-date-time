"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const JDate = __importStar(require("../script/date"));
const string_1 = require("./string");
const gregorian_1 = require("./gregorian");
function daysInMonth(month) {
    month = month ? month : string_1.toString(new Date(), { format: 'Y-M' });
    if (!JDate.checkMonth(month))
        throw new TypeError('Invalid Month');
    let daysInMonth = 31;
    const jalaliMonth = Number(month.substr(5, 2));
    if (jalaliMonth > 6 && jalaliMonth < 12)
        daysInMonth = 30;
    else if (jalaliMonth === 12) {
        const date = gregorian_1.gregorian(month + '-30').date + 'T12:00:00';
        const have30Days = string_1.toString(new Date(date)).substr(8, 2) === '30';
        daysInMonth = have30Days ? 30 : 29;
    }
    return daysInMonth;
}
exports.daysInMonth = daysInMonth;
//# sourceMappingURL=days-in-month.js.map