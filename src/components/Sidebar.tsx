import React, { useEffect, useRef } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import oc from 'open-color';
import { Query } from '@src/graphql-types';

const Wrapper = styled.nav`
    flex: 3;
    display: flex;
    border-right: 0px;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    min-width: 300px;
    background-color: ${oc.cyan[6]};
`;

const AboutLink = styled(Link)`
    margin-top: 10px;
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
    max-width: 330px;
    width: 90%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border-radius: 13px;
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
    border-radius: 10px;

    &:hover {
        opacity: ${(props) => (props.status === 'active' ? 1 : 0.8)};
    }
    &:active {
        background-color: ${(props) => (props.status == 'active' ? oc.gray[3] : oc.cyan[9])};
    }
`;

const Profile = styled.div`
    width: 80px;
    height: 80px;
    margin-top: 220px;
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

interface QueryValue {
    ctg: string;
    count: number;
}

const PostCountQuery = graphql`
    query {
        allMarkdownRemark {
            group(field: frontmatter___categories) {
                fieldValue
                totalCount
            }
        }
    }
`;

export const Sidebar: React.FC<SidebarProps> = ({ currentCategory }) => {
    const data = useStaticQuery<Query>(PostCountQuery);

    let categories: QueryValue[] = [];

    data.allMarkdownRemark.group.map((category, idx) => {
        {
            categories.push({
                ctg: category.fieldValue,
                count: category.totalCount
            });
        }
    });

    let totalCount = 0;
    categories.map((category, idx) => {
        totalCount += category.count;
    });

    return (
        <Wrapper>
            <Profile></Profile>
            <AboutLink to="/about/">spblue4422</AboutLink>
            <TagList>
                <NavItem key={100} to={'/'} status={currentCategory === 'All' ? 'active' : 'none'}>
                    All
                    <div>{totalCount}</div>
                </NavItem>
                {categories.map((category, idx) => (
                    <NavItem
                        key={idx}
                        to={`/category/${category.ctg}`}
                        status={currentCategory === category.ctg ? 'active' : 'none'}
                    >
                        {`${category.ctg}`}
                        <div>{category.count}</div>
                    </NavItem>
                ))}
            </TagList>
        </Wrapper>
    );
};
