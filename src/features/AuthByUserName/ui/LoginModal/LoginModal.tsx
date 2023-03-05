import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from 'features/AuthByUserName/ui/LoginForm/LoginForm';

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}

export const LoginModal = ({ className, onClose, isOpen }: LoginModalProps) => {
    const { t } = useTranslation('');
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <LoginForm />
        </Modal>

    );
};
