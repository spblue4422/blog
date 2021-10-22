import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Wrapper = styled.nav`
    display: flex;
    border-right: 0px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 20%;
`;

const NavItem = styled(Link)`
    margin-top: 30px;
    width: 200px;
    display: flex;
    flex-direction: column;
`;

export const Sidebar: React.FC = (props) => (
    <Wrapper>
        <NavItem to="/">spblue4422</NavItem>
    </Wrapper>
);
