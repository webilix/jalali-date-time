import * as JDate from '../../script/date';
import * as JDT from '../../script/jdt';

export const nextDay = (day: number, date?: Date, timezone?: string): Date => {
    date = date || new Date();
    if (!JDate.checkDate(date)) throw new TypeError('Invalid Date');
    if (!JDate.checkTimezone(timezone || '')) timezone = JDT.timezone();
    if (isNaN(day) || day < 0 || day > 6) throw new TypeError('Day must be between 0 and 6');

    let next: Date = JDate.getMoment(date, timezone).add(1, 'd').startOf('D').toDate();
    while (JDate.getMoment(next, timezone).weekday() !== day) {
        next = JDate.getMoment(next, timezone).add(1, 'd').startOf('D').toDate();
    }

    return next;
};
