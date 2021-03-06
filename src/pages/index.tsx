import React, { useState, useEffect } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Query } from '../graphql-types';

import Layout from '../components/Layout';
import PostList from '../components/PostList';
import PostCard from '../components/PostCard';
import Seo from '../components/Seo';
//import '.BasicDesign.scss';

const LatestPostListQuery = graphql`
    query {
        allMarkdownRemark(sort: { order: DESC, fields: frontmatter___last_modified_at }) {
            edges {
                node {
                    excerpt(truncate: true, pruneLength: 200)
                    frontmatter {
                        title
                        path
                        categories
                        last_modified_at(formatString: "YYYY-MM-DD")
                    }
                    id
                }
            }
        }
    }
`;

const IndexPage: React.FC = () => {
    const data = useStaticQuery<Query>(LatestPostListQuery);

    return (
        <Layout>
            <Seo title={'Home'} />
            <PostList currentCategory={'All'}>
                {data.allMarkdownRemark.edges.map((edge, idx) => (
                    <PostCard key={idx} node={edge.node}></PostCard>
                ))}
            </PostList>
        </Layout>
    );
};

export default IndexPage;
