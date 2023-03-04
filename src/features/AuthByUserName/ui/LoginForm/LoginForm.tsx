import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import s from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation(['login', 'input']);
    return (
        <div className={classNames(s.LoginForm, {}, [className])}>
            <Input
                type="text"
                autoFocus
                className={s.input}
                placeholder={t('input:userName')}
            />
            <Input
                type="text"
                className={s.input}
                placeholder={t('input:password')}
            />
            <Button className={s.loginBtn}>
                {t('login:войти')}
            </Button>
        </div>
    );
};
