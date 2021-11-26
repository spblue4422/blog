import React from 'react';
import styled from 'styled-components';

import { ITemplateProps } from '../interface';
import { MarkdownRemark } from 'src/graphql-types';
import Layout from './Layout';
import PostList from './PostList';
import PostCard from './PostCard';

type IPostListTemplateProps = ITemplateProps<{
    title: string;
    currentCategory: string;
    nodes: Array<Pick<MarkdownRemark, 'frontmatter' | 'excerpt' | 'id'>>;
}>;

const PostListTemplate: React.FC<IPostListTemplateProps> = React.memo((props) => {
    const { title, nodes, currentCategory } = props.pageContext;
    //nodes.map(node => (key={node.id} post={node}));
    return (
        <Layout currentCategory={currentCategory}>
            <PostList>
                {nodes.map((node, idx) => (
                    <PostCard key={idx}></PostCard>
                ))}
            </PostList>
        </Layout>
    );
});

PostListTemplate.displayName = 'PostListTemplate';

export default PostListTemplate;
