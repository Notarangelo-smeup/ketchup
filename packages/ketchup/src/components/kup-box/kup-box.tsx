import {
    Component,
    Event,
    Prop,
    State,
    Watch,
    EventEmitter,
    h,
    Method,
} from '@stencil/core';

import numeral from 'numeral';

import {
    Column,
    SortObject,
    SortMode,
    RowAction,
} from '../kup-data-table/kup-data-table-declarations';

import {
    BoxRow,
    Layout,
    Section,
    CollapsedSectionsState,
    BoxObject,
} from './kup-box-declarations';

import {
    isImage,
    isButton,
    createJ4objButtonConfig,
    isProgressBar,
} from '../../utils/object-utils';

import { filterRows, sortRows } from '../kup-data-table/kup-data-table-helper';

import { KetchupComboEvent } from '../kup-combo/kup-combo-declarations';

@Component({
    tag: 'kup-box',
    styleUrl: 'kup-box.scss',
    shadow: true,
})
export class KupBox {
    /**
     * Data
     */
    @Prop() data: { columns?: Column[]; rows?: BoxRow[] };

    /**
     * How the field will be displayed. If not present, a default one will be created.
     */
    @Prop() layout: Layout;

    /**
     * Number of columns
     */
    @Prop() columns = 1;

    /**
     * Enable sorting
     */
    @Prop()
    sortEnabled = false;

    /**
     * If sorting is enabled, specifies which column to sort
     */
    @Prop({ mutable: true })
    sortBy: string;

    /**
     * Enable filtering
     */
    @Prop()
    filterEnabled = false;

    /**
     * Enable multi selection
     */
    @Prop()
    multiSelection = false;

    /**
     * Automatically selects the box at the specified index
     */
    @Prop()
    selectBox: number;

    /**
     * If enabled, highlights the selected box/boxes
     */
    @Prop()
    showSelection = true;

    /**
     * If enabled, a button to load / display the row actions
     * will be displayed on the right of every box
     */
    @Prop()
    enableRowActions = false;

    @State()
    private globalFilterValue = '';

    @State()
    private collapsedSection: CollapsedSectionsState = {};

    @State()
    private selectedRows: BoxRow[] = [];

    /**
     * Row that has the row object menu open
     */
    @State()
    private rowActionMenuOpened: BoxRow;

    /**
     * Triggered when a box is clicked
     */
    @Event({
        eventName: 'kupBoxClicked',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupBoxClicked: EventEmitter<{
        row: BoxRow;
        column?: string;
    }>;

    /**
     * Triggered when the multi selection checkbox changes value
     */
    @Event({
        eventName: 'kupBoxSelected',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupBoxSelected: EventEmitter<{
        rows: BoxRow[];
    }>;

    /**
     * Triggered when a box is auto selected via selectBox prop
     */
    @Event({
        eventName: 'kupAutoBoxSelect',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupAutoBoxSelect: EventEmitter<{
        row: BoxRow;
    }>;

    /**
     * When the row menu action icon is clicked
     */
    @Event({
        eventName: 'kupRowActionMenuClicked',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupRowActionMenuClicked: EventEmitter<{
        row: BoxRow;
    }>;

    /**
     * When the row menu action icon is clicked
     */
    @Event({
        eventName: 'kupRowActionClicked',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupRowActionClicked: EventEmitter<{
        row: BoxRow;
        action: RowAction;
        index: number;
    }>;

    private boxLayout: Layout;

    private visibleColumns: Column[] = [];

    private rows: BoxRow[] = [];

    @Watch('globalFilterValue')
    @Watch('sortBy')
    recalculateRows() {
        this.initRows();
    }

    @Watch('data')
    onDataChanged() {
        this.initVisibleColumns();
        this.initRows();
        this.checkLayout();
    }

    @Watch('layout')
    onLayoutChanged() {
        this.checkLayout();
    }

    @Watch('selectBox')
    onSelectBoxChanged() {
        this.handleAutomaticBoxSelection();
    }

    // lifecycle hooks
    componentWillLoad() {
        this.onDataChanged();
    }

    componentDidLoad() {
        this.handleAutomaticBoxSelection();

        // When component is created, then the listener is set. @See clickFunction for more details
        document.addEventListener('click', this.clickFunction.bind(this));
    }

    componentDidUnload() {
        // When component is destroyed, then the listener is removed. @See clickFunction for more details
        document.removeEventListener('click', this.clickFunction.bind(this));
    }

    // @Methods
    @Method()
    async loadRowActions(row: BoxRow, actions: RowAction[]) {
        row.actions = actions;

        // show menu
        this.rowActionMenuOpened = row;
    }

    // private methods
    private getColumns(): Array<Column> {
        return this.data && this.data.columns
            ? this.data.columns
            : [{ title: '', name: '', size: 0 }];
    }

    private initVisibleColumns(): void {
        this.visibleColumns = this.getColumns().filter((column) => {
            if (column.hasOwnProperty('visible')) {
                return column.visible;
            }

            return true;
        });
    }

    private getRows(): BoxRow[] {
        return this.data && this.data.rows ? this.data.rows : [];
    }

    private initRows(): void {
        let filteredRows = this.getRows();

        if (this.filterEnabled && this.globalFilterValue) {
            const visibleCols = this.visibleColumns;
            let size = visibleCols.length;
            let columnNames = [];

            let cnt = 0;

            while (size-- > 0) {
                columnNames.push(visibleCols[cnt++].name);
            }

            // filtering rows
            filteredRows = filterRows(
                filteredRows,
                null,
                this.globalFilterValue,
                columnNames
            );
        }

        this.rows = this.sortRows(filteredRows);
    }

    private sortRows(rows: BoxRow[]): BoxRow[] {
        let sortedRows = rows;

        if (this.sortBy) {
            // create 'fake' sortObject
            const sortObject: SortObject = {
                column: this.sortBy,
                sortMode: SortMode.A,
            };

            sortedRows = sortRows(sortedRows, [sortObject]);
        }

        return sortedRows;
    }

    private checkLayout() {
        // check if there is a layout.
        // if not, create a default layout
        if (this.layout) {
            this.boxLayout = this.layout;
            return;
        }

        // only one section, containing all visible fields
        const section: Section = {
            horizontal: false,
            sections: [],
            style: {
                textAlign: 'center',
            },
        };

        // adding box objects to section
        const visibleColumns = this.visibleColumns;
        let size = visibleColumns.length;
        let content = [];

        let cnt = 0;

        while (size-- > 0) {
            content.push({
                column: visibleColumns[cnt++].name,
            });
        }

        section.content = content;

        // creating a new layout
        this.boxLayout = {
            sections: [section],
        };
    }

    private onSortChange(kupComboEvent: KetchupComboEvent) {
        this.sortBy = kupComboEvent.value.id;
        this.initRows();
    }

    private onGlobalFilterChange({ detail }) {
        this.globalFilterValue = detail.value;
    }

    private isSectionExpanded(row: BoxRow, section: Section): boolean {
        if (!row.id || !section.id) {
            return false;
        }

        return (
            this.collapsedSection[section.id] &&
            this.collapsedSection[section.id][row.id]
        );
    }

    private handleAutomaticBoxSelection() {
        // automatic row selection
        if (
            this.selectBox &&
            this.selectBox > 0 &&
            this.selectBox <= this.rows.length
        ) {
            this.selectedRows = [];
            this.selectedRows.push(this.rows[this.selectBox - 1]);

            this.kupAutoBoxSelect.emit({
                row: this.selectedRows[0],
            });
        }
    }

    /**
     * Checks if the element is the svg that opens the "row actions menu"
     * @param element the element to check
     */
    private checkIfElementIsActionMenuIcon(element: any) {
        if (element.tagName && element.parentElement) {
            return (
                element.tagName === 'svg' &&
                element.parentElement.classList.contains('row-actions-toggler')
            );
        }

        return false;
    }

    // event listeners
    private onBoxClick({ target }: MouseEvent, row: BoxRow) {
        if (!(target instanceof HTMLElement)) {
            return;
        }

        // searching parent
        let element = target;
        let classList = element.classList;

        while (
            !classList.contains('box-object') &&
            !classList.contains('box-section') &&
            !classList.contains('box')
        ) {
            element = element.parentElement;

            if (element === null) {
                break;
            }

            classList = element.classList;
        }

        // evaluating column
        let column = null;
        if (classList.contains('box-object')) {
            column = element.dataset.column;
        }

        this.kupBoxClicked.emit({ row, column });

        // selecting box
        if (this.multiSelection) {
            // triggering multi selection
            this.onSelectionCheckChange(row);
        } else {
            this.selectedRows = [row];
        }
    }

    private onSelectionCheckChange(row: BoxRow) {
        const index = this.selectedRows.indexOf(row);

        if (index >= 0) {
            // remove row
            this.selectedRows.splice(index, 1);
            this.selectedRows = [...this.selectedRows];
        } else {
            // add row
            this.selectedRows = [...this.selectedRows, row];
        }

        this.kupBoxSelected.emit({
            rows: this.selectedRows,
        });
    }

    private toggleSectionExpand(row: BoxRow, section: Section) {
        // check if section / row has id
        if (!section.id) {
            // error
            console.error('cannot expand / collapse a section withoun an ID');
            return;
        }

        if (!row.id) {
            // error
            console.error(
                'cannot expand / collapse a section of a row without ad id'
            );
            return;
        }

        // check if section already in collapsedSection
        if (!this.collapsedSection[section.id]) {
            // adding element and row, setting it to expanded
            this.collapsedSection[section.id] = {};
            this.collapsedSection[section.id][row.id] = true;
        } else {
            const s = this.collapsedSection[section.id];

            if (!s[row.id]) {
                s[row.id] = true;
            } else {
                s[row.id] = !s[row.id];
            }
        }

        // triggering rendering
        this.collapsedSection = { ...this.collapsedSection };
    }

    private onRowAction(row: BoxRow) {
        if (!row) {
            return;
        }

        if (row === this.rowActionMenuOpened) {
            // closing menu
            this.rowActionMenuOpened = null;
            return;
        }

        if (row.actions) {
            // actions already loaded -> show menu
            this.rowActionMenuOpened = row;
        } else {
            // no actions -> triggering event
            this.kupRowActionMenuClicked.emit({
                row,
            });
        }
    }

    private onRowActionClicked(row: BoxRow, action: RowAction, index: number) {
        this.kupRowActionClicked.emit({
            row,
            action,
            index,
        });
    }

    /**
     * see onDocumentClick in kup-combo
     */
    private clickFunction(event: UIEvent) {
        try {
            const targets = event.composedPath();

            for (let target of targets) {
                if (this.checkIfElementIsActionMenuIcon(target)) {
                    return;
                }
            }
        } catch (err) {
            if (this.checkIfElementIsActionMenuIcon(event.target)) {
                return;
            }
        }

        this.rowActionMenuOpened = null;
    }

    // render methods
    private renderRow(row: BoxRow) {
        const visibleColumns = [...this.visibleColumns];

        let boxContent = null;

        // if layout in row, use that one
        let rowLayout = row.layout;
        if (!rowLayout) {
            // otherwise, use 'default' layout
            rowLayout = this.boxLayout;
        }

        let horizontal = false;
        if (rowLayout) {
            if (rowLayout.horizontal) {
                horizontal = true;
            }

            const sections = rowLayout.sections;
            let size = sections.length;

            let cnt = 0;
            if (size > 0) {
                boxContent = [];
            }

            // create fake parent section
            const parent: Section = {
                horizontal: horizontal,
            };

            while (size-- > 0) {
                boxContent.push(
                    this.renderSection(
                        sections[cnt++],
                        parent,
                        row,
                        visibleColumns
                    )
                );
            }
        }

        const isSelected = this.selectedRows.includes(row);

        let multiSel = null;
        if (this.multiSelection) {
            multiSel = (
                <div class="box-selection">
                    <input
                        type="checkbox"
                        checked={isSelected}
                        onClick={(e) => e.stopPropagation()}
                        onChange={() => this.onSelectionCheckChange(row)}
                    />
                </div>
            );
        }

        let rowObject = null;
        if (this.enableRowActions) {
            const menuClass = {
                'row-action-menu': true,
                open: row === this.rowActionMenuOpened,
            };

            let rowActionMenuContent = null;
            if (row.actions) {
                const actionItems = row.actions.map((item, index) => {
                    const iconClass = `icon ${item.icon}`;

                    return (
                        <li
                            tabindex="0"
                            onClick={() =>
                                this.onRowActionClicked(row, item, index)
                            }
                        >
                            <div class={iconClass} />
                            <div class="text">{item.text}</div>
                        </li>
                    );
                });

                rowActionMenuContent = <ul>{actionItems}</ul>;
            }

            rowObject = (
                <div class="row-actions-wrapper">
                    <div class="row-actions-toggler">
                        <svg
                            version="1.1"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            onClick={() => this.onRowAction(row)}
                        >
                            <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
                        </svg>
                        <div class={menuClass}>{rowActionMenuContent}</div>
                    </div>
                </div>
            );
        }

        const boxClass = {
            box: true,
            selected: this.showSelection && isSelected,
            column: !horizontal,
        };

        return (
            <div class="box-wrapper">
                <div class={boxClass} onClick={(e) => this.onBoxClick(e, row)}>
                    {multiSel}
                    {boxContent}
                </div>
                {rowObject}
            </div>
        );
    }

    private renderSection(
        section: Section,
        parent: Section,
        row: BoxRow,
        visibleColumns: Column[]
    ) {
        let sectionContent = null;

        if (section.sections && section.sections.length > 0) {
            // rendering child
            const sections = section.sections;
            let size = sections.length;

            let cnt = 0;
            if (size > 0) {
                sectionContent = [];
            }

            while (size-- > 0) {
                sectionContent.push(
                    this.renderSection(
                        sections[cnt++],
                        section,
                        row,
                        visibleColumns
                    )
                );
            }
        } else if (section.content) {
            // rendering box objects
            const content = section.content;
            let size = content.length;

            let cnt = 0;
            if (size > 0) {
                sectionContent = [];
            }

            while (size-- > 0) {
                sectionContent.push(
                    this.renderBoxObject(content[cnt++], row, visibleColumns)
                );
            }
        } else if (visibleColumns.length > 0) {
            // getting first column
            const column = visibleColumns[0];

            // removing first column
            visibleColumns.splice(0, 1);

            sectionContent = this.renderBoxObject(
                { column: column.name },
                row,
                visibleColumns
            );
        }

        const sectionExpanded = this.isSectionExpanded(row, section);

        const isGrid = !!section.columns;

        const sectionClass: { [index: string]: boolean } = {
            'box-section': true,
            open: sectionExpanded,
            column: !isGrid && !section.horizontal,
            grid: isGrid,
            titled: !!section.title,
            'last-child': !section.sections || section.sections.length === 0,
        };

        const sectionStyle: any = section.style || {};
        if (section.dim && parent) {
            sectionStyle.flex = `0 0 ${section.dim}`;

            if (parent.horizontal) {
                sectionStyle.maxWidth = section.dim;
            } else {
                sectionStyle.maxHeight = section.dim;
            }
        }

        if (isGrid) {
            sectionStyle['grid-template-columns'] = `repeat(${
                section.columns
            }, 1fr)`;
        }

        let sectionContainer = null;
        if (section.collapsible) {
            sectionClass['collapse-section'] = true;

            const contentClass = {
                content: true,
            };

            // TODO I18N
            let headerTitle = '';
            if (section.title) {
                headerTitle = section.title;
            } else if (sectionExpanded) {
                headerTitle = 'Collassa';
            } else {
                headerTitle = 'Espandi';
            }

            sectionContainer = (
                <div class={sectionClass} style={sectionStyle}>
                    <div class={contentClass}>{sectionContent}</div>
                    <div
                        class="header"
                        role="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            this.toggleSectionExpand(row, section);
                        }}
                    >
                        <div class="header-content">
                            <span>{headerTitle}</span>
                            <span class="mdi mdi-chevron-down" />
                        </div>
                    </div>
                </div>
            );
        } else {
            const title = section.title ? <h3>{section.title}</h3> : null;

            sectionContainer = (
                <div class={sectionClass} style={sectionStyle}>
                    {title}
                    {sectionContent}
                </div>
            );
        }

        return sectionContainer;
    }

    private renderBoxObject(
        boxObject: BoxObject,
        row: BoxRow,
        visibleColumns: Column[]
    ) {
        let boContent = null;

        let boStyle = {};

        // check if fixed value
        if (boxObject.value) {
            boContent = boxObject.value;
        } else if (boxObject.column) {
            const cell = row.cells[boxObject.column];

            if (cell) {
                // removing column from visibleColumns
                let index = -1;

                for (let i = 0; i < visibleColumns.length; i++) {
                    const c = visibleColumns[i];

                    if (c.name === boxObject.column) {
                        index = i;
                        break;
                    }
                }

                if (index >= 0) {
                    visibleColumns.splice(index, 1);
                }

                if (cell.style) {
                    boStyle = { ...cell.style };
                }

                if (isImage(cell.obj)) {
                    let badges = null;
                    if (cell.config && cell.config.badges) {
                        badges = cell.config.badges;
                    }

                    boContent = <kup-image src={cell.value} badges={badges} />;
                } else if (isButton(cell.obj)) {
                    boContent = (
                        <kup-button {...createJ4objButtonConfig(cell)} />
                    );
                } else if (isProgressBar(cell.obj)) {
                    const value = numeral(cell.value).value();

                    let hideLabel = false;
                    let labelText: string = null;
                    const wrapperStyle = {};

                    if (cell.config) {
                        hideLabel = !!cell.config.hideLabel;

                        if (cell.config.hasOwnProperty('labelText')) {
                            labelText = cell.config.labelText;
                        }

                        if (cell.config.foregroundColor) {
                            wrapperStyle['--kup-pb_foreground-color'] =
                                cell.config.foregroundColor;
                        }
                    }

                    boContent = (
                        <div style={wrapperStyle}>
                            <kup-progress-bar
                                value={value}
                                labelText={labelText}
                                hideLabel={hideLabel}
                            />
                        </div>
                    );
                } else {
                    boContent = cell.value;
                }
            }
        }

        return (
            <div
                data-column={boxObject.column}
                class="box-object"
                style={boStyle}
            >
                {boContent}
            </div>
        );
    }

    render() {
        let sortPanel = null;
        if (this.sortEnabled) {
            let initialValue = { value: '', id: '' };

            // creating items
            const visibleColumnsItems = this.visibleColumns.map((column) => {
                const item = {
                    value: column.title,
                    id: column.name,
                };

                if (column.name === this.sortBy) {
                    // setting initial value
                    initialValue = item;
                }

                return item;
            });

            const items = [{ value: '', id: '' }, ...visibleColumnsItems];

            sortPanel = (
                <div id="sort-panel">
                    <kup-combo
                        displayedField="value"
                        items={items}
                        initialValue={initialValue}
                        onKetchupComboSelected={(e) =>
                            this.onSortChange(e.detail)
                        }
                    />
                </div>
            );
        }

        let filterPanel = null;
        if (this.filterEnabled) {
            filterPanel = (
                <div id="filter-panel">
                    <kup-text-input
                        placeholder="Cerca" // TODO
                        onKetchupTextInputUpdated={(event) =>
                            this.onGlobalFilterChange(event)
                        }
                    >
                        <svg
                            slot="left"
                            version="1.1"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                        >
                            <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                        </svg>
                    </kup-text-input>
                </div>
            );
        }

        let boxContent = null;

        if (this.rows.length === 0) {
            boxContent = <p id="empty-data-message">Empty data</p>;
        } else {
            const rows = this.rows;
            let size = rows.length;

            let cnt = 0;
            boxContent = [];

            while (size-- > 0) {
                boxContent.push(this.renderRow(rows[cnt++]));
            }
        }

        const containerStyle = {
            'grid-template-columns': `repeat(${this.columns}, 1fr)`,
        };

        return (
            <div>
                {sortPanel}
                {filterPanel}
                <div id="box-container" style={containerStyle}>
                    {boxContent}
                </div>
            </div>
        );
    }
}
