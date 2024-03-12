import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

interface AdminPanelPageProps {
    className?: string
}

const AdminPanelPage = memo((props: AdminPanelPageProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('main');
    return (
        <Page className={classNames('', {}, [className])}>
            {t('admin')}
        </Page>
    );
});

export default AdminPanelPage;
