"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modify = void 0;
const date_1 = require("../../script/date");
const days_in_month_1 = require("../days-in-month");
const gregorian_1 = require("../gregorian");
const day_1 = require("../period/day");
const string_1 = require("../string");
class modify {
    constructor(date, timezone) {
        this._year = 0;
        this._month = 0;
        this._day = 0;
        this._time = '';
        this._timezone = 'Asia/Tehran';
        const str = (0, string_1.toString)(date || new Date());
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