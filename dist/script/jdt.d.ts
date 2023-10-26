import { JalaliDateTimeOptions } from '../interface/options';
import { JalaliDateTimeConfig } from '../interface/config';
declare const type: {
    now: string;
    date: string;
    time: string;
    title: string;
    fullText: string;
};
declare const init: (options?: JalaliDateTimeOptions) => JalaliDateTimeOptions;
declare const check: (config: JalaliDateTimeConfig, format: string) => JalaliDateTimeConfig;
declare const timezone: () => string;
declare const format: (format: string, check: string[]) => string;
declare const string: (date: Date, config: JalaliDateTimeConfig, format: string) => string;
declare const date_timezone: (arg1: any, arg2: any) => {
    date: Date;
    timezone: string;
};
export { type, init, check, timezone, format, string, date_timezone };
//# sourceMappingURL=jdt.d.ts.map