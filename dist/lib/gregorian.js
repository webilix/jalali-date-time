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
exports.gregorian = void 0;
const JDate = __importStar(require("../script/date"));
const gregorian = (jalali) => {
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
};
exports.gregorian = gregorian;
//# sourceMappingURL=gregorian.js.map