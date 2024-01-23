import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from '../../model/types/article';

interface ArticleTypeTabsProps {
    className?: string
    value: ArticleType
    onChangeType: (type: ArticleType) => void
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const {
        className,
        value,
        onChangeType,
    } = props;

    const { t } = useTranslation('article');

    const onTabClick = (tab: TabItem) => {
        onChangeType?.(tab.value as ArticleType);
    };

    const tabs = useMemo<TabItem[]>(() => [
        {
            value: ArticleType.ALL,
            content: t('article:all'),
        },
        {
            value: ArticleType.IT,
            content: t('article:it'),
        },
        {
            value: ArticleType.ECONOMICS,
            content: t('article:economics'),
        },
        {
            value: ArticleType.SCIENCE,
            content: t('article:science'),
        },
    ], [t]);

    return (
        <Tabs
            className={className}
            tabs={tabs}
            value={value}
            onTabClick={onTabClick}
        />
    );
});
