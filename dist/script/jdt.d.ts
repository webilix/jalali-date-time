import { JalaliDateTimeOptions } from '../interface/options';
import { JalaliDateTimeConfig } from '../interface/config';
declare const type: {
    now: string;
    date: string;
    time: string;
    title: string;
    fullText: string;
};
declare const init: (options?: JalaliDateTimeOptions | undefined) => JalaliDateTimeOptions;
declare const check: (config: JalaliDateTimeConfig, format: string) => JalaliDateTimeConfig;
declare const timezone: () => string;
declare const format: (format: string, check: string[]) => string;
declare const string: (date: Date, config: JalaliDateTimeConfig, format: string) => string;
export { type, init, check, timezone, format, string };
//# sourceMappingURL=jdt.d.ts.map