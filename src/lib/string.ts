import { JalaliDateTimeConfig } from '../interface/config';

import * as JDT from '../script/jdt';

export function toString(date: Date): string;
export function toString(date: Date, config: JalaliDateTimeConfig): string;
export function toString(date: Date, config?: JalaliDateTimeConfig): string {
    config = JDT.check(config || {}, JDT.type.now);
    const format = JDT.format(config.format || '', ['Y', 'M', 'D', 'H', 'I', 'S']);

    return JDT.string(date, config, format);
}
