import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IComment } from 'entities/Comment';
import { StateSchema } from 'app/providers/StoreProvider';
import {
    fetchCommentsByArticleId,
} from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';

const commentsAdapter = createEntityAdapter<IComment>({
    selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.comments || commentsAdapter.getInitialState(),
);

export const articleDetailsCommentSlice = createSlice({
    name: 'articleDetailsCommentSlice',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
        isLoading: false,
        ids: [],
        error: undefined,
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<IComment[]>) => {
                state.isLoading = false;
                commentsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});
export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentSlice;
export const { actions: articleDetailsCommentsActions } = articleDetailsCommentSlice;
