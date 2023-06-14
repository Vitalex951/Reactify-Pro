import { Article, ArticleView } from 'entities/Article';
import { EntityState } from '@reduxjs/toolkit';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean
    error?: string

    view: ArticleView
    // pagination

    page: number
    hasMore: boolean
    limit?:number

    _inited: boolean
}
