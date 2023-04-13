import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleTextBlock } from '../../model/types/article';
import s from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string
    block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo(({
    className,
    block,
}: ArticleTextBlockComponentProps) => {
    const { t } = useTranslation('');
    return (
        <div className={classNames(s.ArticleTextBlockComponent, {}, [className])}>
            {block.title && (
                <Text
                    className={s.title}
                    title={block.title}
                />
            )}
            {block.paragraphs.map((pr, i) => (
                <Text
                    key={pr}
                    text={pr}
                    className={s.paragraph}
                />
            ))}
        </div>
    );
});
