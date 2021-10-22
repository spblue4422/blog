import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './Header';
import './Layout.css';

const Layout: React.FC = ({ children }) => {
    const data = useStaticQuery<GatsbyTypes.SiteTitleQueryQuery>(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <Header />
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `0 1.0875rem 1.45rem`
                }}
            >
                <main>{children}</main>
                <footer
                    style={{
                        marginTop: `2rem`
                    }}
                >
                    © {new Date().getFullYear()}, Built with
                    {` `}
                </footer>
            </div>
        </>
    );
};

export default Layout;
