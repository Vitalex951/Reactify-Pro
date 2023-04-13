import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleImageBlock } from 'entities/Article/model/types/article';
import s from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string
    block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo(({
    className,
    block,
}: ArticleImageBlockComponentProps) => {
    const { t } = useTranslation('');
    return (
        <div className={classNames(s.ArticleImageBlockComponent, {}, [className])}>
            <img
                src={block.src}
                className={s.img}
                alt={block.title}
            />
            {block.title && (
                <Text
                    text={block.title}
                    align="center"
                />)}
        </div>
    );
});
