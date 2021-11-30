import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface SeoProps {
    title: string;
    description?: string;
    lang?: string;
    subUrl?: string;
}

const Seo: React.FC<SeoProps> = ({ title, description, lang, subUrl }) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        defaultTitle: title
                        defaultDescription: description
                        mainUrl
                        author
                    }
                }
            }
        `
    );

    const metaDescription: string = description || site.siteMetadata.defaultDescription;
    const metaTitle: string = title || site.siteMetadata.defaultTitle;
    const metaUrl: string = site.siteMetadata.mainUrl + subUrl;

    return (
        <Helmet
            htmlAttributes={{
                lang
            }}
            title={metaTitle}
            titleTemplate={`%s | ${metaTitle}`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription
                },
                {
                    property: `og:title`,
                    content: metaTitle
                },
                {
                    property: `og:description`,
                    content: metaDescription
                },
                {
                    property: `og:type`,
                    content: `website`
                },
                {
                    property: `og:url`,
                    content: metaUrl
                },
                {
                    name: `twitter:card`,
                    content: `summary`
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata?.author
                },
                {
                    name: `twitter:title`,
                    content: metaTitle
                },
                {
                    name: `twitter:description`,
                    content: metaDescription
                }
            ]}
        ></Helmet>
    );
};
export default Seo;
