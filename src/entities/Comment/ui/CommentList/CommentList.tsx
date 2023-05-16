import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { IComment } from 'entities/Comment/model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import s from './CommentList.module.scss';

interface CommentListProps {
    className?: string
    comments?: IComment[]
    isLoading?: boolean
}

export const CommentList = memo((props: CommentListProps) => {
    const {
        className,
        comments,
        isLoading,
    } = props;
    const { t } = useTranslation('article');

    return (
        <div className={classNames(s.CommentList, {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard
                        isLoading={isLoading}
                        className={s.comment}
                        comment={comment}
                    />
                ))
                : <Text text={t('article:noComments')} />}
        </div>
    );
});
