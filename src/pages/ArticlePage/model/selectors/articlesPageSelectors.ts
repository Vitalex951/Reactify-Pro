import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading;
export const getArticlesPageIsError = (state: StateSchema) => state.articlesPage?.error;
export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view || 'SMALL';
export const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit || 9;
export const getArticlesPagePage = (state: StateSchema) => state.articlesPage?.page || 1;
export const getArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore;
