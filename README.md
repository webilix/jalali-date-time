# Table of contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [Formatting Output](#formatting-output)
-   [Default Configuration](#default-configuration)
-   [API Features](#api-features)
    1. [now](#now)
    2. [toDate](#todate)
    3. [toTime](#totime)
    4. [toString](#tostring)
    5. [toTitle](#totitle)
    6. [toFullText](#tofulltext)
    7. [toObject](#toobject)
    8. [gregorian](#gregorian)
    9. [timezones](#timezones)
-   [Custom Types](#custom-types)
-   [Tests](#tests)

---

## Installation

```bash
npm install jalali-date-time --save
```

---

## Usage

```javascript
// Default configuration
const config = {
    timezone: 'Asia/Tehran',
    locale: 'en',
    fullTextFormat: 'W, D N Y H:I:S',
    titleFormat: 'W, D N Y',
    dateFormat: 'Y-M-D',
    timeFormat: 'H:I:S'
};

// Load modules
const jalaliDateTime = require('jalali-date-time');
const jalali = jalaliDateTime(config);
```

OR

```javascript
// inline configurations
const jalali = require('jalali-date-time')({
    timezone: 'Asia/Tehran',
    locale: 'en',
    fullTextFormat: 'W, D N Y H:I:S',
    titleFormat: 'W, D N Y',
    dateFormat: 'Y-M-D',
    timeFormat: 'H:I:S'
});
```

OR

```javascript
// Without configurations / using default values
const jalali = require('jalali-date-time')();
```

---

## Formatting Output

| Identifier | Description           | Example |
| ---------- | --------------------- | ------- |
| W          | Week day in persian   | یک‌شنبه |
| N          | Month name in persian | خرداد   |
| Y          | Year (4 digits)       | 1398    |
| y          | Year (2 digits)       | 98      |
| M          | Month (zerofill)      | 03      |
| m          | Month                 | 3       |
| D          | Day (zerofill)        | 07      |
| d          | Day                   | 7       |
| H          | Hour ( zerofill)      | 01      |
| h          | Hour                  | 1       |
| I          | Minute (zerofill)     | 00      |
| i          | Minute                | 0       |
| S          | Second (zerofill)     | 06      |
| s          | Second                | 6       |

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

## API Features

1. **[now](#now)**

    Current jalali date

    **Parameters**:

    | Name   | Type                                          | Required | Description           |
    | ------ | --------------------------------------------- | -------- | --------------------- |
    | config | [Configuration Object](#configuration-object) | No       | Result Configurations |

    - Valid Operators in configration Format are: **Y, M, D, H, I, S** (in both uppercase and lowercase)

    **Return Value (String):**

    Current jalali date.

    - If format is not specified in configuration then a concatination of **dateFormat** and **timeFormat** in [Default Configuration](#default-configuration) (with an space between) will be used.

    **Sample:**

    ```javascript
    const result = jalali.now();
    // 1398-01-23 01:23:45

    const result = jalali.now({
        timezone: 'Asia/Tehran',
        locale: 'fa',
        format: 'Y-M-D H:I'
    });
    // ۱۳۹۸-۰۱-۲۳ ۰۱:۲۳
    ```

2. **[toDate](#todate)**

    Jalali date value for an specific Date

    **Parameters:**

    | Name   | Type                                          | Required | Description           |
    | ------ | --------------------------------------------- | -------- | --------------------- |
    | date   | Date                                          | Yes      | Date Value            |
    | config | [Configuration Object](#configuration-object) | No       | Result Configurations |

    - Valid Operators in configration Format are: **Y, M, D** (in both uppercase and lowercase)

    **Return Value (String | Boolean):**

    Jalali date value for an specific date.

    - If date parameter is not a valid Javascript Date then false will be returned.
    - If format is not specified in configuration then the **dateFormat** in [Default Configuration](#default-configuration) will be used.

    **Sample:**

    ```javascript
    const result = jalali.toDate(new Date());
    // 1398-01-23

    const result = jalali.toDate(new Date(), {
        timezone: 'Asia/Tehran',
        locale: 'fa',
        format: 'Y/M/D'
    });
    // ۱۳۹۸/۰۱/۲۳
    ```

3. **[toTime](#totime)**

    Time value for an specific Date

    **Parameters:**

    | Name   | Type                                          | Required | Description           |
    | ------ | --------------------------------------------- | -------- | --------------------- |
    | date   | Date                                          | Yes      | Date Value            |
    | config | [Configuration Object](#configuration-object) | No       | Result Configurations |

    - Valid Operators in configration Format are: **H, I, S** (in both uppercase and lowercase)

    **Return Value (String | Boolean):**

    Date value for an specific date.

    - If date parameter is not a valid Javascript Date then false will be returned.<
    - If format is not specified in configuration then the **timeFormat** in [Default Configuration](#default-configuration) will be used.

    **Sample:**

    ```javascript
    const result = jalali.toTime(new Date());
    // 01:23:45

    const result = jalali.toTime(new Date(), {
        timezone: 'Asia/Tehran',
        locale: 'fa',
        format: 'H:I'
    });
    // ۰۱:۲۳
    ```

4. **[toString](#tostring)**

    Jalali date/time value for an specific date.

    **Parameters:**

    | Name   | Type                                          | Required | Description           |
    | ------ | --------------------------------------------- | -------- | --------------------- |
    | date   | Date                                          | Yes      | Date Value            |
    | config | [Configuration Object](#configuration-object) | No       | Result Configurations |

    - Valid Operators in configration Format are: **Y, M, D, H, I, S** (in both uppercase and lowercase)

    **Return Value (String | Boolean):**

    Jalali date/time value for an specific date.

    - If date parameter is not a valid Javascript Date then false will be returned.
    - If format is not specified in configuration then a concatination of **dateFormat** and **timeFormat** in [Default Configuration](#default-configuration) (with an space between) will be used.

    **Sample:**

    ```javascript
    const result = jalali.toString(new Date());
    // 1398-01-23 01:23:45

    const result = jalali.toString(new Date(), {
        timezone: 'Asia/Tehran',
        locale: 'fa',
        format: 'Y-M-D H:I'
    });
    // ۱۳۹۸-۰۱-۲۳ ۰۱:۲۳
    ```

5. **[toTitle](#totitle)**

    Jalali date/time persian title for an specific date.

    **Parameters:**

    | Name   | Type                                          | Required | Description           |
    | ------ | --------------------------------------------- | -------- | --------------------- |
    | date   | Date                                          | Yes      | Date Value            |
    | config | [Configuration Object](#configuration-object) | No       | Result Configurations |

    - Valid Operators in configration Format are: **W, N, Y, M, D** (in both uppercase and lowercase)
    - Default locale configuration for this method is **fa**. Use locale in config parameter to change it. Useing locle in Default Configuration will not effect this method's result

    **Return Value (String | Boolean):**

    Jalali date/time persian title for an specific date.

    - If date parameter is not a valid Javascript Date then false will be returned.
    - If format is not specified in configuration then the **titleFormat** in [Default Configuration](#default-configuration) will be used.

    **Sample:**

    ```javascript
    const result = jalali.toTitle(new Date());
    // جمعه, ۲۳ فروردین ۱۳۹۸

    const result = jalali.toTitle(new Date(), {
        timezone: 'Asia/Tehran',
        locale: 'en',
        format: 'W - D N y'
    });
    // جمعه - 23 فروردین 98
    ```

6. **[toFullText](#tofulltext)**

    Jalali date/time persian full text for an specific date.

    **Parameters:**

    | Name   | Type                                          | Required | Description           |
    | ------ | --------------------------------------------- | -------- | --------------------- |
    | date   | Date                                          | Yes      | Date Value            |
    | config | [Configuration Object](#configuration-object) | No       | Result Configurations |

    - Valid Operators in configration Format are: **W, N, Y, M, D, H, I, S** (in both uppercase and lowercase)
    - Default locale configuration for this method is **fa**. Use locale in config parameter to change it. Useing locle in Default Configuration will not effect this method's result

    **Return Value (String | Boolean):**

    Jalali date/time persian full text for an specific date.

    - If date parameter is not a valid Javascript Date then false will be returned.
    - If format is not specified in configuration then the **fullTextFormat** in [Default Configuration](#default-configuration) will be used.

    **Sample:**

    ```javascript
    const result = jalali.toFullText(new Date());
    // ۰۱:۲۳:۴۵ جمعه, ۲۳ فروردین ۱۳۹۸

    const result = jalali.toFullText(new Date(), {
        timezone: 'Asia/Tehran',
        locale: 'en',
        format: 'W - D N y ساعت h:I:S'
    });
    // جمعه - 23 فروردین 98 ساعت 1:23:45
    ```

7. **[toObject](#toobject)**

    Jalali date/time object for an specific date.

    **Parameters:**

    | Name     | Type   | Required | Description    |
    | -------- | ------ | -------- | -------------- |
    | date     | Date   | Yes      | Date Value     |
    | timezone | String | No       | Timezone Value |

    **Return Value ([Custom Date Object](#custom-date-object) | Boolean):**

    Jalali date/time object for an specific date.

    - If date parameter is not a valid Javascript Date then false will be returned.

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

8. **[gregorian](#gregorian)**

    Gregorian date string for an specific Jalali date.

    **Parameters:**

    | Name   | Type   | Required | Description |
    | ------ | ------ | -------- | ----------- |
    | jalali | String | Yes      | Jalali Date |

    **Return Value ([Gregorian Date Object](#gregorian-date-object) | Boolean):**

    Gregorian date string for an specific Jalali date.

    - If jalali date parameter is not a valid date string (format: Y-M-D, exampled: 1398-01-23 | 1398-1-23) then false will be returned.
    - Year value in jalai date must have exactly 4 digits

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

9. **[timezones](#timezones)**

    List of Standard timezone identifiers.

    **Return Value (Stringp[]):**

    List of Standard timezone identifiers.

    - All values in returned list can be use as timezone on all methods

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

---

## Custom Types

-   **Configuration Object**

    Used in main methods as configuration parameter

    | Property | Type         | Description                          |
    | -------- | ------------ | ------------------------------------ |
    | timezone | String       | Standard timezone identifier         |
    | locale   | Enum en / fa | Numbers locale format (en: 3, fa: ۳) |
    | format   | String       | Return Value Format                  |

-   **Custom Date Object**

    Type of result value for **toObject** method

    | Property | Type   | Description                     |
    | -------- | ------ | ------------------------------- |
    | week     | Number | Week Day (saturday=0, friday=6) |
    | year     | Number | Year Value                      |
    | month    | Number | Month Value                     |
    | day      | Number | Day Value                       |
    | hour     | Number | Hour Value                      |
    | minute   | Number | Minute Value                    |
    | second   | Number | Second Value                    |

-   **Gregorian Date Object**

    Type of result value for **gregorian** method

    | Property | Type   | Description                           |
    | -------- | ------ | ------------------------------------- |
    | year     | Number | Year Value                            |
    | month    | Number | Month Value                           |
    | day      | Number | Day Value                             |
    | date     | String | Full Date String (sample: 2019-04-12) |

## Tests

```bash
npm install
npm test
```
