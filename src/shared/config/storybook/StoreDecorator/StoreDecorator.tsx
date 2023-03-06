import 'app/styles/index.scss';
import { Story } from '@storybook/react';
import { StateSchema, StoreProviders } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export const StoreDecorator = (initialState: DeepPartial<StateSchema>) => (StoryComponent: Story) => {
    return (
        <StoreProviders initialState={initialState}>
            <StoryComponent />
        </StoreProviders>
    );
};
