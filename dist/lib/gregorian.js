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
function gregorian(jalali) {
    if (typeof jalali !== 'string')
        throw new TypeError('Date is not String');
    let [Y, M, D] = jalali.split('-');
    let year = parseInt(Y, 10);
    if (isNaN(year) || year < 1000)
        throw new RangeError('Year must be 4 digits');
    let month = parseInt(M, 10);
    if (isNaN(month) || month < 1 || month > 12)
        throw new RangeError('Month is not between 1, 12');
    let day = parseInt(D, 10);
    if (isNaN(day) || day < 1 || day > 31)
        throw new RangeError('Day is not between 1, 31');
    return JDate.toGregorian({ year, month, day, week: 0, hour: 0, minute: 0, second: 0 });
}
exports.gregorian = gregorian;
//# sourceMappingURL=gregorian.js.map