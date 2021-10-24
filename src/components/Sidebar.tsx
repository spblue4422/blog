import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.nav`
    flex: 2;
    display: flex;
    border-right: 0px;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    min-width: 300px;
    background-color: ${oc.cyan[6]};
`;

const NavItem = styled(Link)`
    margin-top: 30px;
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: column;
    text-align: center;
    color: ${oc.gray[1]};
    font-weight: 13px;
`;

const Profile = styled.div`
    width: 225px;
    height: 225px;
    margin-top: 220px;
    margin-bottom: 30px;
    padding: 5px;
    border-radius: 50%;
    background-color: ${oc.gray[0]};
    border: none;
    flex-direction: column;
`;

export const Sidebar: React.FC = (props) => {
    return (
        <Wrapper>
            <Profile></Profile>
            <NavItem to="/about">spblue4422</NavItem>
        </Wrapper>
    );
};
