import {
    MutableRefObject, useCallback, useEffect, useRef,
} from 'react';

export const useThrottle = (callback: (...args: any[]) => void, delay: number) => {
    const throttleRef = useRef(false);
    const timeoutRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    const throttledCallback = useCallback((...args: any[]) => {
        if (!throttleRef.current) {
            callback(...args);
            throttleRef.current = true;

            setTimeout(() => {
                throttleRef.current = false;
            }, delay);
        }
    }, [callback, delay]);

    useEffect(() => () => {
        clearTimeout(timeoutRef.current);
    }, []);

    return throttledCallback;
};
