import { classNames } from 'shared/lib/classNames/classNames';
import { memo, ReactNode } from 'react';
import { Card } from 'shared/ui/Card/Card';
import s from './Tabs.module.scss';

export interface TabItem {
    value: string
    content: ReactNode
}

interface TabsProps {
    className?: string
    tabs: TabItem[]
    value: string
    onTabClick: (tab: TabItem) => void
}

export const Tabs = memo((props: TabsProps) => {
    const {
        className,
        tabs,
        value,
        onTabClick,
    } = props;

    const clickHandler = (tab: TabItem) => {
        return () => {
            onTabClick(tab);
        };
    };

    return (
        <div className={classNames(s.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    theme={tab.value === value ? 'normal' : 'outlined'}
                    className={s.Tabs}
                    key={tab.value}
                    onClick={clickHandler(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});
