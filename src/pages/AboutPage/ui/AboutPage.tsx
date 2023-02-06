import React from 'react';
import s from './AboutPage.module.scss'
import {useTranslation} from "react-i18next";

const AboutPage = () => {
  const {t} = useTranslation('about')
  return (
    <div>
      {t('О сайте')}
    </div>
  );
};

export default AboutPage