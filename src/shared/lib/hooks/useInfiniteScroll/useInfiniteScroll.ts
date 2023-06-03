import { MutableRefObject, useEffect, useRef } from 'react';

export interface UseInfiniteScrollOptions {
    callback?: () => void
    triggerRef: MutableRefObject<HTMLElement>
    wrapperRef: MutableRefObject<HTMLElement>
}

export const useInfiniteScroll = (props: UseInfiniteScrollOptions) => {
    const {
        triggerRef,
        wrapperRef,
        callback,
    } = props;

    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        if (callback && wrapperRef.current) {
            const options = {
                root: wrapperRef.current,
                rootMargin: '1px',
                threshold: 1.0,
            };

            observer.current = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);
            observer.current.observe(triggerRef.current);
        }

        return () => {
            if (observer.current && triggerRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.current.unobserve(triggerRef.current);
            }
        };
    }, [callback, triggerRef, wrapperRef]);
};
