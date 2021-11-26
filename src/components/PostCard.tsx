import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled.div`
    margin: auto;
    width: 100%;
    height: 100%;
`;

const Img = styled.div``;

const PostInfo = styled.div``;

const PostCard: React.FC = (children, ...props) => {
    return (
        <Wrapper>
            <PostInfo>
                <Link to={''}></Link>
            </PostInfo>
        </Wrapper>
    );
};

export default PostCard;
