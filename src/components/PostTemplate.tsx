import React from 'react';
import Layout from './Layout';
import { ITemplateProps } from '../interface';

type IPostTemplateProps = ITemplateProps<{
    html: string;
    title: string;
    last_modified_at: string;
}>;

const PostTemplate: React.FC<IPostTemplateProps> = React.memo((props) => {
    const { title, html, last_modified_at } = props.pageContext;
    return (
        <Layout>
            <h2>{title}</h2>
            <h4>{last_modified_at}</h4>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </Layout>
    );
});

PostTemplate.displayName = 'PostTemplate';

export default PostTemplate;
