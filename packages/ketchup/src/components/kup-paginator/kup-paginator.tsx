import {
    Component,
    Prop,
    Element,
    Event,
    EventEmitter,
    h,
} from '@stencil/core';

import { PaginatorMode } from './kup-paginator-declarations';
import { isNumber } from '../../utils/utils';
import { logMessage } from '../../utils/debug-manager';

@Component({
    tag: 'kup-paginator',
    styleUrl: 'kup-paginator.scss',
    shadow: true,
})
export class KupPaginator {
    @Element() rootElement: HTMLElement;

    @Prop({ reflect: true }) currentPage = 1;

    @Prop({ reflect: true }) max = 0;

    @Prop({ reflect: true }) mode: PaginatorMode = PaginatorMode.FULL;

    @Prop({ reflect: true }) perPage = 10;

    @Prop({ reflect: true }) selectedPerPage = 10;

    private startTime: number = 0;
    private endTime: number = 0;
    private renderCount: number = 0;
    private renderStart: number = 0;
    private renderEnd: number = 0;

    /**
     * When the current page change
     */
    @Event({
        eventName: 'kupPageChanged',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupPageChanged: EventEmitter<{ newPage: number }>;

    /**
     * When the rows per page change
     */
    @Event({
        eventName: 'kupRowsPerPageChanged',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupRowsPerPageChanged: EventEmitter<{ newRowsPerPage: number }>;

    private isPrevPageDisabled() {
        return this.currentPage == 1;
    }

    private isNextPageDisabled() {
        return this.currentPage * this.selectedPerPage >= this.max;
    }

    private onPageChange(event: CustomEvent) {
        event.stopPropagation();
        if (event.detail.value) {
            if (isNumber(event.detail.value)) {
                const numberOfPages = Math.ceil(
                    this.max / this.selectedPerPage
                );
                let tmpNewPage: number = event.detail.value;
                if (tmpNewPage > numberOfPages) {
                    tmpNewPage = numberOfPages;
                }
                if (tmpNewPage < 1) {
                    tmpNewPage = 1;
                }
                this.kupPageChanged.emit({
                    newPage: tmpNewPage,
                });
            }
        }
    }

    private onPrevPage() {
        if (this.isPrevPageDisabled()) {
            return;
        }

        // fire next page event
        this.kupPageChanged.emit({
            newPage: this.currentPage - 1,
        });
    }

    private onNextPage() {
        if (this.isNextPageDisabled()) {
            return;
        }

        // fire next page event
        this.kupPageChanged.emit({
            newPage: this.currentPage + 1,
        });
    }

    private onRowsPerPage(event: CustomEvent) {
        event.stopPropagation();

        if (event.detail.value) {
            if (isNumber(event.detail.value)) {
                let tmpRowsPerPage: number = event.detail.value;
                if (tmpRowsPerPage > this.max) {
                    tmpRowsPerPage = this.max;
                }
                if (tmpRowsPerPage < 1) {
                    tmpRowsPerPage = 1;
                }
                this.kupRowsPerPageChanged.emit({
                    newRowsPerPage: tmpRowsPerPage,
                });
            }
        }
    }

    // render functions
    private getGoToPageItems(maxNumberOfPage: number) {
        const goToPageItems = [];

        for (let i = 1; i <= maxNumberOfPage; i++) {
            let selected = i == this.currentPage;
            goToPageItems.push({
                text: i,
                value: i,
                selected: selected,
            });
        }

        return goToPageItems;
    }

    private getRowsPerPageItems() {
        const rowsPerPageItems = [];

        if (this.currentPage !== this.max) {
            let i = this.perPage;

            if (i === 0) {
                return rowsPerPageItems;
            }

            while (i < this.max) {
                let selected = i == this.selectedPerPage;
                rowsPerPageItems.push({
                    text: i,
                    value: i,
                    selected: selected,
                });
                i = i * 2;
            }

            let selected = this.max == this.selectedPerPage;
            // adding 'max' option
            rowsPerPageItems.push({
                text: this.max,
                value: this.max,
                selected: selected,
            });
        } else {
            rowsPerPageItems.push({
                text: this.perPage,
                value: this.perPage,
                selected: true,
            });
        }

        return rowsPerPageItems;
    }

    //---- Lifecycle hooks ----

    componentWillLoad() {
        this.startTime = performance.now();
    }

    componentDidLoad() {
        this.endTime = performance.now();
        let timeDiff: number = this.endTime - this.startTime;
        logMessage(this, 'Component ready after ' + timeDiff + 'ms.');
    }

    componentWillRender() {
        this.renderCount++;
        this.renderStart = performance.now();
    }

    componentDidRender() {
        this.renderEnd = performance.now();
        let timeDiff: number = this.renderEnd - this.renderStart;
        logMessage(
            this,
            'Render #' + this.renderCount + ' took ' + timeDiff + 'ms.'
        );
    }

    render() {
        const maxNumberOfPage = Math.ceil(this.max / this.selectedPerPage);

        const goToPageItems = this.getGoToPageItems(maxNumberOfPage);

        const rowsPerPageItems = this.getRowsPerPageItems();

        let textfieldDataPage = {
            initialValue: this.currentPage,
            label: 'Page',
            trailingIcon: true,
            helper: `of ${maxNumberOfPage}`,
            helperWhenFocused: true,
        };
        let listDataPage = {
            data: goToPageItems,
            selectable: true,
        };

        let textfieldDataRows = {
            initialValue: this.perPage,
            label: 'Rows / page',
            trailingIcon: true,
            helper: `Total rows: ${this.max}`,
            helperWhenFocused: true,
        };
        let listDataRows = {
            data: rowsPerPageItems,
            selectable: true,
        };

        let compCreated = (
            <div id="paginator">
                <div class="align-left">
                    <div class="nav-section">
                        <kup-button
                            icon="chevron_left"
                            disabled={this.isPrevPageDisabled()}
                            class="prev-page"
                            onKupButtonClick={() => this.onPrevPage()}
                        ></kup-button>
                        <kup-combobox
                            class="page-selector"
                            textfieldData={textfieldDataPage}
                            listData={listDataPage}
                            onKupComboboxItemClick={(e) => this.onPageChange(e)}
                            onKupComboboxTextFieldSubmit={(e) =>
                                this.onPageChange(e)
                            }
                        />
                        <kup-button
                            icon="chevron_right"
                            disabled={this.isNextPageDisabled()}
                            class="next-page"
                            onKupButtonClick={() => this.onNextPage()}
                        ></kup-button>
                    </div>
                    <div class="tot-section">
                        <slot name="more-results" />
                        <kup-combobox
                            class="rows-selector"
                            textfieldData={textfieldDataRows}
                            listData={listDataRows}
                            onKupComboboxItemClick={(e) =>
                                this.onRowsPerPage(e)
                            }
                            onKupComboboxTextFieldSubmit={(e) =>
                                this.onRowsPerPage(e)
                            }
                        />
                        <slot name="right" />
                    </div>
                </div>

                <div class="align-left"></div>
            </div>
        );

        return compCreated;
    }
}
