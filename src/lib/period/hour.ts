import { JalaliDateTimePeriod } from '../../interface/period';
import * as moment from 'moment-timezone';

import * as JDate from '../../script/date';
import * as JDT from '../../script/jdt';

export const periodHour = (hours: number, date?: Date, timezone?: string): JalaliDateTimePeriod => {
    date = date || new Date();
    if (!JDate.checkDate(date)) throw new TypeError('Invalid Date');
    if (!JDate.checkTimezone(timezone || '')) timezone = JDT.timezone();
    if (isNaN(hours) || hours < 1) throw new TypeError('Hours must be bigger than 0');

    const to: Date = JDate.getEndOf('h', date, timezone);
    const from: Date = JDate.getStartOf('h', new Date(to.getTime() - hours * 3600_000 + 1), timezone);

    const periods: { from: Date; to: Date }[] = [];
    let start: Date = from;
    while (start < to) {
        periods.push({ from: start, to: JDate.getEndOf('h', start, timezone) });
        start = JDate.getStartOf(
            'h',
            moment
                .default(start)
                .tz(timezone || 'Asia/Tehran')
                .add(1, 'hour')
                .toDate(),
            timezone,
        );
    }

    return { from, to, periods };
};
