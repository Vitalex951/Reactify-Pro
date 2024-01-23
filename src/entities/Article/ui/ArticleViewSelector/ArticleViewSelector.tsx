import { classNames } from 'shared/lib/classNames/classNames';
import { FunctionComponent, memo, SVGAttributes } from 'react';
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleView } from '../../model/types/article';
import s from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string
    view: ArticleView
    onViewClick: (view: ArticleView) => void
}

interface ViewType {
    view: ArticleView
    icon: FunctionComponent<SVGAttributes<SVGElement>>
}

const viewTypes: ViewType[] = [
    {
        view: 'SMALL',
        icon: TiledIcon,
    },
    {
        view: 'BIG',
        icon: ListIcon,
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const {
        className,
        onViewClick,
        view,
    } = props;

    const onClick = (newView: ArticleView) => {
        onViewClick(newView);
    };

    return (
        <div className={classNames(s.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    theme={ButtonTheme.CLEAR}
                    onClick={() => onClick(viewType.view)}

                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames('', {
                            [s.notSelected]: viewType.view !== view,
                        }, [])}
                    />
                </Button>
            ))}
        </div>
    );
});
