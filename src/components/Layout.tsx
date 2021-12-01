import React from 'react';

import styled from 'styled-components';
import './layout.css';
import { Sidebar, SidebarProps } from './Sidebar';

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`;

const PostsWrapper = styled.div`
    flex: 10;
    align-items: center;
    margin: 0 auto;
    padding: 30px;
    overflow-y: scroll;
`;

const ListHeader = styled.div`
    margin: 50px auto 0 auto;
    width: 60%;
    font-size: 20px;
    border-bottom: 1px solid;
    padding: 10px 0 30px 0;
`;

//index page 일때만 listheader 추가
const Layout: React.FC<SidebarProps> = ({ currentCategory, children }) => {
    return (
        <Wrapper>
            <Sidebar currentCategory={currentCategory} />
            <PostsWrapper>{children}</PostsWrapper>
        </Wrapper>
    );
};

export default Layout;
