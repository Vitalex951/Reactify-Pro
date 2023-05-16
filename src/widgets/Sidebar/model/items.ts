import React from 'react';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import ArticleIcon from 'shared/assets/icons/article-20-20.svg';

export interface SidebarItemType {
    path: string
    text: string
    Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>
    authOnly?: boolean
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'главная',
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'о-сайте',
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: 'профиль',
        authOnly: true,
    },
    {
        path: RoutePath.articles,
        Icon: ArticleIcon,
        text: 'статьи',
        authOnly: true,
    },
];
