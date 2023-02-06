import React from 'react';
import './styles/index.scss'
import {classNames} from 'shared/lib/classnames/classnames';
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";


export const App = () => {
  const {theme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar/>
      <AppRouter/>
    </div>
  );
};