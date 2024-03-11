import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack';
import { EditableProfileCard } from 'features/EditableProfileCard';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';

const ProfilePage = () => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation('profile');

    if (!id) {
        return <Text text={t('profile:error')} />;
    }

    return (
        <Page className={classNames('', {}, [])}>
            <VStack
                gap="16"
                max
            >

                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
