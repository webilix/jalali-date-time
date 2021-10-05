import { JalaliDateTimeCalendar, JalaliDateTimeCalendarDay } from '../interface/calendar';
import * as JDate from '../script/date';

import { gregorian } from './gregorian';
import { toString } from './string';
import { toDate } from './date';
import { toFullText } from './full-text';

export const calendar = (month?: string): JalaliDateTimeCalendar => {
    month = month || toString(new Date(), { format: 'Y-M' });
    if (!JDate.checkMonth(month)) throw new TypeError('Invalid Month');

    const gDate: string = gregorian(month + '-01').date;
    const cDate: Date = new Date(gDate + 'T12:00:00');
    const title = toFullText(cDate, { format: 'N Y' });

    let begin: Date = cDate;
    while (begin.getDay() !== 6) begin = new Date(begin.getTime() - 24 * 3600 * 1000);

    const weeks: JalaliDateTimeCalendarDay[][] = [];
    let days: JalaliDateTimeCalendarDay[] = [];
    let date = toDate(begin);
    while (date.substr(0, 7) <= month || days.length % 7 !== 0) {
        days.push({
            date,
            month: date.substr(0, 7),
            day: Number(date.substr(8)),
        });
        if (days.length === 7) {
            weeks.push(days);
            days = [];
        }

        begin = new Date(begin.getTime() + 24 * 3600 * 1000);
        date = toDate(begin);
    }

    return { month, title, weeks };
};
