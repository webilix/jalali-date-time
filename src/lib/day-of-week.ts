import * as JDate from '../script/date';
import * as JDT from '../script/jdt';

export const dayOfWeek = (date?: Date, timezone?: string): number => {
    date = date || new Date();
    if (!JDate.checkDate(date)) throw new TypeError('Invalid Date');
    if (!JDate.checkTimezone(timezone || '')) timezone = JDT.timezone();

    const moment: Date = JDate.getMoment(date, timezone).endOf('D').toDate();
    return (moment.getDay() + 1) % 7;
};
