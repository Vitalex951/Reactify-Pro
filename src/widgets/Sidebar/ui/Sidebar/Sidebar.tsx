import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, useState } from 'react';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem/SidebarItem';
import s from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar = memo((props: SidebarProps) => {
    const {
        className,
    } = props;
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <menu
            data-testid="sidebar"
            className={classNames(s.Sidebar, { [s.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={s.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={s.items}>
                {sidebarItemsList.map((item) => (
                    <SidebarItem
                        key={item.path}
                        item={item}
                        collapsed={collapsed}
                    />
                ))}
            </div>
            <div className={s.switchers}>
                <ThemeSwitcher />
                <LangSwitcher
                    short={collapsed}
                    className={s.lang}
                />
            </div>
        </menu>
    );
});
