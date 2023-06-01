import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributes } from 'react';
import s from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children: React.ReactNode
}

export const Card = (props: CardProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props;

    return (
        <div
            className={classNames(s.Card, {}, [className])}
            {...otherProps}
        >
            {children}
        </div>
    );
};
