import React from 'react';
import { useTranslation } from 'react-i18next';
import s from './MainPage.module.scss';
import AboutPage from '../../AboutPage/ui/AboutPage';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <div>
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
