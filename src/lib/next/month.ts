import * as JDate from '../../script/date';
import * as JDT from '../../script/jdt';

import { toString } from '../string';
import { daysInMonth } from '../days-in-month';
import { gregorian } from '../gregorian';

export const nextMonth = (type: 'FIRST' | 'LAST' | 'DAY', date?: Date, timezone?: string): Date => {
    date = date || new Date();
    if (!JDate.checkDate(date)) throw new TypeError('Invalid Date');
    if (!JDate.checkTimezone(timezone || '')) timezone = JDT.timezone();
    if (!['FIRST', 'LAST', 'DAY'].includes(type)) throw new TypeError('Change type must be FIRST, LAST or DAY');

    let y: number = +toString(date, { timezone, format: 'Y' });
    let m: number = +toString(date, { timezone, format: 'M' }) + 1;
    if (m >= 13) {
        y++;
        m = 1;
    }

    const month: string = `${y.toString()}-${m.toString().padStart(2, '0')}`;
    let gDate: string;
    switch (type) {
        case 'FIRST':
            gDate = gregorian(`${month}-01`).date;
            break;

        case 'LAST':
            const days: number = daysInMonth(month);
            gDate = gregorian(`${month}-${days}`).date;
            break;

        case 'DAY':
            const day: number = +toString(date, { timezone, format: 'D' });
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
