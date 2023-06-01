import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import {
    getProfileData,
    getProfileReadonly,
    profileActions,
    updateProfileData,
} from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import s from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation(['profile']);

    const readonly = useSelector(getProfileReadonly);
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(s.ProfilePageHeader, {}, [className])}>
            <Text text={t('profile:профиль')} />
            {canEdit && (
                <div className={s.btnsWrapper}>
                    {readonly
                        ? (
                            <Button
                                className={s.editBtn}
                                theme={ButtonTheme.OUTLINE}
                                onClick={onEdit}
                            >
                                {t('profile:редактировать')}
                            </Button>
                        )
                        : (
                            <>
                                <Button
                                    className={s.editBtn}
                                    theme={ButtonTheme.OUTLINE_RED}
                                    onClick={onCancelEdit}
                                >
                                    {t('profile:отменить')}
                                </Button>
                                <Button
                                    className={s.saveBtn}
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={onSave}
                                >
                                    {t('profile:сохранить')}
                                </Button>
                            </>
                        )}
                </div>
            )}
        </div>
    );
};
