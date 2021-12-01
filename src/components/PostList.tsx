import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.div`
    margin: 30px auto 0 auto;
    width: 70%;
`;

const ListHeader = styled.nav`
    height: 50px;
    border-bottom: 1px solid;
`;

const NavItem = styled(Link)<NavItemProps>`
    margin: 5px 5px 5px;
    padding: 5px;
    width: 50px;
    text-align: center;
    background-color: ${(props) => (props.status ? oc.cyan[6] : oc.gray[3])};
    color: ${(props) => (props.status ? oc.gray[0] : oc.gray[6])};
    font-size: 16px;
    border-radius: 10px;
    display: inline-block;
    &:hover {
        opacity: ${(props) => (props.status ? 1 : 0.8)};
    }
    &:active {
        background-color: ${(props) => (props.status ? oc.cyan[7] : oc.gray[5])};
    }
`;

const ListWrapper = styled.ul`
    margin-left: 0px;
    padding-left: 50px;
`;

interface NavItemProps {
    status: boolean;
}

const PostList: React.FC = ({ children, ...props }) => {
    return (
        <Wrapper>
            <ListWrapper>
                <ListHeader>
                    <NavItem to={'/'} status={true}>
                        All
                    </NavItem>
                    <NavItem to={'/category/Travel'} status={false}>
                        Travel
                    </NavItem>
                    <NavItem to={'/category/Game'} status={false}>
                        Game
                    </NavItem>
                    <NavItem to={'/category/Dev'} status={false}>
                        Dev
                    </NavItem>
                </ListHeader>
                {children}
            </ListWrapper>
        </Wrapper>
    );
};

export default PostList;
