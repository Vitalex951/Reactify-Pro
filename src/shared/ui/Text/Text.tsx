import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import s from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export type TextAlign = 'right' | 'left' | 'center'

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme? : TextTheme
    align?: TextAlign
}

export const Text = memo((props: TextProps) => {
    const {
        text,
        theme = TextTheme.PRIMARY,
        title,
        className,
        align = 'left',
    } = props;

    return (
        <div className={classNames(s.Text, {}, [className, s[theme], s[align]])}>
            {title && <p className={s.title}>{title}</p>}
            {text && <p className={s.text}>{text}</p>}
        </div>
    );
});
