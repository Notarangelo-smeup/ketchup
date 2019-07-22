/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  Column,
  DataTable,
  GenericMap,
  GroupObject,
  PaginatorPos,
  Row as Row1,
  RowAction,
  ShowGrid,
  SortObject,
  TotalsMap,
} from './components/kup-data-table/kup-data-table-declarations';
import {
  Layout,
  Row,
} from './components/kup-box/kup-box-declarations';
import {
  ButtonConfig,
} from './components/kup-btn/kup-btn-declarations';
import {
  ChartAspect,
  ChartType,
} from './components/kup-chart/kup-chart-declarations';
import {
  ComboItem,
  KetchupComboEvent,
} from './components/kup-combo/kup-combo-declarations';
import {
  GenericObject,
} from './types/GenericTypes';
import {
  KetchupFldChangeEvent,
  KetchupFldSubmitEvent,
} from './components/kup-fld/kup-fld-declarations';
import {
  Badge,
} from './components/kup-image/kup-image-declarations';
import {
  JSX,
} from '@stencil/core';
import {
  ElementOffset,
} from './utils/offset';
import {
  KetchupRadioChangeEvent,
  KetchupRadioElement,
} from './components/kup-radio/kup-radio-declarations';
import {
  KetchupTextInputEvent,
} from './components/kup-text-input/kup-text-input-declarations';

export namespace Components {
  interface KupBox {
    /**
    * Number of columns
    */
    'columns': number;
    /**
    * Data
    */
    'data': { columns?: Column[]; rows?: Row[] };
    /**
    * Enable filtering
    */
    'filterEnabled': boolean;
    /**
    * How the field will be displayed. If not present, a default one will be created.
    */
    'layout': Layout;
    /**
    * Enable multi selection
    */
    'multiSelection': boolean;
    /**
    * If sorting is enabled, specifies which column to sort
    */
    'sortBy': string;
    /**
    * Enable sorting
    */
    'sortEnabled': boolean;
  }
  interface KupBtn {
    'buttons': any[];
    'config': ButtonConfig;
  }
  interface KupButton {
    'align': string;
    'buttonClass': string;
    'fillspace': boolean;
    'flat': boolean;
    'iconClass': string;
    'iconUrl': string;
    'label': string;
    'rounded': boolean;
    'showicon': boolean;
    'showtext': boolean;
    'textmode': string;
    'transparent': boolean;
  }
  interface KupChart {
    'asp': ChartAspect;
    'axis': string;
    'colors': string[];
    'data': DataTable;
    'graphTitle': string;
    'graphTitleColor': string;
    'graphTitleSize': number;
    'height': number;
    'legend': boolean;
    'series': string[];
    'stacked': boolean;
    'type': ChartType;
    'width': number;
  }
  interface KupChip {
    'closable': boolean;
    'disabled': boolean;
  }
  interface KupCombo {
    /**
    * Programmatically close the combo box
    */
    'closeCombo': () => Promise<void>;
    /**
    * Chooses which field of an item object should be used to create the list and be filtered.
    */
    'displayedField': string;
    /**
    * Allows to pass an initial selected item for the combobox
    */
    'initialValue': ComboItem | null;
    /**
    * Marks the field as clearable, allowing an icon to delete its content
    */
    'isClearable': boolean;
    /**
    * Items which can be selected
    */
    'items': ComboItem[];
    /**
    * Label to describe the radio group
    */
    'label': string;
    /**
    * An arbitrary object object which can be passed to the component. It will be returned when ketchupComboSelected event is fired, inside detail.info.obj
    */
    'obj'?: GenericObject;
    /**
    * Programmatically opens the combo box
    */
    'openCombo': () => Promise<void>;
    /**
    * If true, the combobox uses a Stencil portal to create the menu. Please use this feature carefully, only if needed.
    */
    'usePortal': boolean;
    /**
    * Chooses which field of an item object should be used to create the list and be filtered.
    */
    'valueField': string;
  }
  interface KupDash {
    'fontsize': string;
    'layout': string;
  }
  interface KupDataTable {
    'columnsWidth': Array<{
      column: string;
      width: number;
    }>;
    'data': { columns?: Array<Column>; rows?: Array<Row> };
    'expandGroups': boolean;
    'filters': GenericMap;
    'globalFilter': boolean;
    'groups': Array<GroupObject>;
    /**
    * If table header is visible and this prop is set to true, the header will be visible while scrolling the table. To make this work, it must be configured together with the data-table CSS property --kup-data-table_header-offset. It uses CSS position: sticky.
    */
    'headerIsPersistent': boolean;
    'multiSelection': boolean;
    'paginatorPos': PaginatorPos;
    'rowActions': Array<RowAction>;
    'rowsPerPage': number;
    'selectRow': number;
    'showFilters': boolean;
    'showGrid': ShowGrid;
    /**
    * Enables rendering of the table header.
    */
    'showHeader': boolean;
    'sort': Array<SortObject>;
    'sortEnabled': boolean;
    'totals': TotalsMap;
  }
  interface KupFld {
    /**
    * Data the FLD must parse to fully be configured. It must be either an Object or a JSON parsable string
    */
    'config': string | object;
    /**
    * Effective data to pass to the component
    */
    'data': any;
    /**
    * Provides an interface to get the current value programmatically
    */
    'getCurrentValue': () => Promise<string | object>;
  }
  interface KupGauge {
    /**
    * Sets how much the arc of the gauge should be thick.
    */
    'arcThickness': number;
    /**
    * Array of three elements to specify the color of the arcs.
    */
    'colors': string[];
    /**
    * The first threshold, establishing the length of the first and second arc.
    */
    'firstThreshold'?: number;
    /**
    * The distance the label and the value has from the gauge graph.
    */
    'labelDistance': number;
    /**
    * The maximum value reachable in the current graph.
    */
    'maxValue': number;
    /**
    * A string which will be appended to the displayed values of the component.
    */
    'measurementUnit': string;
    /**
    * The minimum value reachable in the current graph.
    */
    'minValue': number;
    /**
    * if true, shows a rounded needle.
    */
    'needleCircle': boolean;
    /**
    * if true, ignore threasholds in gauge and show colored value's arc.
    */
    'onlyValue': boolean;
    /**
    * If set to true, the colors inside the colors array are used in the reversed order.
    */
    'reverseColors': boolean;
    /**
    * The second threshold, establishing the length of the second and third arc.
    */
    'secondThreshold'?: number;
    /**
    * If set to false, threshold values of the gauge are not displayed.
    */
    'showLabels': boolean;
    /**
    * If set to false, the maximum and minimum values of the gauge are not displayed.
    */
    'showMaxmin': boolean;
    /**
    * If set to false, the current value of the gauge is not displayed.
    */
    'showValue': boolean;
    /**
    * Con be used change the viewbox of the SVG. By manipulating this value, some customizations of the aspect of the gauge is achievable.
    */
    'size': number;
    /**
    * The current value of the gauge. The gauge's needle points to the percentage based on this prop.
    */
    'value': number;
    /**
    * The current size of gauge's value. Correct values are: 0,1,2 or 3.
    */
    'valueSize': number;
    /**
    * Set Width gauge.
    */
    'widthComponent': string;
  }
  interface KupGraphicCell {
    'height': number;
    'value': string;
    'width': number;
  }
  interface KupHtml {
    /**
    * If true, the kup-html takes the shape of a button
    */
    'isButton': boolean;
    /**
    * The label to show when button isButton is active
    */
    'label': string;
    /**
    * The address which must be referenced by the iframe
    */
    'src': string;
  }
  interface KupImage {
    'alt': string;
    'badges': Badge[];
    'height': number;
    'src': string;
    'width': number;
  }
  interface KupPaginator {
    'currentPage': number;
    'max': number;
    'perPage': number;
    'selectedPerPage': number;
  }
  interface KupPortal {
    /**
    * Returns the root node instance of the KetchupPortalInstance element
    */
    'getPortalInstance': () => Promise<HTMLElement>;
    /**
    * Tells the portal instance if it can be visible or not
    */
    'isVisible': boolean;
    /**
    * Array of custom css vars which needs to be mirrored. Their value is computed from cssVarsRef
    */
    'mirroredCssVars': string[];
    /**
    * Virtual node list the KetchupPortalInstance must render
    */
    'nodes': JSX.Element[] | JSX.Element;
    /**
    * Reference to the html element which is using the portal. It must be a root of a web component.
    */
    'portalParentRef': HTMLElement;
    /**
    * The HTML element on which the virtual node must be appended
    */
    'portalRootNode': HTMLElement;
    /**
    * Calculated offset of where the portal must be positioned
    */
    'refOffset': ElementOffset;
    /**
    * A style node to be copied into the KetchupPortalInstance
    */
    'styleNode': HTMLStyleElement | null;
  }
  interface KupPortalInstance {
    'additionalAdoptedStyleSheets': CSSStyleSheet[];
    /**
    * Specifies if the current portal instance should be displayed or not.
    */
    'isVisible': boolean;
    /**
    * A style node to be copied into the KetchupPortalInstance
    */
    'styleNode': HTMLStyleElement;
    /**
    * Virtual node list the KetchupPortalInstance must render
    */
    'vNodes'?: JSX.Element[] | JSX.Element;
  }
  interface KupProgressBar {
    'label': string;
    'value': number;
  }
  interface KupRadio {
    /**
    * Direction in which the radio elements must be placed
    */
    'direction': string;
    /**
    * Chooses which field of an item object should be used to create the list and be filtered.
    */
    'displayedField': string;
    /**
    * Allows to pass an initial selected item for the Radio group
    */
    'initialValue': KetchupRadioElement;
    /**
    * Radio elements to display
    */
    'items': KetchupRadioElement[];
    /**
    * Label to describe the radio group
    */
    'label': string;
    /**
    * Radio elements value
    */
    'radioName': string;
    /**
    * Chooses which field of an item object should be used to create the list and be filtered.
    */
    'valueField': string;
  }
  interface KupTextInput {
    /**
    * Set the amount of time, in milliseconds, to wait to trigger the `ketchupTextInputUpdated` event after each keystroke.
    */
    'debounce': number;
    /**
    * Marks the field as clearable, allowing an icon to delete its content
    */
    'initialValue': string;
    /**
    * Specify the type of input. Allowed values: password, text.
    */
    'inputType': string;
    /**
    * Marks the field as clearable, allowing an icon to delete its content
    */
    'isClearable': boolean;
    /**
    * Label to describe the text-input clear button group
    */
    'label': string;
    /**
    * The max length of the text field. Default value copied from here: https://www.w3schools.com/tags/att_input_maxlength.asp
    */
    'maxLength': number;
    /**
    * A generic object which can be passed to the component. Once this object is set, it will always be returned inside the info field of the ketchupTextInputUpdated and ketchupTextInputSubmit.
    */
    'obj'?: GenericObject;
    /**
    * text for input placeholder
    */
    'placeholder': string;
    /**
    * Triggers the focus event on the input text
    */
    'triggerFocus': () => Promise<void>;
  }
}

declare global {


  interface HTMLKupBoxElement extends Components.KupBox, HTMLStencilElement {}
  var HTMLKupBoxElement: {
    prototype: HTMLKupBoxElement;
    new (): HTMLKupBoxElement;
  };

  interface HTMLKupBtnElement extends Components.KupBtn, HTMLStencilElement {}
  var HTMLKupBtnElement: {
    prototype: HTMLKupBtnElement;
    new (): HTMLKupBtnElement;
  };

  interface HTMLKupButtonElement extends Components.KupButton, HTMLStencilElement {}
  var HTMLKupButtonElement: {
    prototype: HTMLKupButtonElement;
    new (): HTMLKupButtonElement;
  };

  interface HTMLKupChartElement extends Components.KupChart, HTMLStencilElement {}
  var HTMLKupChartElement: {
    prototype: HTMLKupChartElement;
    new (): HTMLKupChartElement;
  };

  interface HTMLKupChipElement extends Components.KupChip, HTMLStencilElement {}
  var HTMLKupChipElement: {
    prototype: HTMLKupChipElement;
    new (): HTMLKupChipElement;
  };

  interface HTMLKupComboElement extends Components.KupCombo, HTMLStencilElement {}
  var HTMLKupComboElement: {
    prototype: HTMLKupComboElement;
    new (): HTMLKupComboElement;
  };

  interface HTMLKupDashElement extends Components.KupDash, HTMLStencilElement {}
  var HTMLKupDashElement: {
    prototype: HTMLKupDashElement;
    new (): HTMLKupDashElement;
  };

  interface HTMLKupDataTableElement extends Components.KupDataTable, HTMLStencilElement {}
  var HTMLKupDataTableElement: {
    prototype: HTMLKupDataTableElement;
    new (): HTMLKupDataTableElement;
  };

  interface HTMLKupFldElement extends Components.KupFld, HTMLStencilElement {}
  var HTMLKupFldElement: {
    prototype: HTMLKupFldElement;
    new (): HTMLKupFldElement;
  };

  interface HTMLKupGaugeElement extends Components.KupGauge, HTMLStencilElement {}
  var HTMLKupGaugeElement: {
    prototype: HTMLKupGaugeElement;
    new (): HTMLKupGaugeElement;
  };

  interface HTMLKupGraphicCellElement extends Components.KupGraphicCell, HTMLStencilElement {}
  var HTMLKupGraphicCellElement: {
    prototype: HTMLKupGraphicCellElement;
    new (): HTMLKupGraphicCellElement;
  };

  interface HTMLKupHtmlElement extends Components.KupHtml, HTMLStencilElement {}
  var HTMLKupHtmlElement: {
    prototype: HTMLKupHtmlElement;
    new (): HTMLKupHtmlElement;
  };

  interface HTMLKupImageElement extends Components.KupImage, HTMLStencilElement {}
  var HTMLKupImageElement: {
    prototype: HTMLKupImageElement;
    new (): HTMLKupImageElement;
  };

  interface HTMLKupPaginatorElement extends Components.KupPaginator, HTMLStencilElement {}
  var HTMLKupPaginatorElement: {
    prototype: HTMLKupPaginatorElement;
    new (): HTMLKupPaginatorElement;
  };

  interface HTMLKupPortalElement extends Components.KupPortal, HTMLStencilElement {}
  var HTMLKupPortalElement: {
    prototype: HTMLKupPortalElement;
    new (): HTMLKupPortalElement;
  };

  interface HTMLKupPortalInstanceElement extends Components.KupPortalInstance, HTMLStencilElement {}
  var HTMLKupPortalInstanceElement: {
    prototype: HTMLKupPortalInstanceElement;
    new (): HTMLKupPortalInstanceElement;
  };

  interface HTMLKupProgressBarElement extends Components.KupProgressBar, HTMLStencilElement {}
  var HTMLKupProgressBarElement: {
    prototype: HTMLKupProgressBarElement;
    new (): HTMLKupProgressBarElement;
  };

  interface HTMLKupRadioElement extends Components.KupRadio, HTMLStencilElement {}
  var HTMLKupRadioElement: {
    prototype: HTMLKupRadioElement;
    new (): HTMLKupRadioElement;
  };

  interface HTMLKupTextInputElement extends Components.KupTextInput, HTMLStencilElement {}
  var HTMLKupTextInputElement: {
    prototype: HTMLKupTextInputElement;
    new (): HTMLKupTextInputElement;
  };
  interface HTMLElementTagNameMap {
    'kup-box': HTMLKupBoxElement;
    'kup-btn': HTMLKupBtnElement;
    'kup-button': HTMLKupButtonElement;
    'kup-chart': HTMLKupChartElement;
    'kup-chip': HTMLKupChipElement;
    'kup-combo': HTMLKupComboElement;
    'kup-dash': HTMLKupDashElement;
    'kup-data-table': HTMLKupDataTableElement;
    'kup-fld': HTMLKupFldElement;
    'kup-gauge': HTMLKupGaugeElement;
    'kup-graphic-cell': HTMLKupGraphicCellElement;
    'kup-html': HTMLKupHtmlElement;
    'kup-image': HTMLKupImageElement;
    'kup-paginator': HTMLKupPaginatorElement;
    'kup-portal': HTMLKupPortalElement;
    'kup-portal-instance': HTMLKupPortalInstanceElement;
    'kup-progress-bar': HTMLKupProgressBarElement;
    'kup-radio': HTMLKupRadioElement;
    'kup-text-input': HTMLKupTextInputElement;
  }
}

declare namespace LocalJSX {
  interface KupBox extends JSXBase.HTMLAttributes<HTMLKupBoxElement> {
    /**
    * Number of columns
    */
    'columns'?: number;
    /**
    * Data
    */
    'data'?: { columns?: Column[]; rows?: Row[] };
    /**
    * Enable filtering
    */
    'filterEnabled'?: boolean;
    /**
    * How the field will be displayed. If not present, a default one will be created.
    */
    'layout'?: Layout;
    /**
    * Enable multi selection
    */
    'multiSelection'?: boolean;
    /**
    * Lauched when a box is clicked
    */
    'onKupBoxClicked'?: (event: CustomEvent<{
      row: Row;
      column?: string;
    }>) => void;
    /**
    * Lauched when the multi selection checkbox changes value
    */
    'onKupBoxSelected'?: (event: CustomEvent<{
      rows: Row[];
    }>) => void;
    /**
    * If sorting is enabled, specifies which column to sort
    */
    'sortBy'?: string;
    /**
    * Enable sorting
    */
    'sortEnabled'?: boolean;
  }
  interface KupBtn extends JSXBase.HTMLAttributes<HTMLKupBtnElement> {
    'buttons'?: any[];
    'config'?: ButtonConfig;
  }
  interface KupButton extends JSXBase.HTMLAttributes<HTMLKupButtonElement> {
    'align'?: string;
    'buttonClass'?: string;
    'fillspace'?: boolean;
    'flat'?: boolean;
    'iconClass'?: string;
    'iconUrl'?: string;
    'label'?: string;
    'onKupButtonClicked'?: (event: CustomEvent<{
      id: string;
    }>) => void;
    'rounded'?: boolean;
    'showicon'?: boolean;
    'showtext'?: boolean;
    'textmode'?: string;
    'transparent'?: boolean;
  }
  interface KupChart extends JSXBase.HTMLAttributes<HTMLKupChartElement> {
    'asp'?: ChartAspect;
    'axis'?: string;
    'colors'?: string[];
    'data'?: DataTable;
    'graphTitle'?: string;
    'graphTitleColor'?: string;
    'graphTitleSize'?: number;
    'height'?: number;
    'legend'?: boolean;
    'series'?: string[];
    'stacked'?: boolean;
    'type'?: ChartType;
    'width'?: number;
  }
  interface KupChip extends JSXBase.HTMLAttributes<HTMLKupChipElement> {
    'closable'?: boolean;
    'disabled'?: boolean;
    'onClose'?: (event: CustomEvent<any>) => void;
  }
  interface KupCombo extends JSXBase.HTMLAttributes<HTMLKupComboElement> {
    /**
    * Chooses which field of an item object should be used to create the list and be filtered.
    */
    'displayedField'?: string;
    /**
    * Allows to pass an initial selected item for the combobox
    */
    'initialValue'?: ComboItem | null;
    /**
    * Marks the field as clearable, allowing an icon to delete its content
    */
    'isClearable'?: boolean;
    /**
    * Items which can be selected
    */
    'items'?: ComboItem[];
    /**
    * Label to describe the radio group
    */
    'label'?: string;
    /**
    * An arbitrary object object which can be passed to the component. It will be returned when ketchupComboSelected event is fired, inside detail.info.obj
    */
    'obj'?: GenericObject;
    /**
    * When an element has been selected
    */
    'onKetchupComboSelected'?: (event: CustomEvent<KetchupComboEvent>) => void;
    /**
    * If true, the combobox uses a Stencil portal to create the menu. Please use this feature carefully, only if needed.
    */
    'usePortal'?: boolean;
    /**
    * Chooses which field of an item object should be used to create the list and be filtered.
    */
    'valueField'?: string;
  }
  interface KupDash extends JSXBase.HTMLAttributes<HTMLKupDashElement> {
    'fontsize'?: string;
    'layout'?: string;
    'onKetchupDashClicked'?: (event: CustomEvent<{
    }>) => void;
  }
  interface KupDataTable extends JSXBase.HTMLAttributes<HTMLKupDataTableElement> {
    'columnsWidth'?: Array<{
      column: string;
      width: number;
    }>;
    'data'?: { columns?: Array<Column>; rows?: Array<Row> };
    'expandGroups'?: boolean;
    'filters'?: GenericMap;
    'globalFilter'?: boolean;
    'groups'?: Array<GroupObject>;
    /**
    * If table header is visible and this prop is set to true, the header will be visible while scrolling the table. To make this work, it must be configured together with the data-table CSS property --kup-data-table_header-offset. It uses CSS position: sticky.
    */
    'headerIsPersistent'?: boolean;
    'multiSelection'?: boolean;
    /**
    * When 'add column' menu item is clicked
    */
    'onKupAddColumn'?: (event: CustomEvent<{ column: string }>) => void;
    /**
    * When a row is auto selected via selectRow prop
    */
    'onKupAutoRowSelect'?: (event: CustomEvent<{
      selectedRow: Row;
    }>) => void;
    /**
    * When cell option is clicked
    */
    'onKupOptionClicked'?: (event: CustomEvent<{
      column: string;
      row: Row;
    }>) => void;
    /**
    * When a row action is clicked
    */
    'onKupRowActionClicked'?: (event: CustomEvent<{
      type: 'default' | 'variable' | 'expander';
      row: Row;
      action?: RowAction;
      index?: number;
    }>) => void;
    /**
    * When a row is selected
    */
    'onKupRowSelected'?: (event: CustomEvent<{
      selectedRows: Array<Row>;
      clickedColumn: string;
    }>) => void;
    'paginatorPos'?: PaginatorPos;
    'rowActions'?: Array<RowAction>;
    'rowsPerPage'?: number;
    'selectRow'?: number;
    'showFilters'?: boolean;
    'showGrid'?: ShowGrid;
    /**
    * Enables rendering of the table header.
    */
    'showHeader'?: boolean;
    'sort'?: Array<SortObject>;
    'sortEnabled'?: boolean;
    'totals'?: TotalsMap;
  }
  interface KupFld extends JSXBase.HTMLAttributes<HTMLKupFldElement> {
    /**
    * Data the FLD must parse to fully be configured. It must be either an Object or a JSON parsable string
    */
    'config'?: string | object;
    /**
    * Effective data to pass to the component
    */
    'data'?: any;
    /**
    * Launched when the value of the current FLD changes.
    */
    'onKetchupFldChanged'?: (event: CustomEvent<KetchupFldChangeEvent>) => void;
    /**
    * Launched when the FLD values are confirmed and a submit event is triggered.
    */
    'onKetchupFldSubmit'?: (event: CustomEvent<KetchupFldSubmitEvent>) => void;
  }
  interface KupGauge extends JSXBase.HTMLAttributes<HTMLKupGaugeElement> {
    /**
    * Sets how much the arc of the gauge should be thick.
    */
    'arcThickness'?: number;
    /**
    * Array of three elements to specify the color of the arcs.
    */
    'colors'?: string[];
    /**
    * The first threshold, establishing the length of the first and second arc.
    */
    'firstThreshold'?: number;
    /**
    * The distance the label and the value has from the gauge graph.
    */
    'labelDistance'?: number;
    /**
    * The maximum value reachable in the current graph.
    */
    'maxValue'?: number;
    /**
    * A string which will be appended to the displayed values of the component.
    */
    'measurementUnit'?: string;
    /**
    * The minimum value reachable in the current graph.
    */
    'minValue'?: number;
    /**
    * if true, shows a rounded needle.
    */
    'needleCircle'?: boolean;
    /**
    * if true, ignore threasholds in gauge and show colored value's arc.
    */
    'onlyValue'?: boolean;
    /**
    * If set to true, the colors inside the colors array are used in the reversed order.
    */
    'reverseColors'?: boolean;
    /**
    * The second threshold, establishing the length of the second and third arc.
    */
    'secondThreshold'?: number;
    /**
    * If set to false, threshold values of the gauge are not displayed.
    */
    'showLabels'?: boolean;
    /**
    * If set to false, the maximum and minimum values of the gauge are not displayed.
    */
    'showMaxmin'?: boolean;
    /**
    * If set to false, the current value of the gauge is not displayed.
    */
    'showValue'?: boolean;
    /**
    * Con be used change the viewbox of the SVG. By manipulating this value, some customizations of the aspect of the gauge is achievable.
    */
    'size'?: number;
    /**
    * The current value of the gauge. The gauge's needle points to the percentage based on this prop.
    */
    'value'?: number;
    /**
    * The current size of gauge's value. Correct values are: 0,1,2 or 3.
    */
    'valueSize'?: number;
    /**
    * Set Width gauge.
    */
    'widthComponent'?: string;
  }
  interface KupGraphicCell extends JSXBase.HTMLAttributes<HTMLKupGraphicCellElement> {
    'height'?: number;
    'value'?: string;
    'width'?: number;
  }
  interface KupHtml extends JSXBase.HTMLAttributes<HTMLKupHtmlElement> {
    /**
    * If true, the kup-html takes the shape of a button
    */
    'isButton'?: boolean;
    /**
    * The label to show when button isButton is active
    */
    'label'?: string;
    /**
    * When loading the frame has thrown an error
    */
    'onKetchupHtmlError'?: (event: CustomEvent<any>) => void;
    /**
    * When the iframe has been loaded
    */
    'onKetchupHtmlLoaded'?: (event: CustomEvent<any>) => void;
    /**
    * The address which must be referenced by the iframe
    */
    'src'?: string;
  }
  interface KupImage extends JSXBase.HTMLAttributes<HTMLKupImageElement> {
    'alt'?: string;
    'badges'?: Badge[];
    'height'?: number;
    'src'?: string;
    'width'?: number;
  }
  interface KupPaginator extends JSXBase.HTMLAttributes<HTMLKupPaginatorElement> {
    'currentPage'?: number;
    'max'?: number;
    /**
    * When the current page change
    */
    'onKupPageChanged'?: (event: CustomEvent<{ newPage: number }>) => void;
    /**
    * When the rows per page change
    */
    'onKupRowsPerPageChanged'?: (event: CustomEvent<{ newRowsPerPage: number }>) => void;
    'perPage'?: number;
    'selectedPerPage'?: number;
  }
  interface KupPortal extends JSXBase.HTMLAttributes<HTMLKupPortalElement> {
    /**
    * Tells the portal instance if it can be visible or not
    */
    'isVisible'?: boolean;
    /**
    * Array of custom css vars which needs to be mirrored. Their value is computed from cssVarsRef
    */
    'mirroredCssVars'?: string[];
    /**
    * Virtual node list the KetchupPortalInstance must render
    */
    'nodes'?: JSX.Element[] | JSX.Element;
    /**
    * Reference to the html element which is using the portal. It must be a root of a web component.
    */
    'portalParentRef'?: HTMLElement;
    /**
    * The HTML element on which the virtual node must be appended
    */
    'portalRootNode'?: HTMLElement;
    /**
    * Calculated offset of where the portal must be positioned
    */
    'refOffset'?: ElementOffset;
    /**
    * A style node to be copied into the KetchupPortalInstance
    */
    'styleNode'?: HTMLStyleElement | null;
  }
  interface KupPortalInstance extends JSXBase.HTMLAttributes<HTMLKupPortalInstanceElement> {
    'additionalAdoptedStyleSheets'?: CSSStyleSheet[];
    /**
    * Specifies if the current portal instance should be displayed or not.
    */
    'isVisible'?: boolean;
    /**
    * A style node to be copied into the KetchupPortalInstance
    */
    'styleNode'?: HTMLStyleElement;
    /**
    * Virtual node list the KetchupPortalInstance must render
    */
    'vNodes'?: JSX.Element[] | JSX.Element;
  }
  interface KupProgressBar extends JSXBase.HTMLAttributes<HTMLKupProgressBarElement> {
    'label'?: string;
    'value'?: number;
  }
  interface KupRadio extends JSXBase.HTMLAttributes<HTMLKupRadioElement> {
    /**
    * Direction in which the radio elements must be placed
    */
    'direction'?: string;
    /**
    * Chooses which field of an item object should be used to create the list and be filtered.
    */
    'displayedField'?: string;
    /**
    * Allows to pass an initial selected item for the Radio group
    */
    'initialValue'?: KetchupRadioElement;
    /**
    * Radio elements to display
    */
    'items'?: KetchupRadioElement[];
    /**
    * Label to describe the radio group
    */
    'label'?: string;
    /**
    * When currently selected radio button has been changed.
    */
    'onKetchupRadioChanged'?: (event: CustomEvent<KetchupRadioChangeEvent>) => void;
    /**
    * Radio elements value
    */
    'radioName'?: string;
    /**
    * Chooses which field of an item object should be used to create the list and be filtered.
    */
    'valueField'?: string;
  }
  interface KupTextInput extends JSXBase.HTMLAttributes<HTMLKupTextInputElement> {
    /**
    * Set the amount of time, in milliseconds, to wait to trigger the `ketchupTextInputUpdated` event after each keystroke.
    */
    'debounce'?: number;
    /**
    * Marks the field as clearable, allowing an icon to delete its content
    */
    'initialValue'?: string;
    /**
    * Specify the type of input. Allowed values: password, text.
    */
    'inputType'?: string;
    /**
    * Marks the field as clearable, allowing an icon to delete its content
    */
    'isClearable'?: boolean;
    /**
    * Label to describe the text-input clear button group
    */
    'label'?: string;
    /**
    * The max length of the text field. Default value copied from here: https://www.w3schools.com/tags/att_input_maxlength.asp
    */
    'maxLength'?: number;
    /**
    * A generic object which can be passed to the component. Once this object is set, it will always be returned inside the info field of the ketchupTextInputUpdated and ketchupTextInputSubmit.
    */
    'obj'?: GenericObject;
    /**
    * When text field loses focus (blur)
    */
    'onKetchupTextInputBlurred'?: (event: CustomEvent<KetchupTextInputEvent>) => void;
    /**
    * When the text input gains focus
    */
    'onKetchupTextInputFocused'?: (event: CustomEvent<KetchupTextInputEvent>) => void;
    /**
    * When a keydown enter event occurs it generates
    */
    'onKetchupTextInputSubmit'?: (event: CustomEvent<KetchupTextInputEvent>) => void;
    /**
    * When the input text value gets updated
    */
    'onKetchupTextInputUpdated'?: (event: CustomEvent<KetchupTextInputEvent>) => void;
    /**
    * text for input placeholder
    */
    'placeholder'?: string;
  }

  interface IntrinsicElements {
    'kup-box': KupBox;
    'kup-btn': KupBtn;
    'kup-button': KupButton;
    'kup-chart': KupChart;
    'kup-chip': KupChip;
    'kup-combo': KupCombo;
    'kup-dash': KupDash;
    'kup-data-table': KupDataTable;
    'kup-fld': KupFld;
    'kup-gauge': KupGauge;
    'kup-graphic-cell': KupGraphicCell;
    'kup-html': KupHtml;
    'kup-image': KupImage;
    'kup-paginator': KupPaginator;
    'kup-portal': KupPortal;
    'kup-portal-instance': KupPortalInstance;
    'kup-progress-bar': KupProgressBar;
    'kup-radio': KupRadio;
    'kup-text-input': KupTextInput;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


