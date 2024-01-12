import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Article } from 'entities/Article';
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticlesById/fetchArticleById';

const data: Article = {
    blocks: [
        {
            id: '1',
            title: 'test',
            type: ArticleBlockType.TEXT,
            paragraphs: ['test'],
        },
    ],
    title: 'TEST',
    id: '1',
    user: {
        id: '1',
        userName: 'Vitalex',
    },
    type: [ArticleType.IT],
    img: '1234',
    views: 1,
    subtitle: 'test',
    createdAt: 'test',
};

describe('fetchArticleById.test.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error login ', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
