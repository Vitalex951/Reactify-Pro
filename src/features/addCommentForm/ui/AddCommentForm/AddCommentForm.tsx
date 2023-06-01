import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    DynamicModuleLoader,
    ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Button } from 'shared/ui/Button/Button';
import { addCommentFormActions, addCommentFormReducer } from '../../modal/slices/addCommentFormSlice';
import {
    getAddCommentFormError,
    getAddCommentFormText,
} from '../../modal/selectors/addCommentFormSelectors';
import s from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
    className?: string
    onSendComment: (text: string) => void
}

const reducers: ReducerList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const {
        className,
        onSendComment,
    } = props;

    const { t } = useTranslation('article');
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(s.AddCommentForm, {}, [className])}>
                <Input
                    className={s.input}
                    placeholder={t('article:inputAddComment')}
                    value={text || ''}
                    onChange={onCommentTextChange}
                />
                <Button
                    onClick={onSendHandler}
                >
                    {t('article:buttonSend')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
