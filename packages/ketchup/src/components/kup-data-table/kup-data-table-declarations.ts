export interface DataTable {
    columns?: Array<Column>;
    rows?: Array<Row>;
}

export interface Cell {
    obj?: {
        t: string;
        p: string;
        k: string;
    };
    value: string;
    style?: GenericMap;
    options?: boolean;
    shape?: string;
    config?: any;
}

export interface CellsHolder {
    [index: string]: Cell;
}

export interface Column {
    name: string;
    title: string;
    size?: number;
    visible?: boolean;
    hideValuesRepetitions?: boolean;
    obj?: {
        t: string;
        p: string;
        k: string;
    };
}

export interface Row {
    cells: CellsHolder;

    actions?: Array<RowAction>;

    id?: string;

    group?: RowGroup;

    readOnly?: boolean;
}

export interface RowGroup {
    id: string;
    parent: Row;
    column: string;
    columnLabel: string; // Saves the column label in case either LABEL or BOTH modes for the groupLabelDisplay are activated
    expanded: boolean; // not sure if this is needed
    label: string;
    children: Array<Row>;
    obj: {
        t: string;
        p: string;
        k: string;
    };
    totals: { [index: string]: number };
}

export interface TableData {
    columns?: Array<Column>;
    rows?: Array<Row>;
}

export interface GenericMap {
    [index: string]: string;
}

export interface SortObject {
    column: string;
    sortMode: SortMode;
}

export enum SortMode {
    A = 'A',
    D = 'D',
}

export interface TotalsMap {
    [index: string]: TotalMode;
}

export enum TotalMode {
    COUNT = 'Count',
    SUM = 'Sum',
    AVARAGE = 'Avarage',
}

export enum PaginatorPos {
    TOP = 'Top',
    BOTTOM = 'Bottom',
    BOTH = 'Both',
}

export interface GroupObject {
    column: string;
    visible: boolean;
}

export interface RowAction {
    text: string;
    icon: string;
}

export enum ShowGrid {
    NONE = 'None',
    ROW = 'Row',
    COL = 'Col',
    COMPLETE = 'Complete',
}

// export enum RowActionType {
//     DEFAULT = 'Default',
//     VARIABLE = 'Variable',
// }

export interface KupDataTableCellButtonClick {
    cell: Cell;
    column: Column;
    row: Row;
}

//---- *NEXT functionalit AKA load more ----
export enum LoadMoreMode {
    CONSTANT = 'constant',
    CONSTANT_INCREMENT = 'constant_increment',
    PROGRESSIVE_THRESHOLD = 'progressive_threshold',
}

//---- Sortable Columns Functionality ----
export const KupDataTableColumnDragType = 'text/kup-data-table-column-drag';

export interface KupDataTableSortedColumnIndexes {
    receivingColumnIndex: number;
    sortedColumnIndex: number;
}

//---- Sortable Columns Functionality ----
/**
 * The possible values the display property can have.
 * @enum
 * @property {string} BOTH - Shows both the column label and the value. This is the default.
 * @property {string} LABEL - Shows only the columns label.
 * @property {string} VALUE - Shows only the value.
 * @readonly
 */
export enum GroupLabelDisplayMode {
    BOTH = 'both',
    LABEL = 'label',
    VALUE = 'value',
}

export interface KupDataTableState {
    filters?: GenericMap;
    groups?: Array<GroupObject>;
    data?: TableData;
}
