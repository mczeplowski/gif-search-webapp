import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 30px);
  margin: 40px 15px 0;

  @media only screen and (min-width: 720px) {
    width: 720px;
    margin: 40px auto 0;
  }
`;
