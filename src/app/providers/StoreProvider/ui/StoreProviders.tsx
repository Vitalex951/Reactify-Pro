import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { ReactNode } from 'react';
import { DeepPartial } from '@reduxjs/toolkit';

interface StoreProvidersProps {
    children?: ReactNode
    initialState?: DeepPartial<StateSchema>
}

export const StoreProviders = ({ children, initialState }: StoreProvidersProps) => {
    const store = createReduxStore(initialState as StateSchema);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
