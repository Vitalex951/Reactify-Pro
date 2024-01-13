import {
    ArticleDetailsCommentsSchema,
} from './model/types/ArticleDetailsCommentsSchema';
import {
    ArticleDetailsPageAsync as ArticleDetailsPage,
} from './ui/ArticleDetailsPage/ArticleDetailsPage.async';
import { ArticleDetailsRecommendationsSchema } from './model/types/ArticleDetailsRecommendationsSchema';
import { ArticleDetailsPageSchema } from './model/types';
import { getCanEditArticle } from './model/selectors/article';

export {
    ArticleDetailsPage,
    ArticleDetailsCommentsSchema,
    ArticleDetailsRecommendationsSchema,
    ArticleDetailsPageSchema,
    getCanEditArticle,
};
