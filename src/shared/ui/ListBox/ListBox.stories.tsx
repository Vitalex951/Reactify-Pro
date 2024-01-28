import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    items: [
        { value: '1', content: 'one' },
        { value: '2', content: 'two' },
        { value: '3', content: 'three', disabled: true },
        { value: '4', content: 'four' },
    ],
    value: '2',
    label: 'hi',
};
