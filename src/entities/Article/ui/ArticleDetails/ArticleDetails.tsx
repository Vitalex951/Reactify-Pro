import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { HStack, VStack } from 'shared/ui/Stack';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import {
    ArticleImageBlockComponent,
} from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticlesById/fetchArticleById';
import s from './ArticleDetails.module.scss';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

interface ArticleDetailsProps {
    className?: string
    id?: string
}

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();

    const isLoading = useSelector(getArticleDetailsIsLoading);
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return <ArticleCodeBlockComponent
                key={block.id}
                className={s.block}
                block={block}
            />;
        case ArticleBlockType.TEXT:
            return <ArticleTextBlockComponent
                key={block.id}
                className={s.block}
                block={block}
            />;
        case ArticleBlockType.IMAGE:
            return <ArticleImageBlockComponent
                key={block.id}
                block={block}
                className={s.block}
            />;
        default:
            return null;
        }
    }, []);

    useInitialEffect(() => dispatch(fetchArticleById(id)));

    let content;

    if (isLoading) {
        content = (
            <div>
                <Skeleton className={s.avatar} width={200} height={200} border="50%" />
                <Skeleton className={s.title} width={300} height={32} />
                <Skeleton className={s.skeleton} width={600} height={24} />
                <Skeleton className={s.skeleton} width="100%" height={200} />
                <Skeleton className={s.skeleton} width="100%" height={200} />
            </div>
        );
    } else if (error) {
        content = (
            <Text
                align="center"
                title={t('article:noArticle')}
            />
        );
    } else {
        content = (
            <>
                <HStack justify="center" max className={s.avatarWrapper}>
                    <Avatar
                        size={200}
                        src={article?.img}
                        className={s.avatar}
                    />
                </HStack>
                <VStack gap="4" max>
                    <Text
                        className={s.title}
                        title={article?.title}
                        text={article?.subtitle}
                        size="L"
                    />
                    <HStack gap="8" className={s.articleInfo}>
                        <Icon
                            className={s.icon}
                            Svg={EyeIcon}
                        />
                        <Text text={String(article?.views)} />
                    </HStack>

                    <HStack gap="8" className={s.articleInfo}>
                        <Icon
                            className={s.icon}
                            Svg={CalendarIcon}
                        />
                        <Text text={article?.createdAt} />
                    </HStack>
                </VStack>

                {article?.blocks.map((el) => renderBlock(el))}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <VStack gap="16" max className={classNames(s.ArticleDetails, {}, [className])}>
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
});
