export declare class modify {
    private _year;
    private _month;
    private _day;
    private _time;
    private _timezone;
    constructor();
    constructor(date: Date);
    constructor(timezone: string);
    constructor(date: Date, timezone: string);
    private getDaysInMonth;
    private checkDaysInMonth;
    year(change: number): modify;
    month(change: number): modify;
    day(change: number): modify;
    toDate(time?: 'START' | 'END'): Date;
}
//# sourceMappingURL=modify.d.ts.map