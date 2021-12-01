import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';

const Wrapper = styled.div`
    margin: 30px auto 0 auto;
    width: 70%;
`;

const LinkItem = styled(Link)``;

const AboutTitle = styled.div``;

const AboutContent = styled.div``;

const AboutPage: React.FC = () => {
    const category: string = 'None';

    return (
        <Layout currentCategory={category}>
            <Seo title={'about'} subUrl={'/about'} />
            <Wrapper>
                <AboutTitle>여행과 게임, 컴퓨터를 좋아하는 개발자의 공간</AboutTitle>
                <AboutContent>
                    안녕하세요 초보개발자 유승은입니다. 고려대학교 재학중이며 현재는 휴학하고
                    산업기능요원으로 복무하고 있습니다. <br />
                    아직은 프론트도 백도 신기해하는, 꿈을 찾아가는 길에 있는, 많이 발전해야할
                    학생입니다. 감사합니다.
                </AboutContent>
                <LinkItem to="https://github.com/spblue4422">My github</LinkItem>
            </Wrapper>
        </Layout>
    );
};

export default AboutPage;
