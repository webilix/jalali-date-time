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
exports.modify = void 0;
const JDate = __importStar(require("../../script/date"));
const date_1 = require("../../script/date");
const days_in_month_1 = require("../days-in-month");
const gregorian_1 = require("../gregorian");
const day_1 = require("../period/day");
const string_1 = require("../string");
class modify {
    constructor(arg1, arg2) {
        this._year = 0;
        this._month = 0;
        this._day = 0;
        this._time = '';
        this._timezone = 'Asia/Tehran';
        const date = JDate.isDate(arg1) ? arg1 : new Date();
        const timezone = typeof arg1 === 'string' ? arg1 : arg2;
        const str = (0, string_1.toString)(date);
        this._year = +str.substring(0, 4);
        this._month = +str.substring(5, 7);
        this._day = +str.substring(8, 10);
        this._time = str.substring(11);
        this._timezone = timezone != undefined && (0, date_1.isTimezone)(timezone) ? timezone : 'Asia/Tehran';
    }
    getDaysInMonth() {
        return (0, days_in_month_1.daysInMonth)(`${this._year}-${this._month.toString().padStart(2, '0')}`);
    }
    checkDaysInMonth() {
        while (this._day > this.getDaysInMonth()) {
            this._day -= this.getDaysInMonth();
            this._month++;
            if (this._month === 13) {
                this._month = 1;
                this._year++;
            }
        }
    }
    year(change) {
        this._year += change;
        return this;
    }
    month(change) {
        this._month += change;
        while (this._month < 1) {
            this._month += 12;
            this._year--;
        }
        while (this._month > 12) {
            this._month -= 12;
            this._year++;
        }
        this.checkDaysInMonth();
        return this;
    }
    day(change) {
        this._day += change;
        while (this._day < 1) {
            this._month--;
            if (this._month === 0) {
                this._month = 12;
                this._year--;
            }
            this._day += this.getDaysInMonth();
        }
        this.checkDaysInMonth();
        return this;
    }
    toDate(time) {
        const str = `${this._year}-${this._month.toString().padStart(2, '0')}-${this._day.toString().padStart(2, '0')}`;
        const date = new Date(`${(0, gregorian_1.gregorian)(str).date}T${this._time}`);
        switch (time) {
            case 'START':
                return (0, day_1.periodDay)(1, date, this._timezone).from;
            case 'END':
                return (0, day_1.periodDay)(1, date, this._timezone).to;
            default:
                return date;
        }
    }
}
exports.modify = modify;
//# sourceMappingURL=modify.js.map