import { WrapPageElementBrowserArgs } from 'gatsby';
import { MarkdownRemark, MarkdownRemarkEdge } from './graphql-types';

export type ITemplateProps<T> = WrapPageElementBrowserArgs['props'] & {
    pageContext: {
        isCreatedByStatefulCreatePages: boolean;
    } & T;
};

export interface IPostCategoryTemplateContext {
    title: string;
    pagePath: string;
    nodes?: Array<Pick<MarkdownRemark, 'frontmatter' | 'excerpt' | 'id'>>;
    edges?: Array<MarkdownRemarkEdge>
}
