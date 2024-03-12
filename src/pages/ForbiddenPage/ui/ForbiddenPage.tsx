import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { useTranslation } from 'react-i18next';

const ForbiddenPage = () => {
    const { t } = useTranslation('pageError');
    return (
        <Page className={classNames('', {}, [])}>
            {t('Нет доступа')}
        </Page>
    );
};

export default ForbiddenPage;
