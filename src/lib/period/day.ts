import { JalaliDateTimePeriod } from '../../interface/period';
import * as moment from 'moment-timezone';

import * as JDate from '../../script/date';
import * as JDT from '../../script/jdt';

export const periodDay = (days: number, date?: Date, timezone?: string): JalaliDateTimePeriod => {
    date = date || new Date();
    if (!JDate.checkDate(date)) throw new TypeError('Invalid Date');
    if (!JDate.checkTimezone(timezone || '')) timezone = JDT.timezone();
    if (isNaN(days) || days < 1) throw new TypeError('Days must be bigger than 0');

    const to: Date = moment
        .default(date)
        .tz(timezone || 'Asia/Tehran')
        .endOf('D')
        .toDate();
    const from: Date = new Date(to.getTime() - days * 24 * 3600_000 + 1);

    const periods: { from: Date; to: Date }[] = [];
    let start: Date = from;
    while (start < to) {
        periods.push({ from: start, to: new Date(start.getTime() + 24 * 3600_000 - 1) });
        start = new Date(start.getTime() + 24 * 3600_000);
    }

    return { from, to, periods };
};
