import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { forwardRef, memo, ReactNode } from 'react';
import s from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red'
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
    children: ReactNode
}

export const AppLink = forwardRef<HTMLAnchorElement, AppLinkProps>((props, ref) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            className={classNames(s.AppLink, {}, [className, s[theme]])}
            to={to}
            {...otherProps}
            ref={ref}
        >
            {children}
        </Link>
    );
});

export default memo(AppLink);
