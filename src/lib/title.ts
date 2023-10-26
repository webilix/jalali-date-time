import { JalaliDateTimeConfig } from '../interface/config';

import * as JDT from '../script/jdt';

export function toTitle(date: Date): string;
export function toTitle(date: Date, config: JalaliDateTimeConfig): string;
export function toTitle(date: Date, config?: JalaliDateTimeConfig): string {
    const locale = !config || !config.locale || config.locale != 'en' ? 'fa' : 'en';

    config = JDT.check(config || {}, JDT.type.title);
    config.locale = locale;
    const format = JDT.format(config.format || '', ['W', 'N', 'Y', 'M', 'D']);

    return JDT.string(date, config, format);
}
