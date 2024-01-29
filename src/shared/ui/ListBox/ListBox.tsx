import { Fragment, memo, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { DropDownDirection } from 'shared/types/ui';
import { HStack } from '../Stack';
import { classNames } from '../../lib/classNames/classNames';
import { Button } from '../Button/Button';
import s from './ListBox.module.scss';

export interface ListBoxItem {
    value: string
    content: ReactNode
    disabled?: boolean
}

interface ListBoxProps {
    items: ListBoxItem[]
    className?: string
    value?: string
    defaultValue?: string
    onChange: <T extends string>(value: T) => void
    readonly?: boolean
    label?: string
    direction?: DropDownDirection
}

const mapDirectionClass: Record<DropDownDirection, string> = {
    'bottom left': s.optionsBottomLeft,
    'bottom right': s.optionsBottomRight,
    'top left': s.optionsTopLeft,
    'top right': s.optionsTopRight,
};

export const ListBox = memo((props: ListBoxProps) => {
    const {
        items,
        className,
        defaultValue,
        value,
        onChange,
        readonly = false,
        label,
        direction = 'bottom right',
    } = props;

    const optionsClass = [mapDirectionClass[direction]];

    return (
        <HStack gap="4">
            {label && (
                <span>
                    {`${label}>`}
                </span>
            )}
            <HListBox
                disabled={readonly}
                as="div"
                value={value}
                onChange={onChange}
                className={classNames(s.ListBox, {}, [className])}
            >
                <HListBox.Button
                    className={s.trigger}
                >
                    <Button disabled={readonly}>
                        {value || defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options className={classNames(s.options, {}, optionsClass)}>
                    {items.map((item) => (

                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active }) => (
                                <li className={
                                    classNames(
                                        s.item,
                                        {
                                            [s.active]: active,
                                            [s.disabled]: item.disabled,
                                        },
                                        [],
                                    )
                                }
                                >
                                    {item.content}
                                </li>)}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>

    );
});
