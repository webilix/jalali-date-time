import { JalaliDateTimePeriod } from '../../interface/period';
import * as moment from 'moment-timezone';

import * as JDate from '../../script/date';
import * as JDT from '../../script/jdt';
import { toString } from '../string';
import { daysInMonth } from '../days-in-month';
import { gregorian } from '../gregorian';

const getLastDay = (date: Date, timezone: string): Date => {
    const month: string = toString(date, { timezone, format: 'Y-M' });
    const days: number = daysInMonth(month);

    const g: string = gregorian(`${month}-${days}`).date;
    return moment.default(new Date(g)).tz(timezone).endOf('D').toDate();
};

const getFirstDay = (date: Date, timezone: string): Date => {
    const month: string = toString(date, { timezone, format: 'Y-M' });

    const g: string = gregorian(`${month}-01`).date;
    return moment.default(new Date(g)).tz(timezone).startOf('D').toDate();
};

export const periodMonth = (months: number, date?: Date, timezone?: string): JalaliDateTimePeriod => {
    date = date || new Date();
    if (!JDate.checkDate(date)) throw new TypeError('Invalid Date');
    if (!JDate.checkTimezone(timezone || '')) timezone = JDT.timezone();
    if (isNaN(months) || months < 1) throw new TypeError('Months must be bigger than 0');

    let to: Date = getLastDay(date, timezone || 'Asia/Tehran');

    const periods: { from: Date; to: Date }[] = [];
    while (periods.length < months) {
        const from: Date = getFirstDay(to, timezone || 'Asia/Tehran');
        periods.unshift({ from, to });

        to = new Date(from.getTime() - 1);
    }

    return { from: periods[0].from, to: periods[periods.length - 1].to, periods };
};
