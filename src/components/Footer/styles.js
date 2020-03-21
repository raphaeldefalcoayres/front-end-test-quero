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

  @media screen and (max-width: 996px) {
    padding: 0;
    > div {
      max-width: 100%;
    }
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
    small,
    b {
      display: none;
    }
  }

  @media screen and (max-width: 996px) {
    border-top: 2px solid #18acc4;
    border-right: 2px solid #18acc4;
    padding: 20px 0;
    flex: 1 1 auto;
    flex-direction: column;
    align-items: center;

    &:first-child {
      flex: 100%;
      border: none;
      flex-direction: row;
      min-width: 100%;
      justify-content: center;
      align-items: center;
    }
    &:last-child {
      border-right: none;
    }
    svg {
      width: 32px;
      height: 32px;
    }

    &:first-child div {
      margin-left: 15px !important;
      b {
        margin-top: 0;
      }
    }

    div {
      margin: 0;

      span,
      strong {
        display: none;
      }
      small {
        display: block;
        font-weight: 400;
      }
      b {
        margin-top: 5px;
        margin-bottom: 5px;
        display: block;
        font-size: 0.875rem;
        font-weight: 600;
      }
    }
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

  @media screen and (max-width: 996px) {
    font-size: 12px;
  }
`;
