import {classNames} from "shared/lib/classnames/classnames";
import s from './ThemeSwitcher.module.scss'
import {Theme, useTheme} from "app/providers/ThemeProvider";
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
  const {theme, toggleTheme} = useTheme()

  return (
    <Button className={classNames(s.ThemeSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}>
      {theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}
    </Button>
  );
};