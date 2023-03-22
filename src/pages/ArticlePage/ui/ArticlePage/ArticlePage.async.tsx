import { lazy } from 'react';

export const ArticlePageAsync = lazy(() => new Promise((res) => {
    // @ts-ignore
    setTimeout(() => res(import('./ArticlePage')), 1500);
}));
