import { classNames } from 'shared/lib/classNames/classNames';
import {
    MutableRefObject, ReactNode, UIEvent, useLayoutEffect, useRef,
} from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getScrollSaveByPath, scrollSaveActions } from 'features/ScrollSave';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';
import s from './Page.module.scss';

interface PageProps {
    className?: string
    children?: ReactNode
    onScrollEnd?: () => void
}

export const PAGE_ID = 'PAGE_ID';

export const Page = (props: PageProps) => {
    const {
        className,
        children,
        onScrollEnd,
    } = props;

    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector((state: StateSchema) => getScrollSaveByPath(state, pathname));

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    useLayoutEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const onScroll = useThrottle((event: UIEvent) => {
        dispatch(scrollSaveActions.setScrollPosition({
            position: event.currentTarget.scrollTop,
            path: pathname,
        }));
    }, 500);

    return (
        <main
            ref={wrapperRef}
            className={classNames(s.Page, {}, [className])}
            onScroll={onScroll}
            id={PAGE_ID}
        >
            {children}

            {onScrollEnd
                ? <div className={s.trigger} ref={triggerRef}></div>
                : null}
        </main>
    );
};
