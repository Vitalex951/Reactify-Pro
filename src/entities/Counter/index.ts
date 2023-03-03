import { Counter } from 'entities/Counter/ui/Counter';
import { counterReducer } from 'entities/Counter/model/slice/counterSlice';
import { CounterSchema } from './model/types/counterSchema';

export {
    CounterSchema,
    Counter,
    counterReducer,
};
