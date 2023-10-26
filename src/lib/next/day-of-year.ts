import * as JDate from '../../script/date';
import * as JDT from '../../script/jdt';

import { toString } from '../string';
import { gregorian } from '../gregorian';

const getMonth = (y: number, m: string): string => {
    const g: string = gregorian(y.toString() + m).date;
    const d: Date = new Date(g);
    return toString(d, { format: '-M-D' });
};

/**
 * @deprecated This method is deprecated and will be removed in future versions. Please use nextDayOfYear instead
 */
export function nextYear(date?: Date, timezone?: string): Date {
    return nextDayOfYear(date || new Date(), timezone || JDT.timezone());
}

export function nextDayOfYear(): Date;
export function nextDayOfYear(date: Date): Date;
export function nextDayOfYear(timezone: string): Date;
export function nextDayOfYear(date: Date, timezone: string): Date;
export function nextDayOfYear(arg1?: any, arg2?: any): Date {
    const { date, timezone } = JDT.date_timezone(arg1, arg2);

    let y: number = +toString(date, { timezone, format: 'Y' });
    const month: string = toString(date, { timezone, format: '-M-D' });

    do {
        y++;
    } while (getMonth(y, month) !== month);

    const gDate: string = gregorian(y.toString() + month).date;
    return JDate.getMoment(new Date(gDate), timezone).startOf('D').toDate();
}
