import * as JDate from '../script/date';
import * as JDT from '../script/jdt';

export function dayOfWeek(): number;
export function dayOfWeek(date: Date): number;
export function dayOfWeek(timezone: string): number;
export function dayOfWeek(date: Date, timezone: string): number;
export function dayOfWeek(arg1?: any, arg2?: any): number {
    const { date, timezone } = JDT.date_timezone(arg1, arg2);

    const moment: Date = JDate.getMoment(date, timezone).endOf('D').toDate();
    return (moment.getDay() + 1) % 7;
}
