import React from 'react';

import styled from 'styled-components';
import './Layout.css';
import { Sidebar } from './Sidebar';

const Wrapper = styled.div`
    width: 100%;
    heigth: 100vh;
    display: flex;
`;

const ListWrapper = styled.div`
    flex: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 30px;
`;

const ListHeader = styled.div`
    margin: 50px auto 0 auto;
    width: 60%;
    font-size: 20px;
    border-bottom: 1px solid;
    padding: 10px 0 30px 0;
`;

const Content = styled.div`
    margin: 30px auto 0 auto;
    width: 60%;
`;

//index page 일때만 listheader 추가
const Layout: React.FC = ({ children }) => {
    return (
        <Wrapper>
            <Sidebar />
            <ListWrapper>
                <Content>{children}</Content>
            </ListWrapper>
        </Wrapper>
    );
};

export default Layout;
