import { JalaliDateTimePeriod } from '../..';
import * as moment from 'moment-timezone';

import * as JDate from '../../script/date';
import * as JDT from '../../script/jdt';

const getFriday = (date: Date, timezone: string): Date => {
    date = moment.default(date).tz(timezone).endOf('D').toDate();
    while (moment.default(date).tz(timezone).weekday() !== 5) {
        date = moment
            .default(new Date(date.getTime() + 1))
            .tz(timezone)
            .endOf('D')
            .toDate();
    }

    return date;
};

const getSaturday = (date: Date, timezone: string): Date => {
    date = moment.default(date).tz(timezone).startOf('D').toDate();
    while (moment.default(date).tz(timezone).weekday() !== 6) {
        date = moment
            .default(new Date(date.getTime() - 1))
            .tz(timezone)
            .startOf('D')
            .toDate();
    }

    return date;
};

export const periodWeek = (weeks: number, date?: Date, timezone?: string): JalaliDateTimePeriod => {
    date = date || new Date();
    if (!JDate.checkDate(date)) throw new TypeError('Invalid Date');
    if (!JDate.checkTimezone(timezone || '')) timezone = JDT.timezone();
    if (isNaN(weeks) || weeks < 1) throw new TypeError('Weeks must be bigger than 0');

    let to: Date = getFriday(date, timezone || 'Asia/Tehran');

    const periods: { from: Date; to: Date }[] = [];
    while (periods.length < weeks) {
        const from: Date = getSaturday(to, timezone || 'Asia/Tehran');
        periods.unshift({ from, to });

        to = new Date(from.getTime() - 1);
    }

    return { from: periods[0].from, to: periods[periods.length - 1].to, periods };
};
