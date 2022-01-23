import * as JDate from '../../script/date';
import * as JDT from '../../script/jdt';

import { toString } from '../string';
import { gregorian } from '../gregorian';

const getMonth = (y: number, m: string): string => {
    const g: string = gregorian(y.toString() + m).date;
    const d: Date = new Date(g);
    return toString(d, { format: '-M-D' });
};

export const nextYear = (date?: Date, timezone?: string): Date => {
    date = date || new Date();
    if (!JDate.checkDate(date)) throw new TypeError('Invalid Date');
    if (!JDate.checkTimezone(timezone || '')) timezone = JDT.timezone();

    let y: number = +toString(date, { timezone, format: 'Y' });
    const month: string = toString(date, { timezone, format: '-M-D' });

    do {
        y++;
    } while (getMonth(y, month) !== month);

    const gDate: string = gregorian(y.toString() + month).date;
    return JDate.getMoment(new Date(gDate), timezone).startOf('D').toDate();
};
