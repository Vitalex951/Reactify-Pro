import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PAGE_ID } from 'widgets/Page/Page';
import { List, ListRowProps, WindowScroller } from 'react-virtualized';
import { Text } from '../../../../shared/ui/Text/Text';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { Article, ArticleView } from '../../model/types/article';
import s from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string
    articles: Article[]
    isLoading?: boolean
    view?: ArticleView
    target?: HTMLAttributeAnchorTarget
    virtualized?: boolean
}

const getSkeletons = (view: ArticleView) => {
    return new Array(view === 'SMALL' ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton
                key={index}
                view={view}
            />
        ));
};

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        view = 'SMALL',
        isLoading = false,
        target,
        virtualized = true,
    } = props;

    const { t } = useTranslation('article');

    const renderArticle = (article: Article) => {
        return (
            <ArticleListItem
                key={article.id}
                article={article}
                view={view}
                target={target}
            />
        );
    };

    const isBig = view === 'BIG';

    const itemsPerRow = isBig ? 1 : 3;
    const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);

    const rowRender = ({
        index, isScrolling, key, style,
    }: ListRowProps) => {
        const items = [];
        const fromIndex = index * itemsPerRow;
        const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

        for (let i = fromIndex; i < toIndex; i += 1) {
            items.push(
                <ArticleListItem
                    article={articles[index]}
                    view={view}
                    target={target}
                    key={articles[index]?.id}
                    className={s.card}
                />,
            );
        }

        return (
            <div key={key} style={style} className={s.row}>
                {items}
            </div>
        );
    };

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(s.ArticleList, {}, [className, s[view]])}>
                <Text
                    size="L"
                    title={t('article:article-not')}
                />
            </div>
        );
    }
    return (
        <WindowScroller
            scrollElement={document.getElementById(PAGE_ID) as Element}
        >
            {({
                width,
                height,
                registerChild,
                scrollTop,
                isScrolling,
                onChildScroll,
            }) => (
                <div
                    ref={registerChild}
                    className={classNames('', {}, [className, s[view]])}
                >
                    {virtualized
                        ? (
                            <List
                            // autoWidth
                            // autoContainerWidth
                                autoHeight
                                height={height ?? 700}
                                rowCount={rowCount}
                                rowHeight={isBig ? 700 : 330}
                                rowRenderer={rowRender}
                                width={width ? width - 80 : 700}
                                onScroll={onChildScroll}
                                isScrolling={isScrolling}
                                scrollTop={scrollTop}
                            />
                        )
                        : (
                            articles.map((item) => (
                                <ArticleListItem
                                    article={item}
                                    view={view}
                                    target={target}
                                    key={item.id}
                                    className={s.card}
                                />
                            ))
                        )}

                    {isLoading && getSkeletons(view)}
                </div>
            )}
        </WindowScroller>
    );
});

// {articles.length > 0
//    ? articles.map(renderArticle)
//    : null} */}
// {isLoading && getSkeletons(view)}
