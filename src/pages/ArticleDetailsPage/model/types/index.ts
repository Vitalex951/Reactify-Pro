import {
    ArticleDetailsRecommendationsSchema,
    ArticleDetailsCommentsSchema,
} from '../../../ArticleDetailsPage';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema
    recommendations: ArticleDetailsRecommendationsSchema
}
