import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    margin: 20px 0 0 0;
    font-size: 2rem;
  }
  h4 {
    font-weight: normal;
    margin: 15px 0 25px 0;
    font-size: 1rem;
  }
`;

export const RowFilter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const RowScholarship = styled.div`
  min-height: 700px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(266px, 1fr));
  grid-gap: 25px;
  margin-bottom: 30px;
  @media screen and (max-width: 996px) {
    min-height: 350px !important;
  }
`;
