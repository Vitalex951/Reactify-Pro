import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPagePage,
} from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import {
    fetchArticlesList,
} from '../fetchArticlesList/fetchArticlesList';

export const fetchNextArticlesPage = createAsyncThunk<void,
    void,
    ThunkConfig<string>>(
        'articlesPage/fetchNextArticlesPage',
        async (_, thunkApi) => {
            const { getState, dispatch } = thunkApi;
            const page = getArticlesPagePage(getState());
            const isLoading = getArticlesPageIsLoading(getState());
            const hasMore = getArticlesPageHasMore(getState());
            if (hasMore && !isLoading) {
                dispatch(articlesPageActions.setPage(page + 1));
                dispatch(fetchArticlesList({
                    page: 1 + page,
                }));
            }
        },
    );
