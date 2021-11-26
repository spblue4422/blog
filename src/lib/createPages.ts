import { CreatePagesArgs, graphql } from 'gatsby';
import path from 'path';
import { MarkdownRemarkConnection, Query } from '../graphql-types';

interface newQuery {
    allMarkdownRemark: MarkdownRemarkConnection;
    allPostsByCategory: MarkdownRemarkConnection;
}

export async function createPages({ actions, graphql }: CreatePagesArgs) {
    const { createPage } = actions;

    const { data, errors } = await graphql<newQuery>(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        html
                        frontmatter {
                            title
                            path
                            categories
                            last_modified_at(formatString: "YYYY-MM-DD")
                        }
                    }
                }
            }
        }
    `);

    if (errors) {
        throw errors;
    }

    data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.path,
            context: {
                html: node.html,
                title: node.frontmatter.title,
                category: node.frontmatter.categories,
                last_modified_at: node.frontmatter.last_modified_at
            },
            component: path.resolve(__dirname, '../components/PostTemplate.tsx')
        });
    });
}
