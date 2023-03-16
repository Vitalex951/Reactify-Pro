import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selector/getProfileData/getProfileFirstName';
import {
    getProfileIsLoading,
} from 'entities/Profile/model/selector/getProfileIsLoading/getProfileFirstName';
import { getProfileError } from 'entities/Profile/model/selector/getProfileError/getProfileFirstName';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import s from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation(['profile']);
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(s.ProfileCard, {}, [className])}>
            <div className={s.header}>
                <Text text={t('profile:профиль')} />
                <Button
                    className={s.editBtn}
                    theme={ButtonTheme.OUTLINE}
                >
                    {t('profile:редактировать')}
                </Button>
            </div>
            <div className={s.data}>
                <Input
                    value={data?.first}
                    placeholder={t('profile:имя')}
                    className={s.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('profile:фамилия')}
                    className={s.input}
                />
            </div>
        </div>
    );
};
