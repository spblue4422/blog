import React, { useState, useEffect } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Query } from '../graphql-types';

import Layout from '../components/Layout';
import PostList from '../components/PostList';
import Post from '../components/PostCard';
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

    //const [state, setState] = useState('All');
    const currentCategory: string = 'All';

    return (
        <Layout currentCategory={currentCategory}>
            {/* <PostList>
                { data.allMarkdownRemark.edges.map({node} => (
                    <Post>{node}</Post>
                ))}
            </PostList> */}
            <ul>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <li key={node.id}>
                        <h2>
                            <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
                        </h2>
                        <h3>{node.excerpt}</h3>
                        <p>{node.frontmatter.last_modified_at}</p>
                    </li>
                ))}
            </ul>
        </Layout>
    );
};

export default IndexPage;
