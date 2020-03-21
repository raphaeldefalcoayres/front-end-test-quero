import styled from 'styled-components';

export const Container = styled.div`
  margin: 15px 0 45px 0;
  border: 1px solid #007a8d;
  border-radius: 5px;
  display: inline-flex;
  justify-self: right;
  overflow: hidden;

  @media screen and (max-width: 996px) {
    flex-direction: column;
    width: 100%;
    margin: 0 0 25px 0;
  }
`;

export const Button = styled.div`
  cursor: pointer;

  font-weight: 700;
  border: none;
  border-right: 1px solid #007a8d;

  font-size: 1rem;
  &:last-child {
    border: none;
  }

  input {
    opacity: 0;
    position: absolute;
  }

  padding: 5px 0;

  label {
    padding: 5px 25px;
    color: #007a8d;
    &:hover {
      background: #007a8d;
      color: #fff;
      transition: 0.3s;
    }
  }

  input:checked + label {
    background: #007a8d !important;
    color: #fff !important;
  }

  @media screen and (max-width: 996px) {
    width: 100%;
    padding: 0;
    border-bottom: 1px solid #007a8d;
    border-right: none;
    align-items: center;
    justify-content: center;
    &:last-child {
      border-bottom: none;
    }
    label {
      width: 100%;
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      padding: 10px 25px;
    }
  }
`;
