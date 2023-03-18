import React, { memo, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from 'shared/config/routerConfig/routerConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

const AppRouter = () => {
    const isAuth = useSelector(getUserAuthData);

    const routers = useMemo(() => {
        return Object.values(routerConfig).filter((route) => {
            if (route.authOnly && !isAuth) {
                return false;
            }
            return true;
        });
    }, [isAuth]);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {routers.map(({ element, path }) => (
                    <Route
                        key={path}
                        element={(
                            <div className="page-wrapper">
                                {element}
                            </div>
                        )}
                        path={path}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default memo(AppRouter);
