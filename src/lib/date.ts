import { JalaliDateTimeConfig } from '../interface/config';

import * as JDT from '../script/jdt';

export function toDate(date: Date, config?: JalaliDateTimeConfig): string {
    config = JDT.check(config ? config : {}, JDT.type.date);
    const format = JDT.format(config.format ? config.format : '', ['Y', 'M', 'D']);

    return JDT.string(date, config, format);
}
