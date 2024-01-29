import { Menu } from '@headlessui/react';
import { Fragment, memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropDownDirection } from 'shared/types/ui';
import AppLink from '../AppLink/AppLink';
import s from './Dropdown.module.scss';

export interface DropdownItem {
    disabled?: boolean
    content?: ReactNode
    onClick?: () => void
    href?: string
}

interface DropdownProps {
    className?: string
    items: DropdownItem[]
    trigger: ReactNode
    direction?: DropDownDirection
}

const mapDirectionClass: Record<DropDownDirection, string> = {
    'bottom left': s.optionsBottomLeft,
    'bottom right': s.optionsBottomRight,
    'top left': s.optionsTopLeft,
    'top right': s.optionsTopRight,
};

export const Dropdown = memo((props: DropdownProps) => {
    const {
        className,
        trigger,
        items,
        direction = 'bottom right',
    } = props;

    const menuClass = [mapDirectionClass[direction]];

    return (
        <Menu as="div" className={classNames(s.Dropdown, {}, [className])}>

            <Menu.Button className={s.btn}>
                {trigger}
            </Menu.Button>

            <Menu.Items className={classNames(s.menu, {}, menuClass)}>
                {items.map((item, index) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            type="button"
                            disabled={item.disabled}
                            onClick={item.onClick}
                            className={classNames(s.item, { [s.active]: active }, [])}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item
                                as={AppLink}
                                to={item.href}
                                disabled={item.disabled}
                                key={index}
                            >
                                {content}
                            </Menu.Item>);
                    }
                    return (
                        <Menu.Item as={Fragment} disabled={item.disabled} key={index}>
                            {content}
                        </Menu.Item>);
                })}
            </Menu.Items>
        </Menu>
    );
});
