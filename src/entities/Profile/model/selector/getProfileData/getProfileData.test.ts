import { StateSchema } from 'app/providers/StoreProvider';
import { Country, Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('should return data', () => {
        const data = {
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
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
