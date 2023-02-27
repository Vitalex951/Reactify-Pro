import React from 'react';
import { classNames } from 'shared/lib/classNames/classnames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import s from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation('navbar');

    return (
        <div className={classNames(s.Navbar, {}, [className])}>
            <div className={s.links}>
                /
            </div>
        </div>
    );
};
