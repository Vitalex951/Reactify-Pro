import { memo } from 'react';
import s from 'entities/Article/ui/ArticleListItem/ArticleListItem.module.scss';
import { ArticleView } from 'entities/Article/model/types/article';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

interface ArticleListItemSkeletonProps {
    className?: string
    view: ArticleView
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
    const {
        className,
        view,
    } = props;

    if (view === 'BIG') {
        return (
            <div className={classNames(s.ArticleListItem, {}, [className, s[view]])}>
                <Card>
                    <div className={s.header}>
                        <Skeleton border="50%" height={30} width={30} />
                        <Skeleton width={150} height={16} className={s.username} />
                        <Skeleton width={150} height={16} className={s.date} />
                    </div>
                    <Skeleton width={250} height={24} className={s.title} />
                    <Skeleton height={200} className={s.img} />
                    <div className={s.footer}>
                        <Skeleton width={200} height={36} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(s.ArticleListItem, {}, [className, s[view]])}>
            <Card>
                <div className={s.imageWrapper}>
                    <Skeleton
                        width={200}
                        height={200}
                        className={s.img}
                    />
                </div>

                <div className={s.infoWrapper}>
                    <Skeleton
                        width={130}
                        height={16}
                    />
                </div>

                <Skeleton
                    width={150}
                    height={16}
                    className={s.title}
                />
            </Card>
        </div>
    );
});
