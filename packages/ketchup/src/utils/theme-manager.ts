import { logMessage } from './debug-manager';

declare global {
    interface HTMLElement {
        'kup-theme': any;
        kupCurrentTheme: any;
        kupThemes: any;
    }
}

const dom = document.documentElement;
const kupThemes = JSON.parse(`{
    "dark": {
        "cssVariables": {
            "--kup-background-color": "#2d2d2d",
            "--kup-header-background-color": "#2d2d2d",
            "--kup-drawer-background-color": "#1f1f1f",
            "--kup-main-color": "#82f0e2",
            "--kup-display-mode": "block",
            "--kup-font-family": "Lato, sans-serif",
            "--kup-font-size": "14px",
            "--kup-text-on-main-color": "#555555",
            "--kup-text-color": "#f5f5f5",
            "--kup-icon-color": "#e0e0e0",
            "--kup-hover-background-color": "#3c3c3c",
            "--kup-hover-color": "#dddddd",
            "--kup-border-color": "#535353",
            "--kup-disabled-text-color": "#7e7e7e",
            "--kup-disabled-background-color": "#3c3c3c",
            "--kup-field-background-color": "#2a2a2a",
            "--kup-chip-background-color": "#222222",
            "--kup-spinner-color": "#f2e114",
            "--kup-title-background-color": "#111111",
            "--kup-chart-color-1": "#60c3fc",
            "--kup-chart-color-2": "#e268d8",
            "--kup-chart-color-3": "#860bb5",
            "--kup-chart-color-4": "#1a83e4"
        }
    },
    "default": {
        "cssVariables": {
            "--kup-background-color": "#ffffff",
            "--kup-header-background-color": "#2e2e2e",
            "--kup-drawer-background-color": "#ffffff",
            "--kup-main-color": "#d64325",
            "--kup-display-mode": "block",
            "--kup-font-family": "Roboto, sans-serif",
            "--kup-font-size": "14px",
            "--kup-text-on-main-color": "#ffffff",
            "--kup-text-color": "#2e2e2e",
            "--kup-icon-color": "#505050",
            "--kup-hover-background-color": "#f0f0f0",
            "--kup-hover-color": "#545454",
            "--kup-border-color": "#e0e0e0",
            "--kup-disabled-text-color": "#5c5c5c",
            "--kup-disabled-background-color": "#eaeaea",
            "--kup-field-background-color": "#fafafa",
            "--kup-chip-background-color": "#eaeaea",
            "--kup-spinner-color": "#eaa710",
            "--kup-title-background-color": "#f1f3f4",
            "--kup-chart-color-1": "#ff5959",
            "--kup-chart-color-2": "#e0a0a0",
            "--kup-chart-color-3": "#8e1010",
            "--kup-chart-color-4": "#f5f5dc"
        }
    },
    "graphite": {
        "cssVariables": {
            "--kup-background-color": "#ffffff",
            "--kup-header-background-color": "#535353",
            "--kup-drawer-background-color": "#ffffff",
            "--kup-main-color": "#888888",
            "--kup-display-mode": "block",
            "--kup-font-family": "Roboto, sans-serif",
            "--kup-font-size": "13px",
            "--kup-text-on-main-color": "#ffffff",
            "--kup-text-color": "#545454",
            "--kup-icon-color": "#808080",
            "--kup-hover-background-color": "#f0f0f0",
            "--kup-hover-color": "#545454",
            "--kup-border-color": "#e0e0e0",
            "--kup-disabled-text-color": "#5c5c5c",
            "--kup-disabled-background-color": "#eaeaea",
            "--kup-field-background-color": "#fafafa",
            "--kup-chip-background-color": "#eaeaea",
            "--kup-spinner-color": "#eaa710",
            "--kup-title-background-color": "#f0f0f0",
            "--kup-chart-color-1": "red",
            "--kup-chart-color-2": "blue",
            "--kup-chart-color-3": "orange",
            "--kup-chart-color-4": "green",
            "--kup-chart-color-5": "yellow",
            "--kup-chart-color-6": "cyan",
            "--kup-chart-color-7": "brown",
            "--kup-chart-color-8": "magenta",
            "--kup-chart-color-9": "grey",
            "--kup-chart-color-10": "indigo"
        },
        "customStyles": {
            "KUP-BUTTON": "#kup-component button { text-transform: unset; }"
        }
    },
    "IBMh2o": {
        "cssVariables": {
            "--kup-background-color": "#000000",
            "--kup-header-background-color": "#000000",
            "--kup-drawer-background-color": "#000000",
            "--kup-main-color": "rgb(187, 198, 5)",
            "--kup-display-mode": "block",
            "--kup-font-family": "'Rajdhani', sans-serif",
            "--kup-font-size": "15px",
            "--kup-text-on-main-color": "#000000",
            "--kup-text-color": "#ffffff",
            "--kup-icon-color": "#9d9d9d",
            "--kup-hover-background-color": "#404040",
            "--kup-hover-color": "#ffffff",
            "--kup-border-color": "#9d9d9d",
            "--kup-disabled-text-color": "#7b7b7b",
            "--kup-disabled-background-color": "#151515",
            "--kup-field-background-color": "transparent",
            "--kup-chip-background-color": "#222222",
            "--kup-spinner-color": "#ffe600",
            "--kup-title-background-color": "#111111",
            "--kup-chart-color-1": "#ffffff",
            "--kup-chart-color-2": "rgb(187, 198, 5)",
            "--kup-chart-color-3": "#ffe600",
            "--kup-chart-color-4": "#effd02"
        }
    },
    "ocean": {
        "cssVariables": {
            "--kup-background-color": "#e9f1ff",
            "--kup-header-background-color": "#001d3e",
            "--kup-drawer-background-color": "#e6f1ff",
            "--kup-main-color": "#0081c5",
            "--kup-display-mode": "block",
            "--kup-font-family": "Lato, sans-serif",
            "--kup-font-size": "16px",
            "--kup-text-on-main-color": "#ffffff",
            "--kup-text-color": "#1b1b1b",
            "--kup-icon-color": "#505050",
            "--kup-hover-background-color": "#cfe8ff",
            "--kup-hover-color": "#545454",
            "--kup-border-color": "#e0e0e0",
            "--kup-disabled-text-color": "#5c5c5c",
            "--kup-disabled-background-color": "#eaeaea",
            "--kup-field-background-color": "#dce9ff",
            "--kup-chip-background-color": "#eaeaea",
            "--kup-spinner-color": "#eaa710",
            "--kup-title-background-color": "#f1f3f4",
            "--kup-chart-color-1": "#60c3fc",
            "--kup-chart-color-2": "#e268d8",
            "--kup-chart-color-3": "#e48b47",
            "--kup-chart-color-4": "#81e447"
        }
    },
    "wildlife": {
        "cssVariables": {
            "--kup-background-color": "#f7fff6",
            "--kup-header-background-color": "#095a1f",
            "--kup-drawer-background-color": "#dbfbd5",
            "--kup-main-color": "#0fa918",
            "--kup-display-mode": "block",
            "--kup-font-family": "Roboto, sans-serif",
            "--kup-font-size": "16px",
            "--kup-text-on-main-color": "#ffffff",
            "--kup-text-color": "#000000",
            "--kup-icon-color": "#333333",
            "--kup-hover-background-color": "#63ab46",
            "--kup-hover-color": "#ffffff",
            "--kup-border-color": "#e0e0e0",
            "--kup-disabled-text-color": "#5c5c5c",
            "--kup-disabled-background-color": "#eaeaea",
            "--kup-field-background-color": "transparent",
            "--kup-chip-background-color": "#eaeaea",
            "--kup-spinner-color": "#eaa710",
            "--kup-title-background-color": "#f1f3f4",
            "--kup-chart-color-1": "#60c3fc",
            "--kup-chart-color-2": "#e268d8",
            "--kup-chart-color-3": "#e48b47",
            "--kup-chart-color-4": "#81e447"
        }
    },
    "test": {
        "cssVariables": {
            "--kup-background-color": "#ffffff",
            "--kup-header-background-color": "#f5f5f5",
            "--kup-drawer-background-color": "#ffffff",
            "--kup-main-color": "#d64325",
            "--kup-display-mode": "block",
            "--kup-font-family": "Roboto, sans-serif",
            "--kup-font-size": "14px",
            "--kup-text-on-main-color": "#ffffff",
            "--kup-text-color": "#2e2e2e",
            "--kup-icon-color": "#505050",
            "--kup-hover-background-color": "#f0f0f0",
            "--kup-hover-color": "#545454",
            "--kup-border-color": "#e0e0e0",
            "--kup-disabled-text-color": "#5c5c5c",
            "--kup-disabled-background-color": "#eaeaea",
            "--kup-field-background-color": "#fafafa",
            "--kup-chip-background-color": "#eaeaea",
            "--kup-spinner-color": "#eaa710",
            "--kup-title-background-color": "#f1f3f4",
            "--kup-chart-color-1": "#60c3fc",
            "--kup-chart-color-2": "#e268d8",
            "--kup-chart-color-3": "#e48b47",
            "--kup-chart-color-4": "#81e447"
        },
        "customStyles": {
            "master": "#kup-component { background-color: red; }",
            "KUP-AUTOCOMPLETE": "#kup-component { border: 1px solid var(--kup-border-color); }",
            "KUP-BADGE": "#kup-component { border: 1px solid var(--kup-border-color); }",
            "KUP-BUTTON": "#kup-component { border: 1px solid var(--kup-border-color); }",
            "KUP-BOX": "#kup-component { border: 1px solid var(--kup-border-color); }",
            "KUP-CARD": "#kup-component { border: 1px solid var(--kup-border-color); }",
            "KUP-CHECKBOX": "#kup-component { border: 1px solid var(--kup-border-color); }",
            "KUP-CHIP": "#kup-component { border: 1px solid var(--kup-border-color); }",
            "KUP-COMBOBOX": "#kup-component { border: 1px solid var(--kup-border-color); }",
            "KUP-FIELD": "#kup-component { border: 1px solid var(--kup-border-color); }",
            "KUP-GRID": "#kup-component { border: 1px solid var(--kup-border-color); }",
            "KUP-IMAGE": "#kup-component { border: 1px solid var(--kup-border-color); }",
            "KUP-LAZY": "#kup-component { border: 1px solid var(--kup-border-color); }",
            "KUP-LIST": "#kup-component { border: 1px solid var(--kup-border-color); }",
            "KUP-NAV-BAR": "#kup-component { border: 1px solid var(--kup-border-color); }",
            "KUP-PROGRESS-BAR": "#kup-component { border: 1px solid var(--kup-border-color); }",
            "KUP-RADIO": "#kup-component { border: 1px solid var(--kup-border-color); }",
            "KUP-SPINNER": "#kup-component { border: 1px solid var(--kup-border-color); }",
            "KUP-SWITCH": "#kup-component { border: 1px solid var(--kup-border-color); }",
            "KUP-TAB-BAR": "#kup-component { border: 1px solid var(--kup-border-color); }",
            "KUP-TEXT-FIELD": "#kup-component { border: 1px solid var(--kup-border-color); }",
            "KUP-TREE": "#kup-component { border: 1px solid var(--kup-border-color); }"
        }
    }
}`);

async function initThemes() {
    if (dom.kupCurrentTheme) {
        //In case multiple initializing instances are launched
        return;
    }
    if (!dom.kupThemes) {
        dom['kupThemes'] = kupThemes;
    } else {
        let message =
            'Ketchup themes were already set by a third party application.';
        logMessage('theme manager', message);
    }
    if (!dom.getAttribute('kup-theme')) {
        dom.setAttribute('kup-theme', 'default');
    }
    setTheme();

    const observer = new MutationObserver(function () {
        setTheme();
    });
    let container = dom || document.body;
    observer.observe(container, {
        attributes: true,
        attributeFilter: ['kup-theme'],
    });
}

function setTheme() {
    let message = '';
    let themeValue = dom.getAttribute('kup-theme');
    message = 'Setting theme to: ' + themeValue + '.';
    logMessage('theme manager', message);

    dom.kupCurrentTheme = dom.kupThemes[themeValue];
    if (!dom.kupCurrentTheme) {
        message = 'Invalid theme name, falling back to default.';
        logMessage('theme manager', message);
        dom.kupCurrentTheme = dom.kupThemes['default'];
    }
    let variables = dom.kupCurrentTheme.cssVariables;
    for (var key in variables) {
        if (variables.hasOwnProperty(key)) {
            var val = variables[key];
            dom.style.setProperty(key, val);
        }
    }
    var event = new CustomEvent('kupThemeChanged');
    document.dispatchEvent(event);
    let components: any = document.querySelectorAll('.handles-custom-style');
    for (let i = 0; i < components.length; i++) {
        components[i].refreshCustomStyle(
            fetchThemeCustomStyle('master') +
                fetchThemeCustomStyle(components[i].tagName)
        );
    }
}

export function fetchThemeCustomStyle(component: string) {
    let styles = dom.kupCurrentTheme.customStyles;
    if (!styles) {
        return undefined;
    }
    let completeStyle: string = undefined;

    if (styles['master']) {
        completeStyle = styles['master'];
    }

    if (styles[component]) {
        if (completeStyle) {
            completeStyle += styles[component];
        } else {
            completeStyle = styles[component];
        }
    }

    return completeStyle;
}

export function setThemeCustomStyle(component: any) {
    if (!dom.kupCurrentTheme) {
        initThemes();
    }
    component.customStyleTheme = fetchThemeCustomStyle(
        component.rootElement.tagName
    );
}

export function setCustomStyle(component: any) {
    if (component.customStyleTheme) {
        if (component.customStyle) {
            return component.customStyleTheme + '' + component.customStyle;
        } else {
            return component.customStyleTheme;
        }
    } else if (component.customStyle) {
        return component.customStyle;
    } else {
        return undefined;
    }
}

export function colorContrast(color: string) {
    color = colorCheck(color);
    const colorValues = color.replace(/[^\d,.]/g, '').split(',');
    const brightness = Math.round(
        (parseInt(colorValues[0]) * 299 +
            parseInt(colorValues[1]) * 587 +
            parseInt(colorValues[2]) * 114) /
            1000
    );
    const textColor = brightness > 125 ? 'black' : 'white';
    return textColor;
}

export function randomColor(brightness: number) {
    function randomChannel(brightness: number) {
        var r = 255 - brightness;
        var n = 0 | (Math.random() * r + brightness);
        var s = n.toString(16);
        return s.length == 1 ? '0' + s : s;
    }
    return (
        '#' +
        randomChannel(brightness) +
        randomChannel(brightness) +
        randomChannel(brightness)
    );
}

export function colorCheck(color: string) {
    //Testing whether the color isn't "rgb" nor "hex" value, supposedly is a code word
    if (color.substr(0, 1) !== '#' && color.substr(0, 3) !== 'rgb') {
        let oldColor = color;
        color = codeToHex(color);
        logMessage(
            'theme manager',
            'Received CODE NAME color ' +
                oldColor +
                ', converted to ' +
                color +
                '.'
        );
    }

    //Testing whether the color is "hex" value
    if (color.substr(0, 1) === '#') {
        let oldColor = color;
        let rgbColor = hexToRgb(color);
        color = 'rgb(' + rgbColor.r + ',' + rgbColor.g + ',' + rgbColor.b + ')';
        logMessage(
            'theme manager',
            'Received HEX color ' + oldColor + ', converted to ' + color + '.'
        );
    }

    return color;
}

export function hexToRgb(hex: string) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16),
          }
        : null;
}

export function codeToHex(color: string) {
    const colorCodes = {
        aliceblue: '#f0f8ff',
        antiquewhite: '#faebd7',
        aqua: '#00ffff',
        aquamarine: '#7fffd4',
        azure: '#f0ffff',
        beige: '#f5f5dc',
        bisque: '#ffe4c4',
        black: '#000000',
        blanchedalmond: '#ffebcd',
        blue: '#0000ff',
        blueviolet: '#8a2be2',
        brown: '#a52a2a',
        burlywood: '#deb887',
        cadetblue: '#5f9ea0',
        chartreuse: '#7fff00',
        chocolate: '#d2691e',
        coral: '#ff7f50',
        cornflowerblue: '#6495ed',
        cornsilk: '#fff8dc',
        crimson: '#dc143c',
        cyan: '#00ffff',
        darkblue: '#00008b',
        darkcyan: '#008b8b',
        darkgoldenrod: '#b8860b',
        darkgray: '#a9a9a9',
        darkgreen: '#006400',
        darkgrey: '#a9a9a9',
        darkkhaki: '#bdb76b',
        darkmagenta: '#8b008b',
        darkolivegreen: '#556b2f',
        darkorange: '#ff8c00',
        darkorchid: '#9932cc',
        darkred: '#8b0000',
        darksalmon: '#e9967a',
        darkseagreen: '#8fbc8f',
        darkslateblue: '#483d8b',
        darkslategray: '#2f4f4f',
        darkslategrey: '#2f4f4f',
        darkturquoise: '#00ced1',
        darkviolet: '#9400d3',
        deeppink: '#ff1493',
        deepskyblue: '#00bfff',
        dimgray: '#696969',
        dimgrey: '#696969',
        dodgerblue: '#1e90ff',
        firebrick: '#b22222',
        floralwhite: '#fffaf0',
        forestgreen: '#228b22',
        fuchsia: '#ff00ff',
        gainsboro: '#dcdcdc',
        ghostwhite: '#f8f8ff',
        goldenrod: '#daa520',
        gold: '#ffd700',
        gray: '#808080',
        green: '#008000',
        greenyellow: '#adff2f',
        grey: '#808080',
        honeydew: '#f0fff0',
        hotpink: '#ff69b4',
        indianred: '#cd5c5c',
        indigo: '#4b0082',
        ivory: '#fffff0',
        khaki: '#f0e68c',
        lavenderblush: '#fff0f5',
        lavender: '#e6e6fa',
        lawngreen: '#7cfc00',
        lemonchiffon: '#fffacd',
        lightblue: '#add8e6',
        lightcoral: '#f08080',
        lightcyan: '#e0ffff',
        lightgoldenrodyellow: '#fafad2',
        lightgray: '#d3d3d3',
        lightgreen: '#90ee90',
        lightgrey: '#d3d3d3',
        lightpink: '#ffb6c1',
        lightsalmon: '#ffa07a',
        lightseagreen: '#20b2aa',
        lightskyblue: '#87cefa',
        lightslategray: '#778899',
        lightslategrey: '#778899',
        lightsteelblue: '#b0c4de',
        lightyellow: '#ffffe0',
        lime: '#00ff00',
        limegreen: '#32cd32',
        linen: '#faf0e6',
        magenta: '#ff00ff',
        maroon: '#800000',
        mediumaquamarine: '#66cdaa',
        mediumblue: '#0000cd',
        mediumorchid: '#ba55d3',
        mediumpurple: '#9370db',
        mediumseagreen: '#3cb371',
        mediumslateblue: '#7b68ee',
        mediumspringgreen: '#00fa9a',
        mediumturquoise: '#48d1cc',
        mediumvioletred: '#c71585',
        midnightblue: '#191970',
        mintcream: '#f5fffa',
        mistyrose: '#ffe4e1',
        moccasin: '#ffe4b5',
        navajowhite: '#ffdead',
        navy: '#000080',
        oldlace: '#fdf5e6',
        olive: '#808000',
        olivedrab: '#6b8e23',
        orange: '#ffa500',
        orangered: '#ff4500',
        orchid: '#da70d6',
        palegoldenrod: '#eee8aa',
        palegreen: '#98fb98',
        paleturquoise: '#afeeee',
        palevioletred: '#db7093',
        papayawhip: '#ffefd5',
        peachpuff: '#ffdab9',
        peru: '#cd853f',
        pink: '#ffc0cb',
        plum: '#dda0dd',
        powderblue: '#b0e0e6',
        purple: '#800080',
        rebeccapurple: '#663399',
        red: '#ff0000',
        rosybrown: '#bc8f8f',
        royalblue: '#4169e1',
        saddlebrown: '#8b4513',
        salmon: '#fa8072',
        sandybrown: '#f4a460',
        seagreen: '#2e8b57',
        seashell: '#fff5ee',
        sienna: '#a0522d',
        silver: '#c0c0c0',
        skyblue: '#87ceeb',
        slateblue: '#6a5acd',
        slategray: '#708090',
        slategrey: '#708090',
        snow: '#fffafa',
        springgreen: '#00ff7f',
        steelblue: '#4682b4',
        tan: '#d2b48c',
        teal: '#008080',
        thistle: '#d8bfd8',
        tomato: '#ff6347',
        turquoise: '#40e0d0',
        violet: '#ee82ee',
        wheat: '#f5deb3',
        white: '#ffffff',
        whitesmoke: '#f5f5f5',
        yellow: '#ffff00',
        yellowgreen: '#9acd32',
    };
    if (colorCodes[color.toLowerCase()]) {
        return colorCodes[color.toLowerCase()];
    } else {
        logMessage(
            'theme manager',
            'Could not decode color ' + color + '!',
            'warning'
        );
        return color;
    }
}
