export interface JalaliDateTimeCalendarDay {
    date: string;
    month: string;
    day: number;
}

export interface JalaliDateTimeCalendar {
    month: string;
    title: string;
    weeks: JalaliDateTimeCalendarDay[][];
}
