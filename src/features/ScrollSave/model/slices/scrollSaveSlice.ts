import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollSaveSchema } from 'features/ScrollSave';

const initialState: ScrollSaveSchema = {
    scroll: {},
};

export const scrollSaveSlice = createSlice({
    name: 'scrollSave',
    initialState,
    reducers: {
        setScrollPosition: (state, { payload }: PayloadAction<{path: string, position: number}>) => {
            state.scroll[payload.path] = payload.position;
        },
    },
    extraReducers: (builder) => {
        // builder
        //     .addCase(fetchScrollSaveData.pending, (state) => {
        //         state.isLoading = true;
        //         state.error = undefined;
        //     })
        //     .addCase(fetchScrollSaveData.fulfilled, (state, action: PayloadAction<ScrollSave>) => {
        //         state.isLoading = false;
        //         state.data = action.payload;
        //     })
        //     .addCase(fetchScrollSaveData.rejected, (state, action) => {
        //         state.isLoading = false;
        //         state.error = action.payload;
        //     });
    },
});

export const { actions: scrollSaveActions } = scrollSaveSlice;
export const { reducer: scrollSaveReducer } = scrollSaveSlice;
