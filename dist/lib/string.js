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
function toString(date, config) {
    config = JDT.check(config ? config : {}, JDT.type.now);
    const format = JDT.format(config.format ? config.format : '', ['Y', 'M', 'D', 'H', 'I', 'S']);
    return JDT.string(date, config, format);
}
exports.toString = toString;
//# sourceMappingURL=string.js.map