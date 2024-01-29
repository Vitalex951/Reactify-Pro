import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: 120 }}><Story /></div>,
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const TopLeft = Template.bind({});
TopLeft.args = {
    items: [
        { value: '1', content: 'one' },
        { value: '2', content: 'two' },
        { value: '3', content: 'three', disabled: true },
    ],
    value: '2',
    label: 'hi',
    direction: 'top left',
};

export const TopRight = Template.bind({});
TopRight.args = {
    items: [
        { value: '1', content: 'one' },
        { value: '2', content: 'two' },
        { value: '3', content: 'three', disabled: true },
    ],
    value: '2',
    label: 'hi',
    direction: 'top right',
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    items: [
        { value: '1', content: 'one' },
        { value: '2', content: 'two' },
        { value: '3', content: 'three', disabled: true },
    ],
    value: '2',
    label: 'hi',
    direction: 'bottom left',
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    items: [
        { value: '1', content: 'one' },
        { value: '2', content: 'two' },
        { value: '3', content: 'three', disabled: true },
    ],
    value: '2',
    label: 'hi',
    direction: 'bottom right',
};
