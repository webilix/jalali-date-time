import { JalaliDateTimePeriod } from '../..';
import * as moment from 'moment-timezone';

import * as JDate from '../../script/date';
import * as JDT from '../../script/jdt';

const getTo = (date: Date, timezone: string): Date => {
    while (date.getDay() != 5) date = new Date(date.getTime() + 24 * 3600_000);
    return JDate.getEndOf('D', date, timezone);
};

export const periodWeek = (weeks: number, date?: Date, timezone?: string): JalaliDateTimePeriod => {
    date = date || new Date();
    if (!JDate.checkDate(date)) throw new TypeError('Invalid Date');
    if (!JDate.checkTimezone(timezone || '')) timezone = JDT.timezone();
    if (isNaN(weeks) || weeks < 1) throw new TypeError('Weeks must be bigger than 0');

    const to: Date = getTo(date, timezone || 'Asia/Tehran');
    const from: Date = JDate.getStartOf('D', new Date(to.getTime() - weeks * 7 * 24 * 3600_000 + 1), timezone);

    const periods: { from: Date; to: Date }[] = [];
    let start: Date = from;
    while (start < to) {
        periods.push({
            from: start,
            to: JDate.getEndOf('D', new Date(start.getTime() + 7 * 24 * 3600_000 - 1), timezone),
        });
        start = JDate.getStartOf(
            'D',
            moment
                .default(start)
                .tz(timezone || 'Asia/Tehran')
                .add(7, 'day')
                .toDate(),
            timezone,
        );
    }

    return { from, to, periods };
};
