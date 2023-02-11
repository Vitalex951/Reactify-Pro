import React from 'react';
import { useTranslation } from 'react-i18next';
import s from './AboutPage.module.scss';

const AboutPage = () => {
    const { t } = useTranslation('about');
    return (
        <div>
            {t('О сайте')}
            {t('about:о132123123123--123123.123123')}
        </div>
    );
};

export default AboutPage;
