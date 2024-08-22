import { Currency } from 'entities/Currency';
import { Country } from 'entities/Counter';
import { profileActions, profileReducer } from './profileSlice';
import {
    updateProfileData,
} from '../services/updateProfileData/updateProfileData';
import { ProfileSchema, ValidateProfileError } from '../types/editableProfileCardSchema';

const data = {
    age: 22,
    country: Country.Belarus,
    first: 'vit',
    lastname: 'alex',
    username: 'vitalex',
    currency: Currency.RUB,
    city: 'Minsk',
};

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true),
        )).toEqual({ readonly: true });
    });

    test('test set cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = { data };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit(),
        )).toEqual({
            form: data,
            data,
            validateErrors: undefined,
            readonly: true,
        });
    });

    test('test set update Profile', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: { lastname: 'test' },
        };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({ lastname: 'vit' }),
        )).toEqual({
            form: {
                lastname: 'vit',
            },
        });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            form: data,
            data,
        });
    });
});
