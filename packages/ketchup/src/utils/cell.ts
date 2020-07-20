// Cells utils functions

import get from 'lodash/get';
import numeral from 'numeral';
import moment from 'moment';

import { Cell } from '../components/kup-data-table/kup-data-table-declarations';
import { BoxObject } from '../components/kup-box/kup-box-declarations';
import { isProgressBar as isProgressBarObj } from './object';

import { isImage as isImageObj } from './object';
import { toKebabCase } from './utils';

// -------------
// COMMONS
// -------------

export function getShape(cell: Cell, boxObject: BoxObject): string {
    let prop = get(cell, 'shape', null);
    if (!prop) {
        prop = get(boxObject, 'shape', null);
    }
    return prop ? prop.toUpperCase() : null;
}

export function getValue(cell: Cell, boxObject: BoxObject): string {
    let prop = get(cell, 'value', null);
    if (!prop) {
        prop = get(boxObject, 'value', null);
    }
    return prop;
}

export function getFromConfig(
    cell: Cell,
    boxObject: BoxObject,
    propName: string
): any {
    let prop = null;
    if (cell && cell.config) {
        prop = get(cell.config, propName, null);
    }
    if (!prop && boxObject && boxObject.config) {
        prop = get(boxObject.config, propName, null);
    }
    return prop;
}

// -------------
// PROGRESS BAR
// -------------

export function isProgressBar(cell: Cell, boxObject: BoxObject) {
    let shape = getShape(cell, boxObject);
    return (
        'PGB' === shape ||
        (!shape && cell && cell.obj && isProgressBarObj(cell.obj))
    );
}

/**
 * These are the camelCase javascript suffixes of the CSS vars of kup-progress-bar.
 * They always must be equal to those you can find inside the file kup-progress-bar.scss in the first section,
 * save for the prefix (--kup-pb_), which will be added directly inside the [buildProgressBarConfig function]{@link buildProgressBarConfig}
 */
const progressbarCssVars = [
    'backgroundColor',
    'borderRadius',
    'foregroundColor',
    'textColor',
];

/**
 * Given a Cell object (from data-talbe or box component), a value and an optional isSmall flag,
 * returns the jsx to create a progressbar.
 * @param cell - The cell to render as a progressbar.
 * @param value - The value the progressbar must set.
 * @param [isSmall] - flag to specify if the progressbar must be rendered as small one.
 */
export function buildProgressBarConfig(
    cell: Cell,
    boxObject: BoxObject,
    isSmall: boolean = false,
    value: string
) {
    const wrapperStyle = {};

    for (let i = 0; i < progressbarCssVars.length; i++) {
        let progressbarCssVar = getFromConfig(
            cell,
            boxObject,
            progressbarCssVars[i]
        );

        if (progressbarCssVar) {
            wrapperStyle[
                '--kup-pb_' + toKebabCase(progressbarCssVars[i])
            ] = progressbarCssVar;
        }
    }

    let hideLabel = getFromConfig(cell, boxObject, 'hideLabel');
    let labelText = getFromConfig(cell, boxObject, 'labelText');

    return {
        isSmall: isSmall,
        labelText: labelText,
        hideLabel: !!hideLabel,
        style: wrapperStyle,
        value: numeral(value).value(),
    };
}

// -------------
// IMAGE
// -------------

export function isImage(cell: Cell, boxObject: BoxObject) {
    let shape = getShape(cell, boxObject);
    return (
        'IMG' === shape || (!shape && cell && cell.obj && isImageObj(cell.obj))
    );
}

// -------------
// ICON
// -------------

export function buildIconConfig(cell: Cell, value: string) {
    let badgeData = undefined;
    let color = undefined;
    let customStyle = undefined;
    let data = undefined;
    let sizeX = undefined;
    let sizeY = undefined;

    if (cell && cell.config) {
        const config = cell.config;
        badgeData = config.badgeData;
        color = config.color;
        customStyle = config.customStyle;
        data = config.data;
        sizeX = config.sizeX;
        sizeY = config.sizeY;
    }

    return {
        badgeData: badgeData,
        color: color,
        customStyle: customStyle,
        data: data,
        resource: value,
        sizeX: sizeX,
        sizeY: sizeY,
    };
}

// -------------
// COMBO
// -------------

export function isCombo(cell: Cell, boxObject: BoxObject) {
    let shape = getShape(cell, boxObject);
    return 'CMB' === shape;
}

// -------------
// AUTOCOMPLETE
// -------------

export function isAutocomplete(cell: Cell, boxObject: BoxObject) {
    let shape = getShape(cell, boxObject);
    return 'ACP' === shape;
}

// -------------
// SEARCH
// -------------

export function isSearch(cell: Cell, boxObject: BoxObject) {
    let shape = getShape(cell, boxObject);
    return 'SRC' === shape;
}

// -------------
// CRUD
// -------------

export function isConfigurator(cell: Cell, boxObject: BoxObject) {
    let shape = getShape(cell, boxObject);
    return 'CFG' === shape;
}

export function isMultipleConfigurator(cell: Cell, boxObject: BoxObject) {
    let shape = getShape(cell, boxObject);
    return 'CFM' === shape;
}

// -------------
// INPUT TEXT
// -------------

export function isInputText(cell: Cell, boxObject: BoxObject) {
    let shape = getShape(cell, boxObject);
    return 'ITX' === shape || !shape;
}

// -------------
// INPUT EDITOR
// -------------

export function isEditor(cell: Cell, boxObject: BoxObject) {
    let shape = getShape(cell, boxObject);
    return 'EDT' === shape;
}

// -------------
// FORMATTING
// -----

export function formatToNumber(cell: Cell): number {
    if (cell.obj) {
        return numeral(cell.obj.k).value();
    }

    return numeral(cell.value).value();
}

export function formatToMomentDate(cell: Cell): any {
    let format = 'YYYYMMDD';

    if (cell.obj) {
        const obj = cell.obj;

        if ('D8' === obj.t && '*DMYY' === obj.p) {
            format = 'DDMMYYYY';
        }

        return moment(cell.obj.k, format);
    }

    return moment(cell.value, 'DD/MM/YYYY');
}

/** unformat string date DD/MM/YYYY; return Date object */
export function unformatDate(value: string): Date {
    value = value.replace(/\//g, '');
    let format = 'DDMMYYYY';

    return moment(value, format).toDate();
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
