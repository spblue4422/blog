import { CreatePagesArgs, graphql } from 'gatsby';
import path from 'path';

import { MarkdownRemarkConnection } from '@src/graphql-types';
import { IPostCategoryTemplateContext } from '@src/interface';

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

            allPostsByCategory: allMarkdownRemark(
                sort: { order: DESC, fields: frontmatter___last_modified_at }
            ) {
                group(field: frontmatter___categories) {
                    edges {
                        node {
                            excerpt(truncate: true, pruneLength: 200)
                            frontmatter {
                                categories
                                last_modified_at(formatString: "YYYY-MM-DD")
                                path
                                title
                            }
                            id
                        }
                    }
                    fieldValue
                    totalCount
                }
            }
        }
    `);

    if (errors) {
        throw errors;
    }

    // data.allMarkdownRemark.nodes.map((node) => {
    //     createPage({
    //         path: node.frontmatter.path,
    //         context: {
    //             html: node.html,
    //             title: node.frontmatter.title,
    //             category: node.frontmatter.categories,
    //             last_modified_at: node.frontmatter.last_modified_at,
    //             pagePath: node.frontmatter.path
    //         },
    //         component: path.resolve(__dirname, '../components/PostTemplate.tsx')
    //     });
    // });

    // data.allPostsByCategory.group.forEach(({ nodes, fieldValue }) => {
    //     const pagePath = `category/${fieldValue}`;

    //     createPage<IPostCategoryTemplateContext>({
    //         path: pagePath,
    //         context: { title: fieldValue, nodes, pagePath },
    //         component: path.resolve(__dirname, '../components/PostCategoryTemplate.tsx')
    //     });
    // });

    data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.path,
            context: {
                html: node.html,
                title: node.frontmatter.title,
                category: node.frontmatter.categories,
                last_modified_at: node.frontmatter.last_modified_at,
                pagePath: node.frontmatter.path
            },
            component: path.resolve(__dirname, '../components/PostTemplate.tsx')
        });
    });

    data.allPostsByCategory.group.forEach(({ edges, fieldValue }) => {
        const pagePath = `category/${fieldValue}`;

        createPage<IPostCategoryTemplateContext>({
            path: pagePath,
            context: { title: fieldValue, edges, pagePath },
            component: path.resolve(__dirname, '../components/PostCategoryTemplate.tsx')
        });
    });
}
