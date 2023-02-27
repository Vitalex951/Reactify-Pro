import { classNames } from 'shared/lib/classNames/classnames';
import { ButtonHTMLAttributes, FC } from 'react';
import s from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    square?: boolean;
    size?: ButtonSize
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        square,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [s.square]: square,
    };

    return (
        <button
            type="button"
            className={classNames(s.Button, mods, [className, s[theme], s[size]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
