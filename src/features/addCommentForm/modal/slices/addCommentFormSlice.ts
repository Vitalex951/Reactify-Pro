import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/addCommentForm';

const initialState: AddCommentFormSchema = {
    error: undefined,
    text: '',
};

export const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
    extraReducers: (builder) => {
        // builder
        //     .addCase(fetchCommentsByArticleId.pending, (state) => {
        //         state.error = undefined;
        //         state.isLoading = true;
        //     })
        //     .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<IComment[]>) => {
        //         state.isLoading = false;
        //         commentsAdapter.setAll(state, action.payload);
        //     })
        //     .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        //         state.isLoading = false;
        //         state.error = action.payload;
        //     });
    },
});
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
export const { actions: addCommentFormActions } = addCommentFormSlice;
