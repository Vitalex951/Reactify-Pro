import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import s from './ArticlePage.module.scss';

interface ArticlePageProps {
    className?: string
}

const ArticlePage = ({ className }: ArticlePageProps) => {
    const { t } = useTranslation('article');
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(s.ArticlePage, {}, [className])}>
            ArticlePage
        </div>
    );
};

export default ArticlePage;
