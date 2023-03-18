import { classNames, Mods } from 'shared/lib/classNames/classNames';
import {
    ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef,
} from 'react';
import s from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string | number
    onChange?: (value: string) => void
    autofocus?: boolean
    readonly?: boolean
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        readonly = false,
        ...otherProps
    } = props;
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autofocus) {
            ref.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const mods: Mods = {
        [s.readonly]: readonly,
    };
    return (
        <div className={classNames(s.InputWrapper, mods, [className])}>
            {placeholder
                && (
                    <div className={s.placeholder}>
                        {`${placeholder}>`}
                    </div>
                )}
            <input
                ref={ref}
                className={s.input}
                type={type}
                value={value}
                readOnly={readonly}
                onChange={onChangeHandler}
                {...otherProps}
            />
        </div>
    );
});
