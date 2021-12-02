import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.nav`
    width: 40%;
    padding: 0px 28% 0px 32%;
    position: fixed;
    height: 80px;
    background-color: white;
    border-bottom: 1px solid ${oc.gray[3]};
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const HeaderItem = styled(Link)`
    font-size: 20px;
    font-weight: 900;
    color: black;
`;

export const Header: React.FC = () => {
    return (
        <Wrapper>
            <HeaderItem to={'/'}>spblue4422</HeaderItem>
            <HeaderItem to={'/about'}>about</HeaderItem>
        </Wrapper>
    );
};
