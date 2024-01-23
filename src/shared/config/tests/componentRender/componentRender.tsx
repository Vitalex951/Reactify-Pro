import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { StateSchema, StoreProviders } from 'app/providers/StoreProvider';
import i18nForTest from '../../../config/i18n/i18nForTest';

export interface ComponentRenderOptions {
    route?: string
    initialState?: DeepPartial<StateSchema>
}

export function componentRender(component: ReactNode, options: ComponentRenderOptions = {}) {
    const {
        route = '/',
        initialState,
    } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProviders initialState={initialState}>
                <I18nextProvider i18n={i18nForTest}>
                    {component}
                </I18nextProvider>
            </StoreProviders>
        </MemoryRouter>,
    );
}
