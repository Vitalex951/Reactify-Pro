import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { ArticleType } from 'entities/Article/model/types/article';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from './articleDetails';

describe('getArticleDetailsData.test', () => {
    test('should return data', () => {
        const data: Article = {
            blocks: [],
            img: '123',
            createdAt: 'test',
            type: [ArticleType.IT],
            title: 'Test',
            user: {
                id: '1',
                userName: 'Vitalex',
            },
            views: 123,
            subtitle: '123',
            id: '1',
        };
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data,
            },
        };
        expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
    });
});

describe('getArticleDetailsError.test', () => {
    test('should return data', () => {
        const error = 'error';
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error,
            },
        };
        expect(getArticleDetailsError(state as StateSchema)).toEqual(error);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
    });
});

describe('getArticleDetailsIsLoading.test', () => {
    test('should return data', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
            },
        };
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(undefined);
    });
});
