import { JalaliDateTimePeriod } from '../../interface/period';

import * as JDate from '../../script/date';
import * as JDT from '../../script/jdt';

export function periodDay(days: number): JalaliDateTimePeriod;
export function periodDay(days: number, date: Date): JalaliDateTimePeriod;
export function periodDay(days: number, timezone: string): JalaliDateTimePeriod;
export function periodDay(days: number, date: Date, timezone: string): JalaliDateTimePeriod;
export function periodDay(days: number, arg1?: any, arg2?: any): JalaliDateTimePeriod {
    if (isNaN(days) || days < 1) throw new TypeError('Days must be bigger than 0');

    const { date, timezone } = JDT.date_timezone(arg1, arg2);

    let to: Date = JDate.getMoment(date, timezone).endOf('D').toDate();

    const periods: { from: Date; to: Date }[] = [];
    while (periods.length < days) {
        const from: Date = JDate.getMoment(to, timezone).startOf('D').toDate();
        periods.unshift({ from, to });

        to = new Date(from.getTime() - 1);
    }

    return { from: periods[0].from, to: periods[periods.length - 1].to, periods };
}
