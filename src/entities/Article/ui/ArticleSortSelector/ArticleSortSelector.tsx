import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { ArticleSortField } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types';
import s from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string
    sort: ArticleSortField
    order: SortOrder
    onChangeOrder: (newOrder: SortOrder) => void
    onChangeSort: (newSort: ArticleSortField) => void

}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className,
        onChangeSort,
        sort,
        onChangeOrder,
        order,
    } = props;

    const { t } = useTranslation('article');

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('article:asc'),
        },
        {
            value: 'desc',
            content: t('article:desc'),
        },
    ], [t]);

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('article:created'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('article:title'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('article:views'),
        },

    ], [t]);
    // дженерик
    return (
        <div className={classNames(s.ArticleSortSelector, {}, [className])}>
            {/* <Select<ArticleSortField> */}
            <Select
                label={t('article:sort')}
                options={sortFieldOptions}
                onChange={onChangeSort}
                value={sort}
            />

            <Select
                label={t('article:to')}
                onChange={onChangeOrder}
                options={orderOptions}
                value={order}
                className={s.order}
            />
        </div>
    );
});
