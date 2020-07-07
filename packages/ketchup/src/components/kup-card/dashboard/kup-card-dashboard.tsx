import { h } from '@stencil/core';
import { KupCard } from '../kup-card';

export function create1(component: KupCard) {
    let componentClass =
        'dashboard-layout-' + component.layoutNumber + ' dashboard-card';
    let CSSVariables = {
        ['--multiplier']: '1',
    };
    return (
        <div class={componentClass} style={CSSVariables}>
            <div class="dashboard-element">
                <div class="description">
                    <div>{component.data['text1']}</div>
                </div>
                <div class="value">
                    <div>{component.data['text2']}</div>
                </div>
            </div>
        </div>
    );
}

export function create2(component: KupCard) {
    let componentClass =
        'dashboard-layout-' + component.layoutNumber + ' dashboard-card';
    let CSSVariables = {
        ['--color-1']: component.data['color1'],
        ['--multiplier']: '1',
    };
    return (
        <div class={componentClass} style={CSSVariables}>
            <div class="dashboard-element">
                <div class="icon">
                    {component.data['image1'] && (
                        <kup-image
                            sizeX="1em"
                            sizeY="1em"
                            color={component.data['color1']}
                            id="image1"
                            customStyle="img {object-fit: contain;}"
                            {...component.data['image1']}
                        ></kup-image>
                    )}
                </div>
                <div class="value-int">
                    <div>{component.data['text1']},</div>
                </div>
                <div class="value-dec">
                    <div>{component.data['text2']}</div>
                </div>
                <div class="unit">
                    <div>{component.data['text3']}</div>
                </div>
            </div>
        </div>
    );
}

export function create3(component: KupCard) {
    let componentClass =
        'dashboard-layout-' + component.layoutNumber + ' dashboard-card';
    let CSSVariables = {
        ['--multiplier']: '1',
    };
    return (
        <div class={componentClass} style={CSSVariables}>
            <div class="dashboard-element">
                <div class="value">
                    <div>{component.data['text1']}</div>
                </div>
                <div class="descr">
                    <div>{component.data['text2']}</div>
                </div>
            </div>
        </div>
    );
}

export function create4(component: KupCard) {
    let componentClass =
        'dashboard-layout-' + component.layoutNumber + ' dashboard-card';
    let CSSVariables = {
        ['--color-1']: component.data['color1'],
        ['--multiplier']: '1',
    };
    return (
        <div class={componentClass} style={CSSVariables}>
            <div class="dashboard-element">
                <div class="icon">
                    {component.data['image1'] && (
                        <kup-image
                            sizeX="1em"
                            sizeY="1em"
                            color={component.data['color1']}
                            id="image1"
                            customStyle="img {object-fit: contain;}"
                            {...component.data['image1']}
                        ></kup-image>
                    )}
                </div>

                <div class="value-and-unit">
                    <div class="value-int">
                        <div>{component.data['text1']},</div>
                    </div>
                    <div class="value-dec">
                        <div>{component.data['text2']}</div>
                    </div>
                    <div class="unit">
                        <div>{component.data['text3']}</div>
                    </div>
                </div>

                <div class="empty-placeholder"></div>

                <div class="descr">
                    <div>{component.data['text4']}</div>
                </div>
            </div>
        </div>
    );
}
