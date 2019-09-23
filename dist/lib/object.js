"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment = __importStar(require("moment-timezone"));
const JDate = __importStar(require("../script/date"));
const JDT = __importStar(require("../script/jdt"));
function toObject(date, timezone) {
    if (!JDate.checkDate(date))
        throw new TypeError('Invalid Date');
    if (!JDate.checkTimezone(timezone ? timezone : ''))
        timezone = JDT.timezone();
    const value = moment.default(date).tz(timezone ? timezone : 'Asia/Tehran');
    return JDate.toJalali(JDate.toObject(value));
}
exports.toObject = toObject;
//# sourceMappingURL=object.js.map