import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import s from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
    INVERTED = 'inverted'
}

export type TextAlign = 'right' | 'left' | 'center'
export type TextSize = 'M' | 'L'

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
    align?: TextAlign
    size?: TextSize
}

export const Text = memo((props: TextProps) => {
    const {
        text,
        theme = TextTheme.PRIMARY,
        title,
        className,
        align = 'left',
        size = 'M',
    } = props;

    return (
        <div className={classNames(s.Text, {}, [className, s[theme], s[align], s[`size${size}`]])}>
            {title && <p className={s.title}>{title}</p>}
            {text && <p className={s.text}>{text}</p>}
        </div>
    );
});
