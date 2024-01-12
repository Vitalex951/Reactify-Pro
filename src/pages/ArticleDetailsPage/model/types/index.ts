import {
    ArticleDetailsRecommendationsSchema,
    ArticleDetailsCommentsSchema,
} from 'pages/ArticleDetailsPage';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema
    recommendations: ArticleDetailsRecommendationsSchema
}
