import get from 'lodash/get';
import numeral from 'numeral';
//import moment from 'moment-with-locales-es6';
import moment from '../../node_modules/moment/min/moment-with-locales';
//import moment from 'moment/min/moment-with-locales';

export function format(first: string, middle: string, last: string): string {
    return (
        (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '')
    );
}

export function generateUniqueId(field: string = 'def'): string {
    return new Date().getTime() + field.trim().replace(/\s/g, '_');
}

export function generateUuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (
        c
    ) {
        var r = (Math.random() * 16) | 0,
            v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

export function eventFromElement(
    element: HTMLElement,
    eventSource: HTMLElement
) {
    while (eventSource) {
        if (eventSource === element) return true;
        eventSource = eventSource.parentElement;
    }
    return false;
}

/**
 * Given an event and an element, returns if that event was generated within that element or one of its children.
 * @param event
 * @param element
 */
export function isEventFromElement(
    event: Event,
    element: HTMLElement
): boolean {
    try {
        if (event.composedPath().indexOf(element) >= 0) {
            return true;
        }
    } catch (e) {
        if (eventFromElement(element, event.target as HTMLElement)) {
            return true;
        }
    }
    return false;
}

/**
 * Given a camelCase formatted string, returns the same string in kebab-case.
 * @param str - the string to convert.
 * @return the converted string.
 */
export function toKebabCase(str: string): string {
    return (str || '').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

export function replacePlaceHolders(template: any, data: any) {
    template = typeof template === 'function' ? template() : template;
    if (['string', 'number'].indexOf(typeof template) === -1)
        throw 'please provide a valid template';

    if (!data) return template;

    template = template.replace(/\{\{([^}]+)\}\}/g, function (match) {
        match = match.slice(2, -2);
        var val = get(data, match, match);
        if (!val) return '{{' + match + '}}';
        return val;
    });

    return template;
}

export function formatSize(size: any) {
    if (isNaN(size)) {
        return size;
    } else {
        return size + 'px';
    }
}

/**
 * Convert argument to boolean. Everything is false unless: true, "true", 1, "1", "on", "yes"
 * @param value the value to convert
 * @return the boolean value of passed argument
 */
export function getBoolean(value: any) {
    switch (value) {
        case true:
        case 'true':
        case 1:
        case '1':
        case 'on':
        case 'yes':
            return true;
        default:
            return false;
    }
}

/**
 * Check if an object is undefined, null or empty
 * @param obj the object to check
 * @return true or false
 */
export function isEmpty(obj: any) {
    return (
        !obj ||
        obj === null ||
        (Object.keys(obj).length === 0 && obj.constructor === Object)
    );
}

export function isNumber(value: any): boolean {
    //return typeof value === 'number';
    return !isNaN(value);
}

/**
 * input formatted by locale US, decimal separator . (like java decimal numbers)
 * output number
 **/
export function stringToNumber(input: string): number {
    if (input == null || input.trim() == '') {
        input = '0';
    }
    return numeral(input).value();
}

/**
 * input number
 * output formatted by actual browser locale
 **/
export function numberToString(input: number, decimals: number): string {
    if (input == null) {
        return '';
    }
    return _numberToString(input, decimals, navigator.language);
}

/**
 * input formatted by locale US, decimal separator . (like java decimal numbers)
 * output formatted by actual browser locale
 **/
export function unformattedStringToFormattedStringNumber(
    input: string,
    decimals: number
): string {
    return numberToString(stringToNumber(input), decimals);
}

/**
 * input formatted by actual browser locale
 * output formatted by locale US, decimal separator . (like java decimal numbers)
 **/
export function formattedStringToUnformattedStringNumber(
    input: string
): string {
    if (input == null || input.trim() == '') {
        input = '0';
    }
    let decFmt: string = getDecimalSeparator(navigator.language);
    let regExpr: RegExp = null;
    if (decFmt == '.') {
        regExpr = /,/g;
    } else {
        regExpr = /\./g;
    }

    input = input.replace(regExpr, '');
    if (decFmt != '.') {
        input = input.replace(/,/g, '.');
    }
    let unf: number = Number(input);

    return _numberToString(unf, -1, 'en-US');
}

function getDecimalSeparator(locale) {
    const numberWithDecimalSeparator = 1.1;
    return Intl.NumberFormat(locale)
        .formatToParts(numberWithDecimalSeparator)
        .find((part) => part.type === 'decimal').value;
}

export function _numberToString(
    input: number,
    decimals: number,
    locale: string
): string {
    if (input == null) {
        input = 0;
    }
    let n: Number = Number(input);
    let f: Intl.NumberFormatOptions =
        decimals > -1
            ? {
                  minimumFractionDigits: decimals,
                  maximumFractionDigits: decimals,
              }
            : {};
    return n.toLocaleString(locale, f);
}

/**
 * input formatted YYYYMMGG
 * output Date
 **/
export function unformatDate(value: string): Date {
    let format = 'YYYYMMDD';
    return moment(value, format).toDate();
}

/**
 * input formatted by actual browser locale
 * output formatted YYYYMMGG
 **/
export function formattedStringToUnformattedStringDate(value: string): string {
    var localeData = moment.localeData();
    var format = localeData.longDateFormat('L');
    return moment(value, format).format('YYYYMMDD');
}

/**
 * input formatted YYYYMMGG
 * output formatted by actual browser locale
 **/
export function unformattedStringToFormattedStringDate(
    input: string,
    customedFormat: string
): string {
    var m = moment(input, 'YYYYMMDD');
    console.log(
        'unformattedStringToFormattedStringDate 1 m.locale()=' + m.locale()
    );

    m = m.locale(navigator.language);
    console.log(
        'unformattedStringToFormattedStringDate 2 m.locale()=' +
            m.locale() +
            ' navigator.language=' +
            navigator.language +
            " m.localeData().longDateFormat('L')=" +
            m.localeData().longDateFormat('L')
    );
    var localeData = m.localeData();
    var format = localeData.longDateFormat('L');
    console.log(
        'unformattedStringToFormattedStringDate customedFormat=' +
            customedFormat
    );
    console.log(
        'unformattedStringToFormattedStringDate input=' +
            input +
            ' format=' +
            format
    );
    return m.format(format);
}
