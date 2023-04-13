import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import s from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation('article');

    if (!id) {
        return (
            <div className={classNames(s.ArticleDetailsPage, {}, [className])}>
                {t('article:noArticle')}
            </div>
        );
    }

    return (
        <div className={classNames(s.ArticleDetailsPage, {}, [className])}>
            <ArticleDetails id={id} />
        </div>
    );
};

export default ArticleDetailsPage;
