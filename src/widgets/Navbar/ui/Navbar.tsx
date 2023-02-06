import React from 'react';
import s from './Navbar.module.scss'
import {classNames} from "shared/lib/classnames/classnames";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface NavbarProps {
  className?: string
}

export const Navbar = ({className}: NavbarProps) => {

  return (
    <div className={classNames(s.Navbar, {}, [className])}>
      <ThemeSwitcher/>
      <div className={s.links}>
        <AppLink theme={AppLinkTheme.SECONDARY}
                 className={s.mainLink}
                 to={'/'}>
          Главная
        </AppLink>
        <AppLink className={s.mainLink}
                 theme={AppLinkTheme.SECONDARY}
                 to={'/about'}>
          О Сайте
        </AppLink>
      </div>

    </div>
  );
};
