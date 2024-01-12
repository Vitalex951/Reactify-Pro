import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import s from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T
    content: string
}

interface SelectProps<T extends string> {
    className?: string
    label?: string
    options?: SelectOption<T>[]
    value?: T
    onChange?: (value: T) => void
    readonly?: boolean
}

const typedMemo: <T>(c: T) => T = memo;

export const Select = typedMemo(<T extends string>(props: SelectProps<T>) => {
    const {
        className,
        label,
        options,
        onChange,
        value,
        readonly,
    } = props;

    const optionList = useMemo(() => {
        return options?.map((el) => (
            <option
                className={s.option}
                value={el.value}
                key={el.value}
            >
                {el.content}
            </option>
        ));
    }, [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value as T);
        }
    };

    const mods: Mods = {};
    return (
        <div className={classNames(s.Select, mods, [className])}>
            {label && (
                <span className={s.label}>
                    {`${label}>`}
                </span>
            )}
            <select
                className={s.select}
                disabled={readonly}
                value={value}
                onChange={onChangeHandler}
            >
                {optionList}
            </select>
        </div>
    );
});
