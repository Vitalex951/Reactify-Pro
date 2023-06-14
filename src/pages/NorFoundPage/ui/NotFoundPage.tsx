import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import s from './NotFoundPage.module.scss';

interface NorFoundPageProps {
  className?: string
}

export const NotFoundPage = ({ className }: NorFoundPageProps) => {
    const { t } = useTranslation('notFound');
    return (
        <Page className={classNames(s.NotFoundPage, {}, [className])}>
            {t('Страница не найдена')}
        </Page>
    );
};
