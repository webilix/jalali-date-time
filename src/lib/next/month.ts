import * as JDate from '../../script/date';
import * as JDT from '../../script/jdt';

import { toString } from '../string';
import { daysInMonth } from '../days-in-month';
import { gregorian } from '../gregorian';

export const nextMonth = (day: 'FIRST' | 'LAST' | number, date?: Date, timezone?: string): Date => {
    date = date || new Date();
    if (!JDate.checkDate(date)) throw new TypeError('Invalid Date');
    if (!JDate.checkTimezone(timezone || '')) timezone = JDT.timezone();
    if (!['FIRST', 'LAST'].includes(day.toString()) && (typeof day !== 'number' || day < 1 || day > 31))
        throw new TypeError('Type must be FIRST, LAST or number between 1, 31');

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
    switch (day) {
        case 'FIRST':
            gDate = gregorian(`${nMonth}-01`).date;
            break;

        case 'LAST':
            gDate = d >= cDays ? gregorian(`${nMonth}-${nDays}`).date : gregorian(`${cMonth}-${cDays}`).date;
            break;

        default:
            const month: string = d >= day ? nMonth : cMonth;
            gDate = gregorian(`${month}-${day.toString().padStart(2, '0')}`).date;
            while (+toString(JDate.getMoment(new Date(gDate), timezone).toDate(), { format: 'D' }) !== day) {
                m++;
                if (m >= 13) {
                    y++;
                    m = 1;
                }

                const Y: string = y.toString();
                const M: string = m.toString().padStart(2, '0');
                const D: string = day.toString().padStart(2, '0');
                gDate = gregorian(`${Y}-${M}-${D}`).date;
            }
    }

    return JDate.getMoment(new Date(gDate), timezone).startOf('D').toDate();
};
