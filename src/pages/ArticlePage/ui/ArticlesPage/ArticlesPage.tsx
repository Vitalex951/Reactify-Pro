/* eslint-disable max-len */
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';
import {
    DynamicModuleLoader,
    ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { Page } from 'shared/ui/Page/Page';
import {
    fetchNextArticlesPage,
} from 'pages/ArticlePage/model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import {
    getArticlesPageIsError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import {
    articlesPageActions,
    articlesPageReducer,
    getArticles,
} from '../../model/slices/articlesPageSlice';
import s from './ArticlesPage.module.scss';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';

interface ArticlePageProps {
    className?: string
}

const reducers: ReducerList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = ({ className }: ArticlePageProps) => {
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageIsError);
    const isLoading = useSelector(getArticlesPageIsLoading);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(articlesPageActions.initState());
        dispatch(fetchArticlesList({
            page: 1,
        }));
    });

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(s.ArticlePage, {}, [className])}
            >
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
                <ArticleList
                    view={view}
                    isLoading={isLoading}
                    articles={articles}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default ArticlesPage;
