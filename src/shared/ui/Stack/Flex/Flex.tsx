import { ReactNode } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import s from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '4' | '8' | '16' | '32';

export interface FlexProps {
    className?: string
    children: ReactNode
    justify?: FlexJustify
    align?: FlexAlign
    direction?: FlexDirection
    gap?: FlexGap
    max?: boolean
}

const alignClasses: Record<FlexAlign, string> = {
    start: s.alignStart,
    end: s.alignEnd,
    center: s.alignCenter,
};

const justifyClasses: Record<FlexJustify, string> = {
    start: s.justifyStart,
    end: s.justifyEnd,
    center: s.justifyCenter,
    between: s.justifyBetween,
};

const directionClasses: Record<FlexDirection, string> = {
    row: s.directionRow,
    column: s.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
    4: s.gap4,
    8: s.gap8,
    16: s.gap16,
    32: s.gap32,
};

export const Flex = (props: FlexProps) => {
    const {
        className,
        children,
        justify = 'start',
        direction = 'row',
        align = 'center',
        gap,
        max,
    } = props;

    const mods: Mods = {
        [s.max]: max,
    };

    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
    ];

    return (
        <div className={classNames(s.Flex, mods, classes)}>
            {children}
        </div>
    );
};
