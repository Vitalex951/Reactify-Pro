import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { initArticlesPage } from './initArticlesPage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');
const searchParams = new URLSearchParams();
describe('initArticlesPage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 2,
                hasMore: true,
                _inited: false,
            },

        });

        await thunk.callThunk(searchParams);

        expect(fetchArticlesList).toHaveBeenCalled();
    });

    test('fetchArticleList not called', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                _inited: true,
            },
        });
        await thunk.callThunk(searchParams);

        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
