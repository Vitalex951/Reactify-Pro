import { ScrollSaveSchema } from './model/types/ScrollSave';
import { getScrollSaveByPath } from './model/selectors/scrollSave';
import {
    scrollSaveReducer,
    scrollSaveActions,
} from './model/slices/scrollSaveSlice';

export {
    ScrollSaveSchema,
    scrollSaveActions,
    getScrollSaveByPath,
    scrollSaveReducer,
};
