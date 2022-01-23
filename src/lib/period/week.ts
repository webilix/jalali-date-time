import { JalaliDateTimePeriod } from '../..';

import * as JDate from '../../script/date';
import * as JDT from '../../script/jdt';

const getFriday = (date: Date, timezone?: string): Date => {
    date = JDate.getMoment(date, timezone).endOf('D').toDate();
    while (JDate.getMoment(date, timezone).weekday() !== 5) {
        date = JDate.getMoment(new Date(date.getTime() + 1), timezone)
            .endOf('D')
            .toDate();
    }

    return date;
};

const getSaturday = (date: Date, timezone?: string): Date => {
    date = JDate.getMoment(date, timezone).startOf('D').toDate();
    while (JDate.getMoment(date, timezone).weekday() !== 6) {
        date = JDate.getMoment(new Date(date.getTime() - 1), timezone)
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

    let to: Date = getFriday(date, timezone);

    const periods: { from: Date; to: Date }[] = [];
    while (periods.length < weeks) {
        const from: Date = getSaturday(to, timezone);
        periods.unshift({ from, to });

        to = new Date(from.getTime() - 1);
    }

    return { from: periods[0].from, to: periods[periods.length - 1].to, periods };
};
