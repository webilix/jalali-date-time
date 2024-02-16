import * as JDate from '../../script/date';

import { isTimezone } from '../../script/date';
import { daysInMonth } from '../days-in-month';
import { gregorian } from '../gregorian';
import { periodDay } from '../period/day';
import { toString } from '../string';

export class modify {
    private _year: number = 0;
    private _month: number = 0;
    private _day: number = 0;
    private _time: string = '';
    private _timezone: string = 'Asia/Tehran';

    constructor();
    constructor(date: Date);
    constructor(timezone: string);
    constructor(date: Date, timezone: string);
    constructor(arg1?: any, arg2?: any) {
        const date: Date = JDate.isDate(arg1) ? arg1 : new Date();
        const timezone: string | undefined = typeof arg1 === 'string' ? arg1 : arg2;

        const str: string = toString(date);
        this._year = +str.substring(0, 4);
        this._month = +str.substring(5, 7);
        this._day = +str.substring(8, 10);
        this._time = str.substring(11);
        this._timezone = timezone != undefined && isTimezone(timezone) ? timezone : 'Asia/Tehran';
    }

    private getDaysInMonth(): number {
        return daysInMonth(`${this._year}-${this._month.toString().padStart(2, '0')}`);
    }

    private checkDaysInMonth(): void {
        while (this._day > this.getDaysInMonth()) {
            this._day -= this.getDaysInMonth();

            this._month++;
            if (this._month === 13) {
                this._month = 1;
                this._year++;
            }
        }
    }

    year(change: number): modify {
        this._year += change;

        return this;
    }

    month(change: number): modify {
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

    day(change: number): modify {
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

    toDate(time?: 'START' | 'END'): Date {
        const str = `${this._year}-${this._month.toString().padStart(2, '0')}-${this._day.toString().padStart(2, '0')}`;
        const date = new Date(`${gregorian(str).date}T${this._time}`);

        switch (time) {
            case 'START':
                return periodDay(1, date, this._timezone).from;
            case 'END':
                return periodDay(1, date, this._timezone).to;
            default:
                return date;
        }
    }
}
