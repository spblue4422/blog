import React from 'react';
import Layout from './Layout';
import { ITemplateProps } from '../interface';

type IPostTemplateProps = ITemplateProps<{
    html: string;
    title: string;
}>;

const PostTemplate: React.FC<IPostTemplateProps> = React.memo((props) => {
    const { title, html } = props.pageContext;
    return (
        <Layout>
            <h2>{title}</h2>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </Layout>
    );
});

PostTemplate.displayName = 'PostTemplate';

export default PostTemplate;
