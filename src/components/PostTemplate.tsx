import React from 'react';
import Layout from './Layout';
import { ITemplateProps } from '../interface';
//import './BasicDesign.scss';

type IPostTemplateProps = ITemplateProps<{
    html: string;
    title: string;
    category: string;
    last_modified_at: string;
}>;

const PostTemplate: React.FC<IPostTemplateProps> = React.memo((props) => {
    const { title, html, category, last_modified_at } = props.pageContext;
    return (
        <Layout currentCategory={category}>
            <h2>{title}</h2>
            <h4>{category}</h4>
            <h4>{last_modified_at}</h4>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </Layout>
    );
});

PostTemplate.displayName = 'PostTemplate';

export default PostTemplate;
