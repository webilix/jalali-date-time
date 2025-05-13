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
exports.daysInMonth = daysInMonth;
const JDate = __importStar(require("../script/date"));
const string_1 = require("./string");
const gregorian_1 = require("./gregorian");
function daysInMonth(month) {
    month = month || (0, string_1.toString)(new Date(), { format: 'Y-M' });
    if (!JDate.isMonth(month))
        throw new TypeError('Invalid Month');
    let daysInMonth = 31;
    const jalaliMonth = Number(month.substr(5, 2));
    if (jalaliMonth > 6 && jalaliMonth < 12)
        daysInMonth = 30;
    else if (jalaliMonth === 12) {
        const date = (0, gregorian_1.gregorian)(month + '-30').date + 'T12:00:00';
        const have30Days = (0, string_1.toString)(new Date(date)).substr(8, 2) === '30';
        daysInMonth = have30Days ? 30 : 29;
    }
    return daysInMonth;
}
//# sourceMappingURL=days-in-month.js.map