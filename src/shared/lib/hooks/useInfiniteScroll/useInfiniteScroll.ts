import { MutableRefObject, useEffect } from 'react';

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

    useEffect(() => {
        let observer: IntersectionObserver | null = null;
        if (callback && wrapperRef.current) {
            const options = {
                root: wrapperRef.current,
                rootMargin: '1px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.observe(triggerRef.current);
        }

        return () => {
            if (observer) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(triggerRef.current);
            }
        };
    }, [callback, triggerRef, wrapperRef]);
};
