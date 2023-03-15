import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/ui/const/localStorage';
import { ThunkConfig, ThunkExtraArg } from 'app/providers/StoreProvider';

interface LoginByUserNameProps {
    userName: string
    password: string
}

export const loginByUserName = createAsyncThunk<User, LoginByUserNameProps, ThunkConfig<string>>(
    'login/loginByUserName',
    async (/* { userName, password } */ authData, thunkAPI) => {
        const { extra, dispatch, rejectWithValue } = thunkAPI;
        try {
            const response = await extra.api.post(
                '/login',

                authData,
            );

            if (!response.data) {
                console.log('err');
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));
            extra.navigate('/profile');
            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
