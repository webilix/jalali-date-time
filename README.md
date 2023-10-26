# @webilix/jalali-date-time

Lightweight library for parsing and formating Jalali date with timezone functionality

## Table of contents

-   [Installation](#installation)
-   [Usage JavaScript](#usage-javascript)
-   [Usage TypeScript](#usage-typescript)
-   [Default Configuration](#default-configuration)
-   [Formatting Output](#formatting-output)
-   [API Features](#api-features)
    -   [now](#now)
    -   [toDate](#todate)
    -   [toTime](#totime)
    -   [toString](#tostring)
    -   [toTitle](#totitle)
    -   [toFullText](#tofulltext)
    -   [toObject](#toobject)
    -   [dayOfWeek](#dayofweek)
    -   [daysInMonth](#daysinmonth)
    -   [calendar](#calendar)
    -   [gregorian](#gregorian)
    -   [timezones](#timezones)
    -   [nextDayOfWeek](#nextdayofweek)
    -   [nextDayOfMonth](#nextdayofmonth)
    -   [nextYear](#nextyear)
    -   [periodHour](#periodhour)
    -   [periodDay](#periodday)
    -   [periodWeek](#periodweek)
    -   [periodMonth](#periodmonth)
    -   [periodYear](#periodyear)
-   [Custom Types](#custom-types)
-   [Errors](#errors)
-   [Tests](#tests)

---

## Installation

```bash
npm install --save @webilix/jalali-date-time
```

---

## Usage JavaScript

```javascript
// Default configuration
const config = {
    timezone: 'Asia/Tehran',
    locale: 'en',
    fullTextFormat: 'W, D N Y H:I:S',
    titleFormat: 'W, D N Y',
    dateFormat: 'Y-M-D',
    timeFormat: 'H:I:S',
};

// Load modules
const JalaliDateTime = require('@webilix/jalali-date-time');
const jalali = JalaliDateTime(config);
```

OR

```javascript
// inline configurations
const jalali = require('@webilix/jalali-date-time')({
    timezone: 'Asia/Tehran',
    locale: 'en',
    fullTextFormat: 'W, D N Y H:I:S',
    titleFormat: 'W, D N Y',
    dateFormat: 'Y-M-D',
    timeFormat: 'H:I:S',
});
```

OR

```javascript
// Without configurations / using default values
const jalali = require('@webilix/jalali-date-time')();
```

---

## Usage TypeScript

```typescript
// Default configuration
const config = {
    timezone: 'Asia/Tehran',
    locale: 'en',
    fullTextFormat: 'W, D N Y H:I:S',
    titleFormat: 'W, D N Y',
    dateFormat: 'Y-M-D',
    timeFormat: 'H:I:S',
};

// Load modules
import { JalaliDateTime } from '@webilix/jalali-date-time';
const jalali = JalaliDateTime(config);
```

OR

```javascript
// Without configurations / using default values
import { JalaliDateTime } from '@webilix/jalali-date-time';
const jalali = JalaliDateTime();
```

---

## Default Configuration

| Name           | Type         | Description                          | Default Value  |
| -------------- | ------------ | ------------------------------------ | -------------- |
| timezone       | String       | Standard timezone identifier         | Asia/Tehran    |
| locale         | Enum en / fa | Numbers locale format (en: 3, fa: ۳) | en             |
| fullTextFormat | String       | Full-Text date format                | W, D N Y H:I:S |
| titleFormat    | String       | Date title format                    | W, D N Y       |
| dateFormat     | String       | Date format                          | Y-M-D          |
| timeFormat     | String       | Time format                          | H:I:S          |

---

## Formatting Output

Following characters can be used to specify the format of the outputted date string

| Identifier | Description                     | Example |
| ---------- | ------------------------------- | ------- |
| W          | Day of Week in persian          | یک‌شنبه |
| N          | Month name in persian           | خرداد   |
| Y          | Year (4 digits)                 | 1398    |
| y          | Year (2 digits)                 | 98      |
| M          | Month number (zerofill)         | 03      |
| m          | Month number                    | 3       |
| D          | Day of the month (zerofill)     | 07      |
| d          | Day of the month                | 7       |
| H          | Hour (24-hour format, zerofill) | 01      |
| h          | Hour (24-hour format)           | 1       |
| I          | Minute (zerofill)               | 00      |
| i          | Minute                          | 0       |
| S          | Second (zerofill)               | 06      |
| s          | Second                          | 6       |

---

## API Features

| Method                      | Description                                             |
| --------------------------- | ------------------------------------------------------- |
| [now](#now)                 | Current jalali date                                     |
| [toDate](#todate)           | Jalali date value for an specific date                  |
| [toTime](#totime)           | Time value for an specific date/timezone                |
| [toString](#tostring)       | Jalali date/time value for an specific date.            |
| [toTitle](#totitle)         | Jalali date/time persian title for an specific date     |
| [toFullText](#tofulltext)   | Jalali date/time persian full text for an specific date |
| [toObject](#toobject)       | Jalali date/time object for an specific date            |
| [daysInMonth](#daysinmonth) | Number of days in Jalali calendar for specific month    |
| [calendar](#calendar)       | Jalali monthly calendar                                 |
| [gregorian](#gregorian)     | Gregorian date string for an specific Jalali date       |
| [timezones](#timezones)     | List of Standard timezone identifiers                   |

---

### [now](#now)

Current jalali date

**Parameters**:

| Name   | Type                                          | Required | Description           |
| ------ | --------------------------------------------- | -------- | --------------------- |
| config | [Configuration Object](#configuration-object) | No       | Result Configurations |

Valid Operators in configration Format are: **Y, M, D, H, I, S** (in both uppercase and lowercase)

**Return Value (String):**

Current jalali date.

If format is not specified in configuration then a concatination of **dateFormat** and **timeFormat** in [Default Configuration](#default-configuration) (with an space between) will be used.

**Sample:**

```javascript
const result = jalali.now();
// 1398-01-23 01:23:45

const result = jalali.now({
    timezone: 'Asia/Tehran',
    locale: 'fa',
    format: 'Y-M-D H:I',
});
// ۱۳۹۸-۰۱-۲۳ ۰۱:۲۳
```

### [toDate](#todate)

Jalali date value for an specific date

**Parameters:**

| Name   | Type                                          | Required | Description           |
| ------ | --------------------------------------------- | -------- | --------------------- |
| date   | Date                                          | Yes      | Date Value            |
| config | [Configuration Object](#configuration-object) | No       | Result Configurations |

Valid Operators in configration Format are: **Y, M, D** (in both uppercase and lowercase)

**Return Value (String):**

Jalali date value for an specific date.

If date parameter is not a valid Javascript Date then **TypeError** will thrown.

If format is not specified in configuration then the **dateFormat** in [Default Configuration](#default-configuration) will be used.

**Sample:**

```javascript
const result = jalali.toDate(new Date());
// 1398-01-23

const result = jalali.toDate(new Date(), {
    timezone: 'Asia/Tehran',
    locale: 'fa',
    format: 'Y/M/D',
});
// ۱۳۹۸/۰۱/۲۳
```

### [toTime](#totime)

Time value for an specific date/timezone

**Parameters:**

| Name   | Type                                          | Required | Description           |
| ------ | --------------------------------------------- | -------- | --------------------- |
| date   | Date                                          | Yes      | Date Value            |
| config | [Configuration Object](#configuration-object) | No       | Result Configurations |

Valid Operators in configration Format are: **H, I, S** (in both uppercase and lowercase)

**Return Value (String):**

Date value for an specific date/timezone.

If date parameter is not a valid Javascript Date then **TypeError** will thrown.

If format is not specified in configuration then the **timeFormat** in [Default Configuration](#default-configuration) will be used.

**Sample:**

```javascript
const result = jalali.toTime(new Date());
// 01:23:45

const result = jalali.toTime(new Date(), {
    timezone: 'Asia/Tehran',
    locale: 'fa',
    format: 'H:I',
});
// ۰۱:۲۳
```

### [toString](#tostring)

Jalali date/time value for an specific date.

**Parameters:**

| Name   | Type                                          | Required | Description           |
| ------ | --------------------------------------------- | -------- | --------------------- |
| date   | Date                                          | Yes      | Date Value            |
| config | [Configuration Object](#configuration-object) | No       | Result Configurations |

Valid Operators in configration Format are: **Y, M, D, H, I, S** (in both uppercase and lowercase)

**Return Value (String):**

Jalali date/time value for an specific date.

If date parameter is not a valid Javascript Date then **TypeError** will thrown.

If format is not specified in configuration then a concatination of **dateFormat** and **timeFormat** in [Default Configuration](#default-configuration) (with an space between) will be used.

**Sample:**

```javascript
const result = jalali.toString(new Date());
// 1398-01-23 01:23:45

const result = jalali.toString(new Date(), {
    timezone: 'Asia/Tehran',
    locale: 'fa',
    format: 'Y-M-D H:I',
});
// ۱۳۹۸-۰۱-۲۳ ۰۱:۲۳
```

### [toTitle](#totitle)

Jalali date/time persian title for an specific date.

**Parameters:**

| Name   | Type                                          | Required | Description           |
| ------ | --------------------------------------------- | -------- | --------------------- |
| date   | Date                                          | Yes      | Date Value            |
| config | [Configuration Object](#configuration-object) | No       | Result Configurations |

Valid Operators in configration Format are: **W, N, Y, M, D** (in both uppercase and lowercase)

Default locale configuration for this method is **fa**. Use locale in config parameter to change it. Useing locle in Default Configuration will not effect this method's result

**Return Value (String):**

Jalali date/time persian title for an specific date.

If date parameter is not a valid Javascript Date then **TypeError** will thrown.

If format is not specified in configuration then the **titleFormat** in [Default Configuration](#default-configuration) will be used.

**Sample:**

```javascript
const result = jalali.toTitle(new Date());
// جمعه, ۲۳ فروردین ۱۳۹۸

const result = jalali.toTitle(new Date(), {
    timezone: 'Asia/Tehran',
    locale: 'en',
    format: 'W - D N y',
});
// جمعه - 23 فروردین 98
```

### [toFullText](#tofulltext)

Jalali date/time persian full text for an specific date

**Parameters:**

| Name   | Type                                          | Required | Description           |
| ------ | --------------------------------------------- | -------- | --------------------- |
| date   | Date                                          | Yes      | Date Value            |
| config | [Configuration Object](#configuration-object) | No       | Result Configurations |

Valid Operators in configration Format are: **W, N, Y, M, D, H, I, S** (in both uppercase and lowercase)

Default locale configuration for this method is **fa**. Use locale in config parameter to change it. Useing locle in Default Configuration will not effect this method's result

**Return Value (String):**

Jalali date/time persian full text for an specific date.

If date parameter is not a valid Javascript Date then **TypeError** will thrown.

If format is not specified in configuration then the **fullTextFormat** in [Default Configuration](#default-configuration) will be used.

**Sample:**

```javascript
const result = jalali.toFullText(new Date());
// ۰۱:۲۳:۴۵ جمعه, ۲۳ فروردین ۱۳۹۸

const result = jalali.toFullText(new Date(), {
    timezone: 'Asia/Tehran',
    locale: 'en',
    format: 'W - D N y ساعت h:I:S',
});
// جمعه - 23 فروردین 98 ساعت 1:23:45
```

### [toObject](#toobject)

Jalali date/time object for an specific date

**Parameters:**

| Name     | Type   | Required | Description    |
| -------- | ------ | -------- | -------------- |
| date     | Date   | Yes      | Date Value     |
| timezone | String | No       | Timezone Value |

**Return Value ([Custom Date Object](#custom-date-object)):**

Jalali date/time object for an specific date.

If date parameter is not a valid Javascript Date then **TypeError** will thrown.

**Sample:**

```javascript
const result = jalali.toObject(new Date());
/*   {
 *      week: 6,
 *      year: 1398,
 *      month: 1,
 *      day: 23,
 *      hour: 1,
 *      minute: 23,
 *      second: 45
 *   }
 */
```

### [dayOfWeek](#dayofweek)

Week day number in jalali calendar

Starts with Saturday as 0 and ends with Friday as 6

**Parameters:**

| Name     | Type   | Required | Description    |
| -------- | ------ | -------- | -------------- |
| date     | Date   | No       | Date Value     |
| timezone | String | No       | Timezone Value |

**Return Value (number, 0 - 6):**

If date parameter is not a valid Javascript Date then **TypeError** will thrown.

**Sample:**

```javascript
const result = jalali.dayOfWeek();
```

### [daysInMonth](#daysinmonth)

Number of days in Jalali calendar for specific month

**Parameters:**

| Name  | Type   | Required | Description  |
| ----- | ------ | -------- | ------------ |
| month | String | No       | Jalali Month |

**Return Value (number):**

If month value is not a valid month string (format: Y-M, sample: 1398-01) then **TypeError** will thrown.

If month value is not specified then current Jalali month will be used instead.

**Sample:**

```javascript
const result1 = jalali.daysInMonth('1390-01'); // 31
const result2 = jalali.daysInMonth('1390-07'); // 30
const result3 = jalali.daysInMonth('1390-12'); // 29
const result4 = jalali.daysInMonth('1391-12'); // 30
```

### [calendar](#calendar)

Jalali monthly calendar

**Parameters:**

| Name  | Type   | Required | Description  |
| ----- | ------ | -------- | ------------ |
| month | String | No       | Jalali Month |

**Return Value ([Jalali Calendar Object](#jalali-calendar-object)):**

Jalali monthly calendar info.

If month value is not a valid month string (format: Y-M, sample: 1398-01) then **TypeError** will thrown.

If month value is not specified then current Jalali month will be used instead.

**Sample:**

```javascript
const result = jalali.calendar('1398-01');
/*   {
 *       month: '1398-01',
 *       title: 'فروردین ۱۳۹۸',
 *       weeks:
 *          [
 *              [
 *                  { date: '1397-12-25', month: '1397-12', day: 25 },
 *                  { date: '1397-12-26', month: '1397-12', day: 26 },
 *                  { date: '1397-12-27', month: '1397-12', day: 27 },
 *                  { date: '1397-12-28', month: '1397-12', day: 28 },
 *                  { date: '1397-12-29', month: '1397-12', day: 29 },
 *                  { date: '1398-01-01', month: '1398-01', day: 1 },
 *                  { date: '1398-01-02', month: '1398-01', day: 2 }
 *              ],
 *              [
 *                  { date: '1398-01-03', month: '1398-01', day: 3 },
 *                  { date: '1398-01-04', month: '1398-01', day: 4 },
 *                  { date: '1398-01-05', month: '1398-01', day: 5 },
 *                  { date: '1398-01-06', month: '1398-01', day: 6 },
 *                  { date: '1398-01-07', month: '1398-01', day: 7 },
 *                  { date: '1398-01-08', month: '1398-01', day: 8 },
 *                  { date: '1398-01-09', month: '1398-01', day: 9 }
 *              ],
 *              [
 *                  { date: '1398-01-10', month: '1398-01', day: 10 },
 *                  { date: '1398-01-11', month: '1398-01', day: 11 },
 *                  { date: '1398-01-12', month: '1398-01', day: 12 },
 *                  { date: '1398-01-13', month: '1398-01', day: 13 },
 *                  { date: '1398-01-14', month: '1398-01', day: 14 },
 *                  { date: '1398-01-15', month: '1398-01', day: 15 },
 *                  { date: '1398-01-16', month: '1398-01', day: 16 }
 *              ],
 *              [
 *                  { date: '1398-01-17', month: '1398-01', day: 17 },
 *                  { date: '1398-01-18', month: '1398-01', day: 18 },
 *                  { date: '1398-01-19', month: '1398-01', day: 19 },
 *                  { date: '1398-01-20', month: '1398-01', day: 20 },
 *                  { date: '1398-01-21', month: '1398-01', day: 21 },
 *                  { date: '1398-01-22', month: '1398-01', day: 22 },
 *                  { date: '1398-01-23', month: '1398-01', day: 23 }
 *              ],
 *              [
 *                  { date: '1398-01-24', month: '1398-01', day: 24 },
 *                  { date: '1398-01-25', month: '1398-01', day: 25 },
 *                  { date: '1398-01-26', month: '1398-01', day: 26 },
 *                  { date: '1398-01-27', month: '1398-01', day: 27 },
 *                  { date: '1398-01-28', month: '1398-01', day: 28 },
 *                  { date: '1398-01-29', month: '1398-01', day: 29 },
 *                  { date: '1398-01-30', month: '1398-01', day: 30 }
 *              ],
 *              [
 *                  { date: '1398-01-31', month: '1398-01', day: 31 },
 *                  { date: '1398-02-01', month: '1398-02', day: 1 },
 *                  { date: '1398-02-02', month: '1398-02', day: 2 },
 *                  { date: '1398-02-03', month: '1398-02', day: 3 },
 *                  { date: '1398-02-04', month: '1398-02', day: 4 },
 *                  { date: '1398-02-05', month: '1398-02', day: 5 },
 *                  { date: '1398-02-06', month: '1398-02', day: 6 }
 *              ]
 *          ]
 *   }
 */
```

### [gregorian](#gregorian)

Gregorian date string for an specific Jalali date

**Parameters:**

| Name   | Type   | Required | Description |
| ------ | ------ | -------- | ----------- |
| jalali | String | Yes      | Jalali Date |

**Return Value ([Gregorian Date Object](#gregorian-date-object)):**

Gregorian date string for an specific Jalali date.

If date parameter is not a valid date string (format: Y-M-D, sample: 1398-01-23 or 1398-1-23) then **TypeError** will thrown.

Year in date string must be 4 digits otherwise **RangeError** will thrown.

Month in date string must be between 1 and 12 otherwise **RangeError** will thrown.

Day in date string must be between 1 and 31 otherwise **RangeError** will thrown.

**Sample:**

```javascript
const result = jalali.gregorian('1398-01-23');
/*   {
 *      year: 2019,
 *      month: 4,
 *      day: 12,
 *      date: '2019-04-12'
 *   }
 */
```

### [timezones](#timezones)

List of Standard timezone identifiers

**Return Value (Stringp[]):**

List of Standard timezone identifiers.

All values in returned list can be use as timezone on all methods

**Sample:**

```javascript
const result = jalali.timezones();
/*   [
 *      'Africa/Abidjan',
 *      'Africa/Accra',
 *      'Africa/Addis_Ababa',
 *      'Africa/Algiers',
 *      'Africa/Asmara',
 *      'Africa/Asmera',
 *      'Africa/Bamako',
 *      'Africa/Bangui',
 *      ...
 *   ]
 */
```

### [nextDayOfWeek](#nextdayofweek)

Next week day according to specific date

**Parameters:**

| Name      | Type   | Required | Description                               |
| --------- | ------ | -------- | ----------------------------------------- |
| dayOfWeek | Number | Yes      | Week day number (Sunday: 0 - Saturday: 6) |
| date      | Date   | No       | Date Value                                |
| timezone  | String | No       | Timezone Value                            |

**Return Value (Date):**

If dayOfWeek value is NaN or not between 0, 6 then **TypeError** will thrown.

If date parameter is not a valid Javascript Date then **TypeError** will thrown.

**Sample:**

```javascript
const result = jalali.nextDayOfWeek(0);
/* 2025-03-22T19:30:00.000Z */

const result = jalali.nextDayOfWeek(2);
/* 2025-03-24T19:30:00.000Z */
```

### [nextDayOfMonth](#nextdayofmonth)

Specific days in next month according to specific date in Jalali calendar

**Parameters:**

| Name       | Type           | Required | Description                                       |
| ---------- | -------------- | -------- | ------------------------------------------------- |
| dayOfMonth | String, number | Yes      | Month day value: 'FIRST', 'LAST', number (1 - 31) |
| date       | Date           | No       | Date Value                                        |
| timezone   | String         | No       | Timezone Value                                    |

**Return Value (Date):**

If dayOfMonth value is not one of specified values then **TypeError** will thrown.

If date parameter is not a valid Javascript Date then **TypeError** will thrown.

**Results:**

-   FIRST: First day of month
-   LAST: Last day of month
-   DAY: Specific day of month according to date (example: 1400-01-15 > 1400-02-15)
    > If date is not valid for next month, first month with valid date will be returned (example: 1400-06-31 > 1401-01-31)

**Sample:**

```javascript
const result = jalali.nextDayOfMonth('FIRST');
/* 2025-03-20T20:30:00.000Z */

const result = jalali.nextDayOfMonth('LAST');
/* 2025-04-19T19:30:00.000Z */
```

### [nextYear](#nextyear)

Next years date according to specific date in Jalali calendar

**Parameters:**

| Name     | Type   | Required | Description    |
| -------- | ------ | -------- | -------------- |
| date     | Date   | No       | Date Value     |
| timezone | String | No       | Timezone Value |

**Return Value (Date):**

If date parameter is not a valid Javascript Date then **TypeError** will thrown.

If date is not valid for next year, first next year with valid date will be returned (example: 1403-12-30 > 1408-12-30)

**Sample:**

```javascript
const result = jalali.nextYear();
/* 2030-03-19T20:30:00.000Z */
```

### [periodHour](#periodhour)

Hourly date/time period values based of number of hours

**Parameters:**

| Name     | Type   | Required | Description     |
| -------- | ------ | -------- | --------------- |
| hours    | Number | Yes      | Nomber of hours |
| date     | Date   | No       | End Date Value  |
| timezone | String | No       | Timezone Value  |

**Return Value ([Period Object](#period-object)):**

If hours value is NaN or less than 1 then **TypeError** will thrown.

If date parameter is not a valid Javascript Date then **TypeError** will thrown.

**Sample:**

```javascript
const result = jalali.periodHour(3);
/*   {
 *      from: 2021-10-05T01:30:00.000Z,
 *      to: 2021-10-05T04:29:59.999Z,
 *      periods: [
 *        { from: 2021-10-05T01:30:00.000Z, to: 2021-10-05T02:29:59.999Z },
 *        { from: 2021-10-05T02:30:00.000Z, to: 2021-10-05T03:29:59.999Z },
 *        { from: 2021-10-05T03:30:00.000Z, to: 2021-10-05T04:29:59.999Z }
 *      ]
 *    }
 */
```

### [periodDay](#periodday)

Daily date/time period values based of number of days

**Parameters:**

| Name     | Type   | Required | Description    |
| -------- | ------ | -------- | -------------- |
| days     | Number | Yes      | Nomber of days |
| date     | Date   | No       | End Date Value |
| timezone | String | No       | Timezone Value |

**Return Value ([Period Object](#period-object)):**

If days value is NaN or less than 1 then **TypeError** will thrown.

If date parameter is not a valid Javascript Date then **TypeError** will thrown.

**Sample:**

```javascript
const result = jalali.periodDays(7);
/*   {
 *      from: 2021-09-28T20:30:00.000Z,
 *      to: 2021-10-05T20:29:59.999Z,
 *      periods: [
 *        { from: 2021-09-28T20:30:00.000Z, to: 2021-09-29T20:29:59.999Z },
 *        { from: 2021-09-29T20:30:00.000Z, to: 2021-09-30T20:29:59.999Z },
 *        { from: 2021-09-30T20:30:00.000Z, to: 2021-10-01T20:29:59.999Z },
 *        { from: 2021-10-01T20:30:00.000Z, to: 2021-10-02T20:29:59.999Z },
 *        { from: 2021-10-02T20:30:00.000Z, to: 2021-10-03T20:29:59.999Z },
 *        { from: 2021-10-03T20:30:00.000Z, to: 2021-10-04T20:29:59.999Z },
 *        { from: 2021-10-04T20:30:00.000Z, to: 2021-10-05T20:29:59.999Z }
 *      ]
 *   }
 */
```

### [periodWeek](#periodweek)

Weekly date/time period values based of number of days

**Parameters:**

| Name     | Type   | Required | Description     |
| -------- | ------ | -------- | --------------- |
| weeks    | Number | Yes      | Nomber of weekd |
| date     | Date   | No       | End Date Value  |
| timezone | String | No       | Timezone Value  |

**Return Value ([Period Object](#period-object)):**

If weeks value is NaN or less than 1 then **TypeError** will thrown.

If date parameter is not a valid Javascript Date then **TypeError** will thrown.

**Sample:**

```javascript
const result = jalali.periodWeeks(4);
/*   {
 *       from: 2021-09-24T20:30:00.000Z,
 *       to: 2021-10-22T20:29:59.999Z,
 *       periods: [
 *         { from: 2021-09-24T20:30:00.000Z, to: 2021-10-01T20:29:59.999Z },
 *         { from: 2021-10-01T20:30:00.000Z, to: 2021-10-08T20:29:59.999Z },
 *         { from: 2021-10-08T20:30:00.000Z, to: 2021-10-15T20:29:59.999Z },
 *         { from: 2021-10-15T20:30:00.000Z, to: 2021-10-22T20:29:59.999Z }
 *       ]
 *    }
 */
```

### [periodMonth](#periodmonth)

Monthly (jalali month) date/time period values based of number of months

**Parameters:**

| Name     | Type   | Required | Description      |
| -------- | ------ | -------- | ---------------- |
| months   | Number | Yes      | Nomber of months |
| date     | Date   | No       | End Date Value   |
| timezone | String | No       | Timezone Value   |

**Return Value ([Period Object](#period-object)):**

If months value is NaN or less than 1 then **TypeError** will thrown.

If date parameter is not a valid Javascript Date then **TypeError** will thrown.

**Sample:**

```javascript
const result = jalali.periodMonth(4);
/*   {
 *      from: 2020-10-21T20:30:00.000Z,
 *      to: 2021-10-22T20:29:59.999Z,
 *      periods: [
 *        { from: 2021-06-21T20:30:00.000Z, to: 2021-07-22T20:29:59.999Z },
 *        { from: 2021-07-22T20:30:00.000Z, to: 2021-08-22T20:29:59.999Z },
 *        { from: 2021-08-22T20:30:00.000Z, to: 2021-09-22T20:29:59.999Z },
 *        { from: 2021-09-22T20:30:00.000Z, to: 2021-10-22T20:29:59.999Z }
 *      ]
 *    }
 */
```

### [periodYear](#periodyear)

Yearly (jalali year) date/time period values based of number of years

**Parameters:**

| Name     | Type   | Required | Description     |
| -------- | ------ | -------- | --------------- |
| years    | Number | Yes      | Nomber of years |
| date     | Date   | No       | End Date Value  |
| timezone | String | No       | Timezone Value  |

**Return Value ([Period Object](#period-object)):**

If years value is NaN or less than 1 then **TypeError** will thrown.

If date parameter is not a valid Javascript Date then **TypeError** will thrown.

**Sample:**

```javascript
const result = jalali.periodYear(4);
/*   {
 *      from: 2019-03-20T20:30:00.000Z,
 *      to: 2023-03-20T20:29:59.999Z,
 *      periods: [
 *        { from: 2019-03-20T20:30:00.000Z, to: 2020-03-19T20:29:59.999Z },
 *        { from: 2020-03-19T20:30:00.000Z, to: 2021-03-20T20:29:59.999Z },
 *        { from: 2021-03-20T20:30:00.000Z, to: 2022-03-20T20:29:59.999Z },
 *        { from: 2022-03-20T20:30:00.000Z, to: 2023-03-20T20:29:59.999Z }
 *      ]
 *   }
 */
```

---

## Custom Types

| Type                                            | Usage                                      |
| ----------------------------------------------- | ------------------------------------------ |
| [Configuration Object](#configuration-object)   | Main methods configuration parameter       |
| [Custom Date Object](#custom-date-object)       | Result value type for **toObject** method  |
| [Gregorian Date Object](#gregorian-date-object) | Result value type for **gregorian** method |
| [Period Object](#period-object)                 | Result value type for **period** methods   |

### [Configuration Object](#configuration-object)

Main methods configuration parameter

| Property | Type         | Description                          |
| -------- | ------------ | ------------------------------------ |
| timezone | String       | Standard timezone identifier         |
| locale   | Enum en / fa | Numbers locale format (en: 3, fa: ۳) |
| format   | String       | Return Value Format                  |

### [Custom Date Object](#custom-date-object)

Result value type for **toObject** method

| Property | Type   | Description                     |
| -------- | ------ | ------------------------------- |
| week     | Number | Week Day (saturday=0, friday=6) |
| year     | Number | Year Value                      |
| month    | Number | Month Value                     |
| day      | Number | Day Value                       |
| hour     | Number | Hour Value                      |
| minute   | Number | Minute Value                    |
| second   | Number | Second Value                    |

### [Jalali Calendar Object](#jalali-calendar-object)

Result value type for **calendar** method

| Property             | Type            | Description              |
| -------------------- | --------------- | ------------------------ |
| month                | String          | Jalali Month Value       |
| title                | String          | Jalali Month Title       |
| weeks                | Array of Arrays | Weeks Data               |
| weeks[\*][1-7].date  | String          | Day values: Jalali Date  |
| weeks[\*][1-7].month | String          | Day values: Jalali Month |
| weeks[\*][1-7].day   | Number          | Day values: Day Number   |

### [Gregorian Date Object](#gregorian-date-object)

Result value type for **gregorian** method

| Property | Type   | Description                           |
| -------- | ------ | ------------------------------------- |
| year     | Number | Year Value                            |
| month    | Number | Month Value                           |
| day      | Number | Day Value                             |
| date     | String | Full Date String (sample: 2019-04-12) |

### [Period Object](#period-object)

Result value type for **period** methods

| Property | Type                                     | Description     |
| -------- | ---------------------------------------- | --------------- |
| from     | Date                                     | Start of period |
| to       | Date                                     | End of period   |
| periods  | Array of Object { from: Date, to: Date } | Periods list    |

---

## Errors

| Error      | Method                      | Parameter | Message                      |
| ---------- | --------------------------- | --------- | ---------------------------- |
| TypeError  | [toDate](#todate)           | date      | Invalid Date                 |
| TypeError  | [toTime](#totime)           | date      | Invalid Date                 |
| TypeError  | [toString](#tostring)       | date      | Invalid Date                 |
| TypeError  | [toTitle](#totitle)         | date      | Invalid Date                 |
| TypeError  | [toFullText](#tofulltext)   | date      | Invalid Date                 |
| TypeError  | [toObject](#toobject)       | date      | Invalid Date                 |
| TypeError  | [gregorian](#gregorian)     | jalali    | Date is not String           |
| RangeError | [gregorian](#gregorian)     | jalali    | Year must be 4 digits        |
| RangeError | [gregorian](#gregorian)     | jalali    | Month is not between 1, 12   |
| RangeError | [gregorian](#gregorian)     | jalali    | Day is not between 1, 31     |
| TypeError  | [periodHour](#periodhour)   | hours     | Hours must be bigger than 0  |
| TypeError  | [periodHour](#periodhour)   | date      | Invalid Date                 |
| TypeError  | [periodDay](#periodday)     | days      | Days must be bigger than 0   |
| TypeError  | [periodDay](#periodday)     | date      | Invalid Date                 |
| TypeError  | [periodMonth](#periodmonth) | months    | Months must be bigger than 0 |
| TypeError  | [periodMonth](#periodmonth) | date      | Invalid Date                 |

---

## Tests

```bash
git clone https://github.com/webilix/jalali-date-time.git
npm install
npm test
```
