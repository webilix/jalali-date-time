import { JalaliDateTimePeriod } from '../../interface/period';
import * as moment from 'moment-timezone';

import * as JDate from '../../script/date';
import * as JDT from '../../script/jdt';

export const periodDay = (days: number, date?: Date, timezone?: string): JalaliDateTimePeriod => {
    date = date || new Date();
    if (!JDate.checkDate(date)) throw new TypeError('Invalid Date');
    if (!JDate.checkTimezone(timezone || '')) timezone = JDT.timezone();
    if (isNaN(days) || days < 1) throw new TypeError('Days must be bigger than 0');

    let to: Date = moment
        .default(date)
        .tz(timezone || 'Asia/Tehran')
        .endOf('D')
        .toDate();

    const periods: { from: Date; to: Date }[] = [];
    while (periods.length < days) {
        const from: Date = moment
            .default(to)
            .tz(timezone || 'Asia/Tehran')
            .startOf('D')
            .toDate();
        periods.unshift({ from, to });

        to = new Date(from.getTime() - 1);
    }

    return { from: periods[0].from, to: periods[periods.length - 1].to, periods };
};
