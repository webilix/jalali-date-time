import { JalaliDateTimePeriod } from '../../interface/period';
import * as moment from 'moment-timezone';

import * as JDate from '../../script/date';
import * as JDT from '../../script/jdt';
import { toString } from '../string';

export const periodDay = (days: number, date?: Date, timezone?: string): JalaliDateTimePeriod => {
    date = date || new Date();
    if (!JDate.checkDate(date)) throw new TypeError('Invalid Date');
    if (!JDate.checkTimezone(timezone || '')) timezone = JDT.timezone();
    if (isNaN(days) || days < 1) throw new TypeError('Days must be bigger than 0');

    const to: Date = JDate.getEndOf('D', date, timezone);
    const from: Date = JDate.getStartOf('D', new Date(to.getTime() - days * 24 * 3600_000 + 1), timezone);

    const periods: { from: Date; to: Date }[] = [];
    let start: Date = from;
    while (start < to) {
        periods.push({ from: start, to: JDate.getEndOf('D', start, timezone) });
        start = JDate.getStartOf(
            'D',
            moment
                .default(start)
                .tz(timezone || 'Asia/Tehran')
                .add(1, 'day')
                .toDate(),
            timezone,
        );
    }

    return { from, to, periods };
};
