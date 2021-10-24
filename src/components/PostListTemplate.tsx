import React from 'react';
import Layout from './Layout';
import { ITemplateProps } from '../interface';
import { MarkdownRemark } from 'src/graphql-types';

type IPostListTemplateProps = ITemplateProps<{
    title: string;
    nodes: Array<Pick<MarkdownRemark, 'frontmatter' | 'excerpt' | 'id'>>;
}>;

const PostListTemplate: React.FC<IPostListTemplateProps> = React.memo((props) => {
    const { title, nodes } = props.pageContext;
    //nodes.map(node => (key={node.id} post={node}));
    return <Layout></Layout>;
});
