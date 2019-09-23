"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const JDT = __importStar(require("../script/jdt"));
function toTime(date, config) {
    config = JDT.check(config ? config : {}, JDT.type.time);
    const format = JDT.format(config.format ? config.format : '', ['H', 'I', 'S']);
    return JDT.string(date, config, format);
}
exports.toTime = toTime;
//# sourceMappingURL=time.js.map