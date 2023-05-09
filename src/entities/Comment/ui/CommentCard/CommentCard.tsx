import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { IComment } from 'entities/Comment/model/types/comment';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import s from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string
    comment: IComment
    isLoading?: boolean
}

export const CommentCard = memo((props: CommentCardProps) => {
    const {
        className,
        comment,
        isLoading,
    } = props;

    if (isLoading) {
        return (
            <div className={classNames(s.CommentCard, {}, [className])}>
                <div className={s.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton height={16} width={100} className={s.userName} />
                </div>
                <Skeleton className={s.text} width="100%" height={50} />
            </div>
        );
    }

    return (
        <div className={classNames(s.CommentCard, {}, [className])}>
            <div className={s.header}>
                {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
                <Text className={s.userName} title={comment.user.userName} />
            </div>
            <Text className={s.text} text={comment.text} />
        </div>
    );
});
