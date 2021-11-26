import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

//import Layout from '@src/components/Layout';
import Layout from '../components/Layout';

const Wrapper = styled.div``;

const LinkItem = styled(Link)``;

const AboutTitle = styled.div``;

const AboutContent = styled.div``;

const AboutPage: React.FC = () => {
    return (
        <Layout>
            <Wrapper>
                <AboutTitle>제목</AboutTitle>
                <AboutContent>내용</AboutContent>
                <LinkItem to="https://github.com/spblue4422">My github</LinkItem>
            </Wrapper>
        </Layout>
    );
};
