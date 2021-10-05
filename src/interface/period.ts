export interface JalaliDateTimePeriod {
    from: Date;
    to: Date;
    periods: {
        from: Date;
        to: Date;
    }[];
}
