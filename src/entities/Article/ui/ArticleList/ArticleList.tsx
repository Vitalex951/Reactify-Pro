import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { Article, ArticleView } from '../../model/types/article';
import s from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string
    articles: Article[]
    isLoading?: boolean
    view?: ArticleView
}

const getSkeletons = (view: ArticleView) => {
    return new Array(view === 'SMALL' ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton
                key={index}
                view={view}
            />
        ));
};

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        view = 'SMALL',
        isLoading = false,
    } = props;

    const { t } = useTranslation('');

    const renderArticle = (article: Article) => {
        return (
            <ArticleListItem
                key={article.id}
                article={article}
                view={view}
            />
        );
    };
    return (
        <div className={classNames(s.ArticleList, {}, [className, s[view]])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
});
