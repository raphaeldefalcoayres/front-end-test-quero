import styled from 'styled-components';

export const Container = styled.div``;

export const RowContacts = styled.div`
  background: #007a8d;
  color: #fff;
  padding: 45px 0;
  div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export const Col = styled.div`
  flex: 1 1 auto;
  max-width: 260px;
  display: flex;
  margin: 0 auto;
  div {
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    align-items: start;
  }
`;

export const RowFooter = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background: #18acc4;
  color: #fff;
  padding: 45px 0;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      margin: 0 5px;
    }
  }
`;
