import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classnames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import s from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation('navbar');
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);
    return (
        <div className={classNames(s.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={s.links}
                onClick={onToggleModal}
            >
                {t('navbar:войти')}
            </Button>

            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                ..
            </Modal>
        </div>
    );
};
