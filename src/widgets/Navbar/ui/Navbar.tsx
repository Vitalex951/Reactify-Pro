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
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    className={s.mainLink}
                    to="/"
                >
                    {t('navbar:главная')}
                </AppLink>
                <AppLink
                    className={s.mainLink}
                    theme={AppLinkTheme.SECONDARY}
                    to="/about"
                >
                    {t('navbar:о-сайте')}
                </AppLink>
            </div>

        </div>
    );
};
