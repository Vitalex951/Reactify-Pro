import { StateSchema } from 'app/providers/StoreProvider';
import { Country, Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileData.test', () => {
    test('should return validateErrors', () => {
        const validateErrors = {
            age: 22,
            country: Country.Belarus,
            first: 'vit',
            lastname: 'alex',
            username: 'vitalex',
            currency: Currency.RUB,
            city: 'Minsk',
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    ValidateProfileError.NO_DATA,
                    ValidateProfileError.SERVER_ERROR,
                ],
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            ValidateProfileError.NO_DATA,
            ValidateProfileError.SERVER_ERROR,
        ]);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
