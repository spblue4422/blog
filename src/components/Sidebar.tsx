import React, { useEffect, useRef } from 'react';
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

const AboutLink = styled(Link)`
    margin-top: 30px;
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: column;
    text-align: center;
    color: ${oc.gray[1]};
    font-size: 20px;
`;

const TagList = styled.ul`
    margin: 50px 10px;
    padding: 10px 5px;
    width: 90%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border-radius: 10%;
    background-color: ${oc.cyan[7]};
`;

const NavItem = styled(Link)<NavItemProps>`
    margin: 5px auto 5px auto;
    padding: 5px;
    width: 90%;
    text-align: center;
    background-color: ${(props) => (props.status === 'active' ? oc.gray[0] : oc.cyan[8])};
    color: ${(props) => (props.status === 'active' ? oc.cyan[6] : oc.gray[0])};
    font-size: 16px;
    border-radius: 12px;

    &:hover {
        opacity: ${(props) => (props.status === 'active' ? 1 : 0.8)};
    }
    &:active {
        background-color: ${(props) => (props.status == 'active' ? oc.gray[3] : oc.cyan[9])};
    }
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

export interface SidebarProps {
    currentCategory: string;
}

export interface NavItemProps {
    status: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentCategory }) => {
    const categories: string[] = ['All', 'Travel', 'Game', 'Dev'];

    return (
        <Wrapper>
            <Profile></Profile>
            <AboutLink to="/about/">spblue4422</AboutLink>
            <TagList>
                {categories.map((category, idx) => (
                    // /category/${category}
                    <NavItem
                        key={idx}
                        to="/"
                        status={currentCategory === category ? 'active' : 'none'}
                    >
                        {category}
                    </NavItem>
                ))}
            </TagList>
        </Wrapper>
    );
};
