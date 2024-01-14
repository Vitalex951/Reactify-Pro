import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoader(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const babelLoader = buildBabelLoader(options);

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const cssLoader = buildCssLoader(isDev);

    const typescriptLoader = {
        // ts-loader умеет работать с JSX
        // Если б мы не использовали тайпскрипт: нужен был бы babel-loader
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        // options: {
        //     transpileOnly: isDev,
        //     // getCustomTransformers: () => ({
        //     //     before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
        //     // }),
        // },
    };

    return [
        babelLoader,
        typescriptLoader,
        cssLoader,
        fileLoader,
        svgLoader,
    ];
}
