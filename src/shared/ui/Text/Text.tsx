import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import s from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
    INVERTED = 'inverted'
}

export type TextAlign = 'right' | 'left' | 'center'
export type TextSize = 'M' | 'L' | 'S'

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
    align?: TextAlign
    size?: TextSize

   'data-testid'?: string
}

type HeaderTagType = 'h1' | 'h2' | 'h3'

const mapSizeToHeaderTeg: Record<TextSize, HeaderTagType> = {
    S: 'h3',
    M: 'h2',
    L: 'h1',
};

export const Text = memo((props: TextProps) => {
    const {
        text,
        theme = TextTheme.PRIMARY,
        title,
        className,
        align = 'left',
        size = 'M',
        'data-testid': dataTestId = 'Text',
    } = props;

    const HeaderTag = mapSizeToHeaderTeg[size];

    return (
        <div className={classNames(s.Text, {}, [className, s[theme], s[align], s[`size${size}`]])}>
            {title && (
                <HeaderTag
                    data-testid={`${dataTestId}.Header`}
                    className={s.title}
                >
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p
                    data-testid={`${dataTestId}.Paragraph`}
                    className={s.text}
                >
                    {text}
                </p>)}
        </div>
    );
});
