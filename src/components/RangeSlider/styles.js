import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  input {
    appearance: none;
    width: 100%;
    height: 5px;
    background: #18acc4;
    outline: none;
    opacity: 0.7;
    transition: opacity 0.2s;
    margin-top: 25px;
    border-radius: 5px;

    &:hover {
      opacity: 1;
    }

    &::-webkit-slider-thumb {
      appearance: none;
      width: 25px;
      height: 25px;
      background: #fff;
      border-radius: 100%;
      border: 1.5px solid #18acc4;
      cursor: pointer;
    }
  }
`;
