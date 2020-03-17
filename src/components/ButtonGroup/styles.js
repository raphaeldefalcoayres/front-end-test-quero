import styled from 'styled-components';

export const Container = styled.div`
  margin: 25px 0;
  border: 1px solid #007a8d;
  border-radius: 5px;
  display: inline-flex;
  justify-self: right;
  overflow: hidden;
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
`;
