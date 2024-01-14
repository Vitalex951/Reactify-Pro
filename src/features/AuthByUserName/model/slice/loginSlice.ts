import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    loginByUserName,
} from '../service/loginByUserName/loginByUserName';
import { LoginSchema } from '../types/LoginSchema';

const initialState: LoginSchema = {
    isLoading: false,
    userName: '',
    password: '',
};

export const loginSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserName: (state, action: PayloadAction<string>) => {
            state.userName = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUserName.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(loginByUserName.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(loginByUserName.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});
export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
