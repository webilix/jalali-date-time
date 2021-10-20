import { JalaliDateTimePeriod } from '../../interface/period';
import * as moment from 'moment-timezone';

import * as JDate from '../../script/date';
import * as JDT from '../../script/jdt';
import { toString } from '../string';
import { daysInMonth } from '../days-in-month';

const getTo = (date: Date, timezone: string): Date => {
    const to: Date = JDate.getEndOf('D', date, timezone);
    const day: string = toString(to, { timezone, format: 'D' });

    const month: string = toString(to, { timezone, format: 'Y-M' });
    const days: number = daysInMonth(month);

    return JDate.getEndOf('D', new Date(to.getTime() + (days - +day) * 24 * 3600_000), timezone);
};

const getFirstDay = (date: Date, timezone: string): Date => {
    const month: string = toString(date, { timezone, format: 'Y-M' });
    const days: number = daysInMonth(month);
    const last: Date = moment
        .default(date)
        .tz(timezone || 'Asia/Tehran')
        .subtract(days, 'day')
        .toDate();

    return new Date(last.getTime() + 1);
};

export const periodMonth = (months: number, date?: Date, timezone?: string): JalaliDateTimePeriod => {
    date = date || new Date();
    if (!JDate.checkDate(date)) throw new TypeError('Invalid Date');
    if (!JDate.checkTimezone(timezone || '')) timezone = JDT.timezone();
    if (isNaN(months) || months < 1) throw new TypeError('Months must be bigger than 0');

    const to: Date = getTo(date, timezone || 'Asia/Tehran');
    let from: Date = getFirstDay(to, timezone || 'Asia/Tehran');

    const periods: { from: Date; to: Date }[] = [{ from, to }];
    for (let i = 1; i < months; i++) {
        const last: Date = new Date(from.getTime() - 1);
        from = getFirstDay(last, timezone || 'Asia/Tehran');

        periods.push({ from, to: last });
    }
    periods.reverse();

    return { from, to, periods };
};
