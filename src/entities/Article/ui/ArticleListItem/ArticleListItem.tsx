import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { Card } from 'shared/ui/Card/Card';
import { useHover } from 'shared/lib/hooks/useHover/useHover';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import {
    ArticleTextBlockComponent,
} from 'entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import s from './ArticleListItem.module.scss';
import {
    Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';

interface ArticleListItemProps {
    className?: string
    article: Article
    view: ArticleView
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        view,
    } = props;

    const { t } = useTranslation('article');
    const navigate = useNavigate();

    const onOpenArticle = useCallback(() => {
        navigate(RoutePath.articles_details + article.id);
    }, [article.id, navigate]);

    const [isHover, bindHover] = useHover();

    const types = <Text
        text={article.type.join(', ')}
        className={s.types}
    />;
    const views = (
        <>
            <Text
                text={String(article.views)}
                className={s.views}
            />
            <Icon Svg={EyeIcon} />
        </>
    );

    if (view === 'BIG') {
        const textBlock = article.blocks
            .find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;
        return (
            <div className={classNames(s.ArticleListItem, {}, [className, s[view]])}>
                <Card>
                    <div className={s.header}>
                        <Avatar src={article.user.avatar} size={30} />
                        <Text text={article.user.userName} className={s.username} />
                        <Text text={article.createdAt} className={s.date} />
                    </div>
                    <Text title={article.title} className={s.title} />
                    {types}
                    <img src={article.img} className={s.img} alt={article.title} />
                    {textBlock
                        && <ArticleTextBlockComponent block={textBlock} className={s.textBlock} />}
                    <div className={s.footer}>
                        <Button theme={ButtonTheme.OUTLINE} onClick={onOpenArticle}>
                            {t('article:write')}
                        </Button>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div
            {...bindHover}
            className={classNames(s.ArticleListItem, {}, [className, s[view]])}

        >
            <Card onClick={onOpenArticle}>
                <div className={s.imageWrapper}>
                    <img
                        src={article.img}
                        className={s.img}
                        alt={article.title}
                    />
                    <Text
                        text={article.createdAt}
                        className={s.date}
                    />
                </div>

                <div className={s.infoWrapper}>
                    {types}
                    {views}
                </div>

                <Text
                    text={article.title}
                    className={s.title}
                />
            </Card>
        </div>
    );
});
