import {m} from 'malevic';

import type {ViewProps} from '../../../definitions';

import {AppVersion} from './version';

interface AboutTabProps {
    plus?: boolean;
}

export function AboutTab(props: ViewProps & AboutTabProps): Malevic.Child {
    return <div class="settings-tab about-tab">
        <AppVersion />
    </div>;
}
