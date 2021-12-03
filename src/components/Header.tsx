import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.div`
    margin: 0 auto;
    top: 0;
    left: 0;
    right: 0;
    position: fixed;
    background-color: white;
    height: 60px;
    border-bottom: 1px solid ${oc.gray[3]};
    align-items: center;
`;

const HeaderWrapper = styled.nav`
    height: 100%;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    padding: 0px 24px;
    box-sizing: border-box;
`;

const HeaderItem = styled(Link)`
    font-size: 20px;
    font-weight: 900;
    color: black;
`;

export const Header: React.FC = () => {
    return (
        <Wrapper>
            <HeaderWrapper>
                <HeaderItem to={'/'}>spblue4422</HeaderItem>
                <HeaderItem to={'/about'}>about</HeaderItem>
            </HeaderWrapper>{' '}
        </Wrapper>
    );
};
