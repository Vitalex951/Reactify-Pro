import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributes } from 'react';
import s from './Card.module.scss';

export type CardTheme = 'normal' | 'outlined'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children: React.ReactNode
    theme?: CardTheme
}

export const Card = (props: CardProps) => {
    const {
        className,
        children,
        theme = 'normal',
        ...otherProps
    } = props;

    return (
        <div
            className={classNames(s.Card, {}, [className, s[theme]])}
            {...otherProps}
        >
            {children}
        </div>
    );
};
