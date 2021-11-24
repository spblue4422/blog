import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 30px auto 0 auto;
    width: 60%;
`;

const ListWrapper = styled.ul``;

const PostList: React.FC = (children, ...props) => {
    return (
        <Wrapper>
            <ListWrapper>{children}</ListWrapper>
        </Wrapper>
    );
};

export default PostList;
