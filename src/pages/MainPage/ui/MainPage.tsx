import React from 'react';
import s from './MainPage.module.scss'
import AboutPage from "../../AboutPage/ui/AboutPage";
import {useTranslation} from "react-i18next";

const MainPage = () => {
  const {t} = useTranslation('main')
  return (
    <div>
      {t('Главная страница')}
    </div>
  );
};

export default MainPage