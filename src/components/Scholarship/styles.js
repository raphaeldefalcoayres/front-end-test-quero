import styled from 'styled-components';

export const Container = styled.div`
  height: 425px;
  box-shadow: 0 3px 8px -3px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 25px 25px;
  flex: 1 1 auto;
  max-width: 25%;
  margin: 25px 25px 25px 0;
  background: #fff;
  &:last-child {
    margin-right: 0;
  }

  h3 {
    margin-top: 35px;
  }

  h6 {
    font-weight: normal;
    line-height: 20px;
    font-size: 13px;
  }
`;
