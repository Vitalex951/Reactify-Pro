import React, { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutersProps, routerConfig } from 'shared/config/routerConfig/routerConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';
import { RequireAuth } from 'app/providers/router/ui/RequireAuth';

const AppRouter = () => {
    // старая реализация защищенных маршрутов
    // const isAuth = useSelector(getUserAuthData);
    // const routers = useMemo(() => {
    //     return Object.values(routerConfig).filter((route) => {
    //         if (route.authOnly && !isAuth) {
    //             return false;
    //         }
    //         return true;
    //     });
    // }, [isAuth]);

    const renderWithWrapper = useCallback((route: AppRoutersProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                {route.element}
            </Suspense>
        );

        return (
            <Route
                key={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
                path={route.path}
            />

        );
    }, []);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routerConfig).map(renderWithWrapper)}

                {/* старая реализация */}
                {/* {routers.map(({ element, path }) => ( */}
                {/*    <Route */}
                {/*        key={path} */}
                {/*        element={( */}
                {/*            <div className="page-wrapper"> */}
                {/*                {element} */}
                {/*            </div> */}
                {/*        )} */}
                {/*        path={path} */}
                {/*    /> */}
                {/* ))} */}
            </Routes>
        </Suspense>
    );
};

export default memo(AppRouter);
