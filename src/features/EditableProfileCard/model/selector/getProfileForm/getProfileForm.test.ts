import { StateSchema } from 'app/providers/StoreProvider';
import { Country, Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('should return form', () => {
        const form = {
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
                form,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
