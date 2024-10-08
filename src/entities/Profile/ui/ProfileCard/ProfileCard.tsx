import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';

import { CountrySelect, Currency, CurrencySelect } from 'entities/Currency';
import { Country } from 'entities/Counter/model/types/Country';
import { HStack, VStack } from 'shared/ui/Stack';
import { Profile } from '../../model/types/profile';
import s from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string
    data?: Profile
    isLoading?: boolean
    error?: string
    readonly?: boolean
    onChangeLastName?: (value: string) => void
    onChangeFirstName?: (value: string) => void
    onChangeAge?: (value: string) => void
    onChangeCity?: (value: string) => void
    onChangeUsername?: (value: string) => void
    onChangeAvatar?: (value: string) => void
    onChangeCurrency?: (currency: Currency) => void
    onChangeCountry?: (country: Country) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        isLoading,
        error,
        data,
        readonly,
        onChangeLastName,
        onChangeFirstName,
        onChangeUsername,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;

    const { t } = useTranslation(['profile']);

    if (isLoading) {
        return (
            <HStack
                justify="center"
                max
                className={classNames(s.ProfileCard, {}, [className, s.loading])}
            >
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack
                justify="center"
                max
                className={classNames(s.ProfileCard, {}, [className, s.error])}
            >
                <Text
                    title={t('profile:error')}
                    text={t('profile:обновить')}
                    align="center"
                    theme={TextTheme.ERROR}
                />
            </HStack>
        );
    }

    const mods: Mods = {
        [s.editing]: !readonly,
    };

    return (
        <VStack
            gap="8"
            max
            className={classNames(s.ProfileCard, mods, [className])}
        >
            {data?.avatar && (
                <HStack justify="center" className={s.avatarWrapper}>
                    <Avatar
                        src={data?.avatar}
                        alt="avatar"
                    />
                </HStack>
            )}

            <Input
                value={data?.first}
                placeholder={t('profile:имя')}
                className={s.input}
                onChange={onChangeFirstName}
                readonly={readonly}
                data-testid="ProfileCard.firstname"
            />
            <Input
                value={data?.lastname}
                placeholder={t('profile:фамилия')}
                className={s.input}
                onChange={onChangeLastName}
                readonly={readonly}
                data-testid="ProfileCard.lastname"
            />
            <Input
                value={data?.age}
                placeholder={t('profile:возраст')}
                className={s.input}
                onChange={onChangeAge}
                readonly={readonly}
                type="number"
                data-testid="ProfileCard.age"
            />
            <Input
                value={data?.city}
                placeholder={t('profile:город')}
                className={s.input}
                onChange={onChangeCity}
                readonly={readonly}
            />
            <Input
                value={data?.username}
                placeholder={t('profile:имя-пользователя')}
                className={s.input}
                onChange={onChangeUsername}
                readonly={readonly}
            />
            <Input
                value={data?.avatar}
                placeholder={t('profile:аватар')}
                className={s.input}
                onChange={onChangeAvatar}
                readonly={readonly}
            />
            <CurrencySelect
                className={s.input}
                onChange={onChangeCurrency}
                value={data?.currency}
                readonly={readonly}
            />

            <CountrySelect
                className={s.input}
                onChange={onChangeCountry}
                value={data?.country}
                readonly={readonly}
            />
        </VStack>
    );
};
