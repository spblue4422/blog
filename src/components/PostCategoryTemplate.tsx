import React from 'react';
import styled from 'styled-components';

import { ITemplateProps } from '../interface';
import { MarkdownRemark, MarkdownRemarkEdge } from '../graphql-types';
import Layout from './Layout';
import PostList from './PostList';
import PostCard from './PostCard';
import Seo from './Seo';

type IPostCategoryTemplateProps = ITemplateProps<{
    title: string;
    pagePath: string;
    nodes?: Array<Pick<MarkdownRemark, 'frontmatter' | 'excerpt' | 'id'>>;
    edges?: Array<MarkdownRemarkEdge>;
}>;

const PostCategoryTemplate: React.FC<IPostCategoryTemplateProps> = React.memo((props) => {
    const { title, pagePath, edges } = props.pageContext;
    return (
        <Layout currentCategory={title}>
            <Seo title={title} subUrl={pagePath} />
            {
                <PostList>
                    {edges.map((edge) => (
                        <PostCard key={edge.node.id} node={edge.node}></PostCard>
                    ))}
                </PostList>
            }
            {/* <PostList>
                {nodes.map((node) => (
                    <PostCard key={node.id} node={node}></PostCard>
                ))}
            </PostList> */}
        </Layout>
    );
});

PostCategoryTemplate.displayName = 'PostCategoryTemplate';

export default PostCategoryTemplate;
