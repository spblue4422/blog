import React from 'react';
import { Link } from 'gatsby';

const Header: React.FC = () => (
    <header
        style={{
            background: `rebeccapurple`,
            marginBottom: `1.45rem`
        }}
    >
        <div
            style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `1.45rem 1.0875rem`
            }}
        >
            <h1 style={{ margin: 0 }}>
                <Link
                    to="/"
                    style={{
                        color: `white`,
                        textDecoration: `none`
                    }}
                >
                    link to where
                </Link>
            </h1>
        </div>
    </header>
);
export default Header;
