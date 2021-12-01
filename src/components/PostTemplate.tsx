import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import Layout from './Layout';
import { ITemplateProps } from '../interface';
import Seo from './Seo';

//import './BasicDesign.scss';

type IPostTemplateProps = ITemplateProps<{
    html: string;
    title: string;
    pagePath: string;
    category: string;
    last_modified_at: string;
}>;

const Wrapper = styled.div`
    margin: 30px auto 0 auto;
    padding: 0px 50px;
    width: 70%;
    box-sizing: border-box;
`;

const PostHeader = styled.div`
    margin-bottom: 35px;
    padding-top: 30px;
    box-sizing: border-box;
`;
const PostTitle = styled.h1`
    margin-bottom: 5px;
`;

const PostCategory = styled.div`
    color: ${oc.gray[5]};
    font-size: 14px;
    background-color: ${oc.gray[1]};
    padding: 5px;
    border-radius: 6px;
    display: inline-block;
`;
const PostDate = styled.p`
    color: ${oc.gray[6]};
`;

const PostContent = styled.p``;

const PostTemplate: React.FC<IPostTemplateProps> = React.memo((props) => {
    const { title, html, pagePath, category, last_modified_at } = props.pageContext;
    return (
        <Layout currentCategory={category}>
            <Seo title={title} subUrl={`/${pagePath}`} />
            <Wrapper>
                <PostHeader>
                    <PostCategory>{category}</PostCategory>
                    <PostTitle>{title}</PostTitle>
                    <PostDate>{last_modified_at}</PostDate>
                </PostHeader>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </Wrapper>
        </Layout>
    );
});

PostTemplate.displayName = 'PostTemplate';

export default PostTemplate;
