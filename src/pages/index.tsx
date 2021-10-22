import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Query } from '../graphql-types';

import Layout from '../components/Layout';

const LatestPostListQuery = graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                    excerpt(truncate: true, pruneLength: 200)
                    frontmatter {
                        title
                        path
                        last_modified_at(formatString: "YYYY-MM-DD HH:mm:ss")
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
            <h1>Hi people</h1>
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
            <p>
                <Link to="/page-2/">Go to page 2</Link> <br />
                <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
            </p>
        </Layout>
    );
};

export default IndexPage;
