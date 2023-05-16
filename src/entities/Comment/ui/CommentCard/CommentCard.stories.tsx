import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CommentCard } from './CommentCard';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    comment: {
        id: '1',
        text: 'hello',
        user: {
            id: '1',
            userName: 'vit',
        },
    },
};

export const Loading = Template.bind({});
Loading.args = {
    comment: {
        id: '1',
        text: 'hello',
        user: {
            id: '1',
            userName: 'vit',
        },
    },
    isLoading: true,
};

export const LoadingDark = Template.bind({});
LoadingDark.args = {
    comment: {
        id: '1',
        text: 'hello',
        user: {
            id: '1',
            userName: 'vit',
        },
    },
    isLoading: true,
};
LoadingDark.decorators = [ThemeDecorator(Theme.DARK)];
