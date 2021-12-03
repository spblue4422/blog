import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import './layout.css';
import { Sidebar, SidebarProps } from './Sidebar';
import { Header } from './Header';

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
`;

const PostsWrapper = styled.div`
    align-items: center;
    margin: 0 auto;
    padding-top: 90px;
    -ms-overflow-style: none;
    scrollbar-width: none;

    ::-webkit-scrollbar {
        display: none;
    }
`;

//index page 일때만 listheader 추가
const Layout: React.FC = ({ children }) => {
    return (
        <Wrapper>
            <Header/>
            {/* <Sidebar currentCategory={currentCategory} /> */}
            <PostsWrapper>{children}</PostsWrapper>
        </Wrapper>
    );
};

export default Layout;
