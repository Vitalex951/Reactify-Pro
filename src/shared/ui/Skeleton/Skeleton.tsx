import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, memo } from 'react';
import s from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string
    height?: string | number
    width?: string | number
    border?: string
}

export const Skeleton = memo((props: SkeletonProps) => {
    const {
        className,
        border,
        height,
        width,
    } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return (
        <div
            className={classNames(s.Skeleton, {}, [className])}
            style={styles}
        >

        </div>
    );
});
