import {
    Component,
    Prop,
    h,
    Watch,
    Method,
    Event,
    EventEmitter,
    Host,
    State,
} from '@stencil/core';

import {
    KupAutocompleteOption,
    KupAutocompleteFilterUpdatePayload,
} from '../kup-autocomplete/kup-autocomplete-declarations';

import {
    FormFields,
    FormRecord,
    FormField,
    FormSection,
    FormMessage,
    FormActions,
    FormActionEventDetail,
    FormFieldEventDetail,
} from '../kup-form/kup-form-declarations';

import {
    getFields,
    getVisibleFields,
    outputValue,
} from '../../utils/widget-utils';

import {
    CrudConfig,
    CrudRecordsChanged,
    CrudCallBackOnFormEventResult,
    CrudMessage,
    CrudMessageLevel,
} from './kup-crud-declarations';

import isEmpty from 'lodash/isEmpty';

import { SearchFilterSubmittedEventDetail } from '../kup-search/kup-search-declarations';

import { TableData } from '../kup-data-table/kup-data-table-declarations';

import cloneDeep from 'lodash/cloneDeep';

import { generateUuidv4 } from '../../utils/utils';

@Component({
    tag: 'kup-crud',
    styleUrl: 'kup-crud.scss',
    shadow: true,
})
// TODO: complete this component... actually is only a simplified version for tests inside form...
// TODO: used generated uuid to manage different records... records indexes can be used
export class KupCrud {
    //--------------------------------------------------------------------------
    // PROPS
    // -------------------------------------------------------------------------

    @Prop() refid: string;

    @Prop() extra: any;

    @Prop() config: CrudConfig = {};

    // START form props... TODO: they can arrive from a callback...
    @Prop() records: FormRecord[];

    @Prop() fields: FormFields;

    @Prop() sections: FormSection;

    @Prop() extraMessages: FormMessage[] = [];

    @Prop() actions: FormActions;

    // END form props...

    @Prop() disabled: boolean = false;

    @Prop() crudCallBackOnFormActionSubmitted: (
        detail: FormActionEventDetail
    ) => Promise<CrudCallBackOnFormEventResult> | undefined = undefined;

    @Prop() crudCallBackOnFormFieldChanged: (
        detail: FormFieldEventDetail
    ) => Promise<CrudCallBackOnFormEventResult> | undefined = undefined;

    @Prop() autocompleteCallBackOnFilterUpdate: (
        detail: KupAutocompleteFilterUpdatePayload
    ) => Promise<KupAutocompleteOption[]> | undefined = undefined;

    @Prop() searchCallBackOnFilterSubmitted: (
        detail: SearchFilterSubmittedEventDetail
    ) => Promise<TableData> | undefined = undefined;

    //--------------------------------------------------------------------------
    // EVENTS
    // -------------------------------------------------------------------------

    @Event({
        eventName: 'kupCrudFocused',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupCrudFocused: EventEmitter;

    @Event({
        eventName: 'kupCrudBlurred',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupCrudBlurred: EventEmitter;

    @Event({
        eventName: 'kupCrudFormActionSubmitted',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupCrudFormActionSubmitted: EventEmitter<FormActionEventDetail>;

    @Event({
        eventName: 'kupCrudFormFieldChanged',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupCrudFormFieldChanged: EventEmitter<FormFieldEventDetail>;

    @Event({
        eventName: 'kupCrudRecordsChanged',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupCrudRecordsChanged: EventEmitter<CrudRecordsChanged>;

    //--------------------------------------------------------------------------
    // INTERNAL
    // -------------------------------------------------------------------------

    @State() actualRecord: FormRecord;

    @State() messages: CrudMessage[] = [];

    private visibleFields: FormField[] = [];

    private modal: HTMLKupModalElement;

    //--------------------------------------------------------------------------
    // PUBLI METHODS
    // -------------------------------------------------------------------------

    @Method()
    async closeForm() {
        this.modal.visible = false;
    }

    @Method()
    async openForm() {
        this.modal.visible = true;
    }

    //--------------------------------------------------------------------------
    // ON SOMETHING
    // -------------------------------------------------------------------------

    componentWillLoad() {
        this.onFieldsChanged();
    }

    @Watch('fields')
    private onFieldsChanged() {
        this.initVisibleFields();
    }

    // TODO: used button event -> missing kup-button event -> implement it
    private onCrudFocused(event) {
        event.stopPropagation();
        this.kupCrudFocused.emit({});
    }

    // TODO: used button events -> missing kup-button event -> implement it
    private onCrudBlurred(event) {
        event.stopPropagation();
        this.kupCrudBlurred.emit({});
    }

    private onCancelForm(event: CustomEvent) {
        console.log('Cancel crud form clicked');
        event.stopPropagation();
        // close modal
        this.modal.visible = false;
    }

    private onInsertRecordClicked(event: CustomEvent) {
        console.log('Insert record');
        event.stopPropagation();
        if (!this.extra) {
            this.extra = {};
        }
        this.extra.crud = { mode: 'insert' };

        this.actualRecord = { fields: {} };
        this.extraMessages = [];
        // open modal
        this.modal.visible = true;
    }

    private onUpdateRecordClicked(event: CustomEvent, recordId: string) {
        console.log('Update record with id ' + recordId);
        event.stopPropagation();
        let record = this.getRecordById(this.records, recordId);
        if (record) {
            if (!this.extra) {
                this.extra = {};
            }
            this.extra.crud = { mode: 'update', recordId: recordId };
            // put a deep clone of the record in the form
            this.actualRecord = cloneDeep(record);
            this.extraMessages = [];
            // open modal
            this.modal.visible = true;
        }
    }

    private onDeleteRecordClicked(event: CustomEvent, recordId: string) {
        console.log('Delete record with id ' + recordId);
        event.stopPropagation();
        let index = this.getRecordIndexByRecordId(this.records, recordId);
        if (index >= 0) {
            this.records.splice(index, 1);
            this.records = [...this.records];
            this.kupCrudRecordsChanged.emit({
                actual: { records: this.records },
            });
        }
    }

    private onFormFieldChanged(event: CustomEvent<FormFieldEventDetail>) {
        event.stopPropagation();
        let detail = event.detail;

        if (this.crudCallBackOnFormFieldChanged) {
            console.log(
                'Executing callback on form field event for refid ' +
                    detail.refid
            );
            this.crudCallBackOnFormFieldChanged(detail)
                .then((result) => {
                    this.update(detail.extra, result);
                    this.kupCrudFormFieldChanged.emit(detail);
                })
                .catch((err) => {
                    console.error('Executing callback error:', err);
                });
        } else {
            this.kupCrudFormFieldChanged.emit(detail);
        }
    }

    private onFormActionSubmitted(event: CustomEvent<FormActionEventDetail>) {
        event.stopPropagation();
        let detail = event.detail;

        if (this.crudCallBackOnFormActionSubmitted) {
            console.log(
                'Executing callback on form action submitted for refid ' +
                    detail.refid +
                    ' and action ' +
                    detail.action.key
            );
            this.crudCallBackOnFormActionSubmitted(detail)
                .then((result) => {
                    this.update(detail.extra, result);
                    this.kupCrudFormActionSubmitted.emit(detail);
                })
                .catch((err) => {
                    console.error('Executing callback error:', err);
                });
        } else {
            this.kupCrudFormActionSubmitted.emit(detail);
        }
    }

    //--------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    private renderRow(record: FormRecord) {
        let rowContent = [];

        let updateButtonContent = this.hasRowUpdateAction() ? (
            <kup-button
                showicon={true}
                flat={true}
                iconClass="mdi mdi-pencil"
                onKupButtonClicked={(e) =>
                    this.onUpdateRecordClicked(e, record.id)
                }
            ></kup-button>
        ) : (
            ''
        );

        let deleteButtonContent = this.hasRowDeleteAction() ? (
            <kup-button
                showicon={true}
                flat={true}
                iconClass="mdi mdi-delete"
                onKupButtonClicked={(e) =>
                    this.onDeleteRecordClicked(e, record.id)
                }
            ></kup-button>
        ) : (
            ''
        );

        if (this.hasRowActions()) {
            rowContent.push(
                <td>
                    {updateButtonContent}
                    {deleteButtonContent}
                </td>
            );
        }

        this.visibleFields &&
            this.visibleFields.forEach((field) => {
                rowContent.push(
                    <td>
                        {outputValue(
                            record.fields &&
                                record.fields[field.key] &&
                                record.fields[field.key].value,
                            field.outputValueFunction
                        )}
                    </td>
                );
            });

        return <tr>{rowContent}</tr>;
    }

    renderMessages() {
        let messagesContent = '';
        if (this.messages) {
            messagesContent = (
                <div class="global-messages">
                    {this.messages
                        .filter((elem) => !!elem)
                        .map((message, index) => {
                            return (
                                <div
                                    class={
                                        'global-message ' +
                                        message.level.toLowerCase()
                                    }
                                    key={index}
                                >
                                    {message.text}
                                </div>
                            );
                        })}
                </div>
            );
        }
        return messagesContent;
    }

    render() {
        let insertButtonContent = this.hasInsertAction() ? (
            <kup-button
                showicon={true}
                showtext={true}
                flat={true}
                label="Add"
                iconClass="mdi mdi-plus"
                onKupButtonClicked={(e) => this.onInsertRecordClicked(e)}
            ></kup-button>
        ) : (
            ''
        );

        let tableHeader = [];

        if (this.hasRowActions()) {
            tableHeader.push(<th>Actions</th>);
        }

        this.visibleFields &&
            this.visibleFields.forEach((field) => {
                tableHeader.push(<th>{field.key}</th>);
            });

        let tableRows = [];

        this.records.forEach((record, i) => {
            if (i === 0 && this.hasConfigureAction()) {
                tableRows.push(this.renderRow(record));
            } else if (!this.hasConfigureAction()) {
                tableRows.push(this.renderRow(record));
            }
        });

        const btnStyle = {};
        btnStyle['--kup-button_border-color-focused'] = '#66D3FA';

        let configureButtonContent = this.hasConfigureAction() ? (
            <kup-button
                style={btnStyle}
                id="open-modal"
                label="Configure"
                showtext={true}
                flat={false}
                onKupButtonClicked={(e) =>
                    this.onUpdateRecordClicked(
                        e,
                        this.records && this.records[0].id
                    )
                }
                onBlur={(e) => this.onCrudBlurred(e)}
                onFocus={(e) => this.onCrudFocused(e)}
            >
                Configure
            </kup-button>
        ) : (
            ''
        );

        return (
            <Host refid={this.refid}>
                <div class="crud-component ">
                    {this.renderMessages()}
                    {insertButtonContent}
                    <table class="crud-table">
                        <thead>
                            <tr>{tableHeader}</tr>
                        </thead>
                        <tbody>{tableRows}</tbody>
                    </table>
                    {configureButtonContent}

                    <kup-modal
                        id="modal"
                        ref={(el) => (this.modal = el)}
                        onKupModalCancel={(e) => this.onCancelForm(e)}
                    >
                        <kup-form
                            refid={this.refid}
                            extra={this.extra}
                            config={this.config}
                            fields={this.fields}
                            record={this.actualRecord}
                            sections={this.sections}
                            extraMessages={this.extraMessages}
                            actions={this.actions}
                            onKupFormActionSubmitted={(e) =>
                                this.onFormActionSubmitted(e)
                            }
                            onKupFormFieldChanged={(e) =>
                                this.onFormFieldChanged(e)
                            }
                            autocompleteCallBackOnFilterUpdate={
                                this.autocompleteCallBackOnFilterUpdate
                            }
                            searchCallBackOnFilterSubmitted={
                                this.searchCallBackOnFilterSubmitted
                            }
                            crudCallBackOnFormActionSubmitted={
                                this.crudCallBackOnFormActionSubmitted
                            }
                            crudCallBackOnFormFieldChanged={
                                this.crudCallBackOnFormFieldChanged
                            }
                        />
                    </kup-modal>
                </div>
            </Host>
        );
    }

    //--------------------------------------------------------------------------
    // UTIL METHODS
    // -------------------------------------------------------------------------

    private initVisibleFields(): void {
        this.visibleFields = getVisibleFields(getFields(this.fields));
    }

    private hasConfigureAction(): boolean {
        return !this.disabled && this.config && !this.config.multiple;
    }

    private hasInsertAction(): boolean {
        return (
            !this.disabled &&
            this.config &&
            this.config.multiple &&
            this.config.insert
        );
    }

    private hasRowUpdateAction(): boolean {
        return (
            !this.disabled &&
            this.config &&
            this.config.multiple &&
            this.config.update
        );
    }

    private hasRowDeleteAction(): boolean {
        return (
            !this.disabled &&
            this.config &&
            this.config.multiple &&
            this.config.delete
        );
    }

    private hasRowActions(): boolean {
        return (
            !this.disabled &&
            this.config &&
            this.config.multiple &&
            (this.config.update || this.config.delete)
        );
    }

    private getRecordIndexByRecordId(
        records: FormRecord[],
        id: string
    ): number {
        let indexes = records.reduce(
            (c, record, i) => (record.id == id ? c.concat(i) : c),
            []
        );

        if (!indexes || indexes.length == 0) {
            this.messages = [
                {
                    text: 'Did not find record with id ' + id,
                    level: CrudMessageLevel.ERROR,
                },
            ];
            return -1;
        }
        if (indexes.length > 1) {
            this.messages = [
                {
                    text: 'More than one record with the same id (' + id + ')',
                    level: CrudMessageLevel.ERROR,
                },
            ];
            return -1;
        }

        return indexes[0];
    }

    private getRecordById(records: FormRecord[], id: string): FormRecord {
        let index = this.getRecordIndexByRecordId(records, id);
        if (index >= 0) {
            return records[index];
        } else {
            return null;
        }
    }

    private update(extra: any, result: CrudCallBackOnFormEventResult) {
        console.log('CRUD component update...');

        if (isEmpty(result)) {
            console.log('Nothing to update...');
        }

        if (result.formOpened == false) {
            this.modal.visible = false;
        }

        if (result.extraMessages) {
            this.extraMessages = result.extraMessages;
        }

        // TODO: as default if you modify fields you have to return all fields
        // I added a fields.diff.override mode but is an INCOMPLETE sample
        // the impl is only for readonly and data props -> if can be useful extends it
        if (result.fields) {
            console.log('Updating fields...');
            if (result.diffTypes.includes('fields.diff.override')) {
                const keys = Object.keys(result.fields);
                keys.forEach((key) => {
                    if (result.fields[key].hasOwnProperty('config')) {
                        if (result.fields[key].config.hasOwnProperty('data')) {
                            this.fields[key].config.data =
                                result.fields[key].config.data;
                        }
                    }
                    if (result.fields[key].hasOwnProperty('readonly')) {
                        this.fields[key].readonly = result.fields[key].readonly;
                    }
                });
            } else {
                this.fields = result.fields;
            }
        }

        if (result.record) {
            this.actualRecord = result.record;
        }

        if (result.records) {
            if (extra && extra.crud && extra.crud.mode == 'update') {
                let index = this.getRecordIndexByRecordId(
                    this.records,
                    extra.crud.recordId
                );
                this.records[index] = result.records[0];
            }
            if (extra && extra.crud && extra.crud.mode == 'insert') {
                // will put id if is an insert...
                if (!result.records[0].hasOwnProperty('id')) {
                    result.records[0].id = generateUuidv4();
                }
                this.records = [...this.records, result.records[0]];
            }

            this.kupCrudRecordsChanged.emit({
                actual: { records: this.records },
            });
        }

        // todo: config, sections, actions
    }
}
