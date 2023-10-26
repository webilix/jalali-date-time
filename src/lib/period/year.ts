import { JalaliDateTimePeriod } from '../../interface/period';

import * as JDate from '../../script/date';
import * as JDT from '../../script/jdt';

import { toString } from '../string';
import { daysInMonth } from '../days-in-month';
import { gregorian } from '../gregorian';

const getYear = (year: number, timezone?: string): { from: Date; to: Date } => {
    const start: string = `${year}-01-01`;
    const gStart: string = gregorian(start).date;
    const from = JDate.getMoment(new Date(gStart), timezone).startOf('D').toDate();

    const month: string = `${year}-12`;
    const end: string = `${year}-12-${daysInMonth(month)}`;
    const gEnd: string = gregorian(end).date;
    const to = JDate.getMoment(new Date(gEnd), timezone).endOf('D').toDate();

    return { from, to };
};

export function periodYear(years: number): JalaliDateTimePeriod;
export function periodYear(years: number, date: Date): JalaliDateTimePeriod;
export function periodYear(years: number, timezone: string): JalaliDateTimePeriod;
export function periodYear(years: number, date: Date, timezone: string): JalaliDateTimePeriod;
export function periodYear(years: number, arg1?: any, arg2?: any): JalaliDateTimePeriod {
    if (isNaN(years) || years < 1) throw new TypeError('Years must be bigger than 0');

    const { date, timezone } = JDT.date_timezone(arg1, arg2);

    let year: number = +toString(date, { timezone, format: 'Y' });

    const periods: { from: Date; to: Date }[] = [];
    while (periods.length < years) periods.unshift(getYear(year--, timezone));

    return { from: periods[0].from, to: periods[periods.length - 1].to, periods };
}
