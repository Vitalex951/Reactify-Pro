import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { initArticlesPage } from 'pages/ArticlePage/model/services/initArticlesPage/initArticlesPage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initArticlesPage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 2,
                hasMore: true,
                _inited: false,
            },

        });
        await thunk.callThunk();

        expect(fetchArticlesList).toHaveBeenCalled();
    });

    test('fetchArticleList not called', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                _inited: true,
            },
        });
        await thunk.callThunk();

        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
