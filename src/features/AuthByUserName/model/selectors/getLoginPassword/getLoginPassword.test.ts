import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
    test('should return 123', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: 'test',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('test');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual('123');
    });
});
