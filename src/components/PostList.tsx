import React, { useEffect } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import oc from 'open-color';

import { Query } from '@src/graphql-types';

const Wrapper = styled.div`
    margin: 0 auto;
    width: 40%;
`;

const ListHeader = styled.nav`
    padding-left: 15px;
    padding-bottom: 5px;
`;

const NavItem = styled(Link)<NavItemProps>`
    margin: 3px;
    padding: 5px;
    width: 50px;
    text-align: center;
    background-color: ${(props) => (props.status ? oc.cyan[6] : oc.gray[3])};
    color: ${(props) => (props.status ? oc.gray[0] : oc.gray[6])};
    font-size: 13px;
    border-radius: 10px;
    display: inline-block;
    &:hover {
        opacity: ${(props) => (props.status ? 1 : 0.8)};
    }
    &:active {
        background-color: ${(props) => (props.status ? oc.cyan[7] : oc.gray[5])};
    }
`;

const CountWrapper = styled.div`
    display: inline-block;
`;

interface PostListProps {
    currentCategory: string;
}

interface NavItemProps {
    status: boolean;
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

const PostList: React.FC<PostListProps> = ({ currentCategory, children }) => {
    let categories: QueryValue[] = [];
    let totalCount = 0;

    const data = useStaticQuery<Query>(PostCountQuery);

    categories.splice(0, categories.length);
    data.allMarkdownRemark.group.map((category, idx) => {
        {
            categories.push({
                ctg: category.fieldValue,
                count: category.totalCount
            });
        }
    });

    totalCount = 0;
    categories.map((category, idx) => {
        totalCount += category.count;
    });

    return (
        <Wrapper>
            <ListHeader>
                <NavItem to={'/'} status={currentCategory === 'All' ? true : false}>
                    All
                    <CountWrapper>{totalCount}</CountWrapper>
                </NavItem>
                {categories.map((category, idx) => (
                    <NavItem
                        key={`${idx}.${category.ctg}`}
                        to={`/category/${category.ctg}`}
                        status={currentCategory === category.ctg ? true : false}
                    >
                        {category.ctg}
                        <CountWrapper>{category.count}</CountWrapper>
                    </NavItem>
                ))}
            </ListHeader>
            {children}
        </Wrapper>
    );
};

export default PostList;
