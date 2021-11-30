module.exports = {
    siteMetadata: {
        title: `spblue4422`,
        description: `blog recording my life style`,
        mainUrl: `https://spblue4422.dev`,
        author: `@spblue4422`
    },
    plugins: [
        `gatsby-plugin-typescript`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-styled-components`,
        // {
        //     resolve: `gatsby-plugin-scss-typescript`,
        //     options: {}
        // },
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/src/posts`
            }
        },
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-plugin-typegen`,
            options: {
                dest: `./src/graphql-types.d.ts`
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
            }
        }
    ]
};
