import { Suspense } from 'react';
import { Story } from '@storybook/react';

export const SuspenseDecorator = (StoryComponent: Story) => {
    return (
        <Suspense>
            <StoryComponent />
        </Suspense>
    );
};
