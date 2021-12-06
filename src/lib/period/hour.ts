import { JalaliDateTimePeriod } from '../../interface/period';
import * as moment from 'moment-timezone';

import * as JDate from '../../script/date';
import * as JDT from '../../script/jdt';

export const periodHour = (hours: number, date?: Date, timezone?: string): JalaliDateTimePeriod => {
    date = date || new Date();
    if (!JDate.checkDate(date)) throw new TypeError('Invalid Date');
    if (!JDate.checkTimezone(timezone || '')) timezone = JDT.timezone();
    if (isNaN(hours) || hours < 1) throw new TypeError('Hours must be bigger than 0');

    let to: Date = moment
        .default(date)
        .tz(timezone || 'Asia/Tehran')
        .endOf('h')
        .toDate();

    const periods: { from: Date; to: Date }[] = [];
    while (periods.length < hours) {
        const from: Date = moment
            .default(to)
            .tz(timezone || 'Asia/Tehran')
            .startOf('h')
            .toDate();
        periods.unshift({ from, to });

        to = new Date(from.getTime() - 1);
    }

    return { from: periods[0].from, to: periods[periods.length - 1].to, periods };
};
