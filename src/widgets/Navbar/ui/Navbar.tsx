import React from 'react';
import { classNames } from 'shared/lib/classnames/classnames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import s from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(s.Navbar, {}, [className])}>
        <div className={s.links}>
            <AppLink
                theme={AppLinkTheme.SECONDARY}
                className={s.mainLink}
                to="/"
            >
                Главная
            </AppLink>
            dsfsdf
            <AppLink
                className={s.mainLink}
                theme={AppLinkTheme.SECONDARY}
                to="/about"
            >
                О Сайте
            </AppLink>
        </div>

    </div>
);
