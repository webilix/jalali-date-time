import { JalaliDateTimeConfig } from '../interface/config';

import * as JDT from '../script/jdt';

export function now(): string;
export function now(config: JalaliDateTimeConfig): string;
export function now(config?: JalaliDateTimeConfig): string {
    config = JDT.check(config || {}, JDT.type.now);
    const format = JDT.format(config.format || '', ['Y', 'M', 'D', 'H', 'I', 'S']);

    return JDT.string(new Date(), config, format);
}
