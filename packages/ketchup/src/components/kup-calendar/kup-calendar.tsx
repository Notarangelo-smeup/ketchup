import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {
    DataTable,
    Row,
    Column,
} from '../kup-data-table/kup-data-table-declarations';
import { formatToMomentDate } from '../../utils/cell-formatter';
import { getColumnByName } from '../kup-data-table/kup-data-table-helper';
import moment from 'moment';
import { logMessage } from '../../utils/debug-manager';

@Component({
    tag: 'kup-calendar',
    styleUrl: 'kup-calendar.scss',
    shadow: true,
})
export class KupCalendar {
    @Prop() data: DataTable;
    @Prop({ reflect: true }) dateCol: string;
    @Prop({ reflect: true }) descrCol: string;
    @Prop({ reflect: true }) styleCol: string;
    @Prop({ reflect: true }) iconCol: string;
    @Prop({ reflect: true }) imageCol: string;
    @Prop({ reflect: true }) startCol: string;
    @Prop({ reflect: true }) endCol: string;
    @Prop({ reflect: true }) weekView = false;
    @Prop({ reflect: true }) hideNavigation = false;
    @Prop({ reflect: true }) initialDate: string;

    private startTime: number = 0;
    private endTime: number = 0;
    private renderCount: number = 0;
    private renderStart: number = 0;
    private renderEnd: number = 0;

    /**
     * When an event is clicked
     */
    @Event({
        eventName: 'kupCalendarEventClicked',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupCalendarEventClicked: EventEmitter<Row>;

    /**
     * When a date is clicked
     */
    @Event({
        eventName: 'kupCalendarDateClicked',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupCalendarDateClicked: EventEmitter<Date>;

    /**
     * When a date is dropped
     */
    @Event({
        eventName: 'kupCalendarEventDropped',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupCalendarEventDropped: EventEmitter<{
        fromDate: {
            start: Date;
            end: Date;
        };
        toDate: {
            start: Date;
            end: Date;
        };
    }>;

    /**
     * When the navigation change
     */
    @Event({
        eventName: 'kupCalendarViewChanged',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupCalendarViewChanged: EventEmitter<{
        from: Date;
        to: Date;
    }>;

    private calendar: Calendar;

    private calendarContainer: HTMLDivElement = null;

    // ---- Private methods ----
    private getColumns(): Column[] {
        if (this.data && this.data.rows) {
            return this.data.columns;
        }

        return [];
    }

    private getRows(): Row[] {
        if (this.data && this.data.rows) {
            return this.data.rows;
        }

        return [];
    }

    private getEvents() {
        const isHourRange =
            this.startCol &&
            this.endCol &&
            getColumnByName(this.getColumns(), this.startCol) &&
            getColumnByName(this.getColumns(), this.endCol);

        return this.getRows().map((row) => {
            const startDate = formatToMomentDate(row.cells[this.dateCol]);
            const endDate = formatToMomentDate(row.cells[this.dateCol]);

            if (isHourRange) {
                const startCell = row.cells[this.startCol];
                const endCell = row.cells[this.endCol];

                if (startCell && endCell) {
                    const momentStart = moment(startCell.value, 'HH:mm:ss');
                    const momentEnd = moment(endCell.value, 'HH:mm:ss');

                    startDate.hours(momentStart.hours());
                    startDate.minutes(momentStart.minutes());
                    startDate.seconds(momentStart.seconds());

                    endDate.hours(momentEnd.hours());
                    endDate.minutes(momentEnd.minutes());
                    endDate.seconds(momentEnd.seconds());
                }
            }

            const allDay = !isHourRange;

            return {
                title: row.cells[this.descrCol].value,
                allDay,
                start: startDate.toISOString(),
                end: endDate.toISOString(),
                extendedProps: {
                    row,
                },
            };
        });
    }
    private onPrev() {
        this.calendar.prev();
        this.emitNavEvent();
    }

    private onNext() {
        this.calendar.next();
        this.emitNavEvent();
    }

    private emitNavEvent() {
        // see https://fullcalendar.io/docs/view-object
        const to: Date = moment(this.calendar.view.currentEnd)
            .subtract(1, 'day')
            .toDate();

        this.kupCalendarViewChanged.emit({
            from: this.calendar.view.currentStart,
            to,
        });
    }

    private onToday() {
        this.calendar.today();
    }

    // ---- Lifecycle ----
    componentWillLoad() {
        this.startTime = performance.now();
    }

    componentDidLoad() {
        const plugins = [interactionPlugin];
        if (this.weekView) {
            plugins.push(timeGridPlugin);
        } else {
            plugins.push(dayGridPlugin);
        }

        this.calendar = new Calendar(this.calendarContainer, {
            plugins,
            events: this.getEvents(),
            header: {
                left: '',
                center: 'title',
                right: '',
            },
            defaultView: this.weekView ? 'timeGridWeek' : 'dayGridMonth',
            defaultDate: this.initialDate ? this.initialDate : null,
            editable: true,
            eventRender: (info) => {
                if (this.styleCol) {
                    const row: Row = info.event.extendedProps.row;
                    const cell = row.cells[this.styleCol];
                    if (cell && cell.style) {
                        Object.keys(cell.style).forEach(
                            (k) => (info.el.style[k] = cell.style[k])
                        );
                    }
                }

                if (this.iconCol) {
                    const row: Row = info.event.extendedProps.row;
                    const cell = row.cells[this.iconCol];
                    if (cell && cell.value) {
                        const wrapper = document.createElement('div');
                        wrapper.classList.add('icon-wrapper');

                        cell.value.split(';').forEach((icon) => {
                            const span = document.createElement('span');
                            span.className = icon;
                            wrapper.appendChild(span);
                        });

                        info.el.appendChild(wrapper);
                    }
                }

                if (this.imageCol) {
                    const row: Row = info.event.extendedProps.row;
                    const cell = row.cells[this.imageCol];
                    if (cell && cell.value) {
                        const wrapper = document.createElement('div');
                        wrapper.classList.add('image-wrapper');

                        cell.value.split(';').forEach((icon) => {
                            const img = document.createElement('img');
                            img.src = icon;
                            wrapper.appendChild(img);
                        });

                        info.el.appendChild(wrapper);
                    }
                }
            },
            eventClick: ({ event }) => {
                // see https://fullcalendar.io/docs/eventClick
                this.kupCalendarEventClicked.emit(event.extendedProps.row);
            },
            eventDrop: ({ event, oldEvent }) => {
                // https://fullcalendar.io/docs/eventDrop
                this.kupCalendarEventDropped.emit({
                    fromDate: {
                        start: oldEvent.start,
                        end: oldEvent.end,
                    },
                    toDate: {
                        start: event.start,
                        end: event.end,
                    },
                });
            },
            dateClick: ({ date }) => {
                // see https://fullcalendar.io/docs/dateClick
                this.kupCalendarDateClicked.emit(date);
            },
        });

        this.calendar.render();
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
        return (
            <div id="kup-calendar">
                {this.hideNavigation ? null : (
                    <div id="kup-calendar__menu">
                        <kup-button
                            flat
                            icon="chevron_left"
                            onKupButtonClick={() => this.onPrev()}
                        ></kup-button>
                        <kup-button
                            flat
                            icon="calendar"
                            onKupButtonClick={() => this.onToday()}
                        ></kup-button>
                        <kup-button
                            flat
                            icon="chevron_right"
                            onKupButtonClick={() => this.onNext()}
                        ></kup-button>
                    </div>
                )}
                <div ref={(el) => (this.calendarContainer = el)}></div>
            </div>
        );
    }

    disconnectedCallback() {
        if (this.calendar) {
            this.calendar.destroy();
        }
    }
}
