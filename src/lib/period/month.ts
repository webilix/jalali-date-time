import { JalaliDateTimePeriod } from '../../interface/period';

import * as JDate from '../../script/date';
import * as JDT from '../../script/jdt';

import { toString } from '../string';
import { daysInMonth } from '../days-in-month';
import { gregorian } from '../gregorian';

const getLastDay = (date: Date, timezone: string): Date => {
    const month: string = toString(date, { timezone, format: 'Y-M' });
    const days: number = daysInMonth(month);

    const g: string = gregorian(`${month}-${days}`).date;
    return JDate.getMoment(new Date(g), timezone).endOf('D').toDate();
};

const getFirstDay = (date: Date, timezone: string): Date => {
    const month: string = toString(date, { timezone, format: 'Y-M' });

    const g: string = gregorian(`${month}-01`).date;
    return JDate.getMoment(new Date(g), timezone).startOf('D').toDate();
};

export function periodMonth(months: number): JalaliDateTimePeriod;
export function periodMonth(months: number, date: Date): JalaliDateTimePeriod;
export function periodMonth(months: number, timezone: string): JalaliDateTimePeriod;
export function periodMonth(months: number, date: Date, timezone: string): JalaliDateTimePeriod;
export function periodMonth(months: number, arg1?: any, arg2?: any): JalaliDateTimePeriod {
    if (isNaN(months) || months < 1) throw new TypeError('Months must be bigger than 0');

    const { date, timezone } = JDT.date_timezone(arg1, arg2);

    let to: Date = getLastDay(date, timezone || 'Asia/Tehran');

    const periods: { from: Date; to: Date }[] = [];
    while (periods.length < months) {
        const from: Date = getFirstDay(to, timezone || 'Asia/Tehran');
        periods.unshift({ from, to });

        to = new Date(from.getTime() - 1);
    }

    return { from: periods[0].from, to: periods[periods.length - 1].to, periods };
}
