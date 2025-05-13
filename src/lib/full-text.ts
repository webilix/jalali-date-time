import { JalaliDateTimeConfig } from '../interface/config';

import * as JDT from '../script/jdt';

export function toFullText(date: Date): string;
export function toFullText(date: Date, config: JalaliDateTimeConfig): string;
export function toFullText(date: Date, config?: JalaliDateTimeConfig): string {
    const locale = !config || !config.locale || config.locale != 'en' ? 'fa' : 'en';

    config = JDT.check(config || {}, JDT.type.fullText);
    config.locale = locale;
    const format = JDT.format(config.format || '', ['W', 'N', 'Y', 'M', 'D', 'H', 'I', 'S']);

    return JDT.string(date, config, format);
}
