/* eslint-disable max-len */
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList } from 'entities/Article';
import {
    DynamicModuleLoader,
    ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { Page } from 'widgets/Page/Page';
import { useSearchParams } from 'react-router-dom';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import {
    fetchNextArticlesPage,
} from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import {
    getArticlesPageIsError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { articlesPageReducer, getArticles } from '../../model/slices/articlesPageSlice';
import s from './ArticlesPage.module.scss';

interface ArticlePageProps {
    className?: string
}

const reducers: ReducerList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = ({ className }: ArticlePageProps) => {
    const [searchParams] = useSearchParams();
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const error = useSelector(getArticlesPageIsError);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(s.ArticlePage, {}, [className])}
            >
                <ArticlesPageFilters />
                <ArticleList
                    view={view}
                    isLoading={isLoading}
                    articles={articles}
                    className={s.list}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default ArticlesPage;
