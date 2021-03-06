import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import oc from 'open-color';

const Wrapper = styled.div`
    margin: auto;
    width: 100%;
`;

const Img = styled.div``;

const PostInfo = styled(Link)`
    width: 100%;
    border-radius: 10px;
    padding: 10px 20px;
    display: block;
    box-sizing: border-box;

    &:hover {
        background-color: ${oc.gray[2]};
    }
`;

const PostTitle = styled.h3`
    margin-bottom: 15px;
    color: ${oc.gray[9]};
    text-decoration: none;
`;

const PostCategory = styled.div`
    background-color: ${oc.gray[1]};
    color: ${oc.gray[5]};
    font-size: 16px;
    padding: 5px;
    border-radius: 6px;
    display: inline-block;
`;

const PostContent = styled.p`
    color: ${oc.gray[9]};
    text-decoration: none;
    margin-bottom: 15px;
`;

const PostDate = styled.p`
    color: ${oc.gray[9]};
    text-decoration: none;
    margin-bottom: 15px;
`;

interface CardNode {
    excerpt?: string;
    frontmatter?: {
        title?: string;
        path?: string;
        categories?: string[];
        last_modified_at?: string;
    };
    id: string;
}

export interface PostCardProps {
    node: CardNode;
}

const PostCard: React.FC<PostCardProps> = ({ node }) => {
    return (
        <Wrapper>
            <PostInfo to={`/${node.frontmatter.path}`}>
                <PostTitle>{node.frontmatter.title}</PostTitle>
                <PostDate>{node.frontmatter.last_modified_at}</PostDate>
                <PostContent>{node.excerpt}</PostContent>
                <PostCategory>{node.frontmatter.categories}</PostCategory>
            </PostInfo>
        </Wrapper>
    );
};

export default PostCard;
