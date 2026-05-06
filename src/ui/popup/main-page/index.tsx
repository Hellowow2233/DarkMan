import {m} from 'malevic';

import type {ViewProps} from '../../../definitions';

import AppSwitch from './app-switch';
import SiteToggleGroup from './site-toggle';

function SwitchGroup(props: ViewProps) {
    return (
        <Array>
            <AppSwitch {...props} />
            <SiteToggleGroup {...props} />
        </Array>
    );
}

type MainPageProps = ViewProps;

export default function MainPage(props: MainPageProps) {
    return (
        <Array>
            <section class="m-section">
                <SwitchGroup {...props} />
            </section>
        </Array>
    );
}
