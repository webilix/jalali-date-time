import { JalaliDateTimePeriod } from '../../interface/period';

import * as JDate from '../../script/date';
import * as JDT from '../../script/jdt';

export function periodHour(hours: number): JalaliDateTimePeriod;
export function periodHour(hours: number, date: Date): JalaliDateTimePeriod;
export function periodHour(hours: number, timezone: string): JalaliDateTimePeriod;
export function periodHour(hours: number, date: Date, timezone: string): JalaliDateTimePeriod;
export function periodHour(hours: number, arg1?: any, arg2?: any): JalaliDateTimePeriod {
    if (isNaN(hours) || hours < 1) throw new TypeError('Hours must be bigger than 0');

    const { date, timezone } = JDT.date_timezone(arg1, arg2);

    let to: Date = JDate.getMoment(date, timezone).endOf('h').toDate();

    const periods: { from: Date; to: Date }[] = [];
    while (periods.length < hours) {
        const from: Date = JDate.getMoment(to, timezone).startOf('h').toDate();
        periods.unshift({ from, to });

        to = new Date(from.getTime() - 1);
    }

    return { from: periods[0].from, to: periods[periods.length - 1].to, periods };
}
