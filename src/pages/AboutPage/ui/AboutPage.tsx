import React from 'react';
import s from './AboutPage.module.scss'
import {useTranslation} from "react-i18next";

const AboutPage = () => {
  const {t} = useTranslation('about')
  return (
    <div>
      {t('О сайте')}
      {t('about:о132123123123--123123.123123')}
    </div>
  );
};

export default AboutPage