import * as JDate from '../../script/date';
import * as JDT from '../../script/jdt';

import { toString } from '../string';
import { daysInMonth } from '../days-in-month';
import { gregorian } from '../gregorian';

/**
 * @deprecated This method is deprecated and will be removed in future versions. Please use nextDayOfMonth instead
 */
export function nextMonth(day: 'FIRST' | 'LAST' | number, date?: Date, timezone?: string): Date {
    return nextDayOfMonth(day, date || new Date(), timezone || JDT.timezone());
}

export function nextDayOfMonth(dayOfMonth: 'FIRST' | 'LAST' | number): Date;
export function nextDayOfMonth(dayOfMonth: 'FIRST' | 'LAST' | number, date: Date): Date;
export function nextDayOfMonth(dayOfMonth: 'FIRST' | 'LAST' | number, timezone: string): Date;
export function nextDayOfMonth(dayOfMonth: 'FIRST' | 'LAST' | number, date: Date, timezone: string): Date;
export function nextDayOfMonth(dayOfMonth: 'FIRST' | 'LAST' | number, arg1?: any, arg2?: any): Date {
    if (
        !['FIRST', 'LAST'].includes(dayOfMonth.toString()) &&
        (typeof dayOfMonth !== 'number' || dayOfMonth < 1 || dayOfMonth > 31)
    )
        throw new TypeError("dayOfMonth must be 'FIRST', 'LAST' or number between 1, 31");

    const date: Date = arg1 && JDate.checkDate(arg1) ? arg1 : new Date();
    if (!JDate.checkDate(date)) throw new TypeError('Invalid Date');

    let timezone: string = arg1 && typeof arg1 === 'string' ? arg1 : arg2 || '';
    if (!JDate.checkTimezone(timezone)) timezone = JDT.timezone();

    const d: number = +toString(date, { timezone, format: 'D' });
    let y: number = +toString(date, { timezone, format: 'Y' });
    let m: number = +toString(date, { timezone, format: 'M' });

    const cMonth: string = `${y.toString()}-${m.toString().padStart(2, '0')}`;
    const cDays: number = daysInMonth(cMonth);

    m++;
    if (m >= 13) {
        y++;
        m = 1;
    }
    const nMonth: string = `${y.toString()}-${m.toString().padStart(2, '0')}`;
    const nDays: number = daysInMonth(nMonth);

    let gDate: string;
    switch (dayOfMonth) {
        case 'FIRST':
            gDate = gregorian(`${nMonth}-01`).date;
            break;

        case 'LAST':
            gDate = d >= cDays ? gregorian(`${nMonth}-${nDays}`).date : gregorian(`${cMonth}-${cDays}`).date;
            break;

        default:
            const month: string = d >= dayOfMonth ? nMonth : cMonth;
            gDate = gregorian(`${month}-${dayOfMonth.toString().padStart(2, '0')}`).date;
            while (+toString(JDate.getMoment(new Date(gDate), timezone).toDate(), { format: 'D' }) !== dayOfMonth) {
                m++;
                if (m >= 13) {
                    y++;
                    m = 1;
                }

                const Y: string = y.toString();
                const M: string = m.toString().padStart(2, '0');
                const D: string = dayOfMonth.toString().padStart(2, '0');
                gDate = gregorian(`${Y}-${M}-${D}`).date;
            }
    }

    return JDate.getMoment(new Date(gDate), timezone).startOf('D').toDate();
}
