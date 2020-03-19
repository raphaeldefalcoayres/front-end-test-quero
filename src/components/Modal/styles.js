import styled, { keyframes } from 'styled-components';
import { lighten } from 'polished';

const bounceIn = keyframes`
  0% {
    transform: scale(0.1);
    opacity: 0;
  }
  60% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
`;

export const Container = styled.div`
  display: ${props => (props.open && props.open === true ? 'flex' : 'none')};
  width: 100%;
  height: 100%;
  background: rgba(31, 45, 48, 0.8);
  position: absolute;
  z-index: 9999;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  overflow: hidden;
`;
export const Box = styled.div`
  min-width: 750px;
  max-width: 90%;
  background: #fff;
  margin: 185px auto 30px auto;
  box-shadow: 0 0 5px -5px #000;
  animation: ${bounceIn} 0.3s 0s both;
  position: relative;
  padding: 38px 38px;
  display: table;
`;
export const Title = styled.h2`
  font-size: 20px;
  color: #1f2d30;
  margin: 5px 0;
  display: flex;
  justify-content: space-between;
`;
export const SubTitle = styled.h5`
  font-size: 14px;
  color: #1f2d30;
  margin: 5px 0;
  display: flex;
  justify-content: space-between;
  font-weight: normal;
`;

export const Body = styled.div`
  font-size: 14px;
  color: #1f2d30;
  min-height: 300px;
  margin-top: 50px;
`;
export const Footer = styled.div`
  margin: 36px 0 0 0;
  font-size: 14px;
  display: flex;
  justify-content: flex-end;
`;
export const ButtonDefault = styled.button`
  padding: 10px 25px;
  font-weight: 600;
  border-radius: 2px;
  margin-left: 5px;
  background: #fff;
  color: #007a8d;
  border: 1px solid #007a8d;
  font-size: 14px;
  cursor: pointer;
`;

export const ButtonAction = styled.button`
  padding: 10px 25px;
  font-weight: 600;
  border-radius: 2px;
  margin-left: 5px;
  background: ${props => (props.disabled ? '#CACDCE' : '#FDCB13')};
  color: ${props => (props.disabled ? '#83898B' : '#1F2D30')};
  border: 1px solid ${props => (props.disabled ? '#B5B9BA' : '#DE9E1F')};
  font-size: 14px;
  margin-left: 15px;
  ${props =>
    props.disabled
      ? 'cursor:not-allowed;pointer-evetns:none;'
      : 'cursor:pointer;'}
  &:hover {
    background: ${props =>
      props.disabled ? '#CACDCE' : lighten(0.2, '#FDCB13')};
  }
`;

export const Close = styled.button`
  border: none;
  background: none;
  position: absolute;
  top: -50px;
  right: -5px;
  cursor: pointer;
  svg {
    width: 36px;
    height: 36px;
    color: #fff;
  }
`;

export const RowForm = styled.div`
  display: flex;
  align-items: stretch;
`;
export const InputGroup = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  margin-bottom: 25px;
  margin-right: 15px;
  position: relative;

  div {
    display: flex;
  }

  &:last-child {
    margin-right: 0;
  }
  input[type='text'],
  select,
  textarea {
    width: 100%;
    padding: 15px 15px;
    border-radius: 3px;
    border-color: #cfd2d2;
    font-size: 0.875rem;
  }

  select {
    appearance: none !important;
  }

  > label {
    width: 100%;
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 5px;
  }
`;

export const SelectIcon = styled.div`
  position: absolute;
  bottom: 15px;
  right: 10px;
  svg {
    width: 16px;
    height: 16px;
    color: #777b7e;
  }
`;

export const Checkbox = styled.div`
  display: flex;
  margin-right: 25px;
  label {
    display: flex;
    align-items: center;
    font-weight: normal;
  }
  span {
    color: #1f2d30;
    margin-left: 8px;
    font-size: 14px;
  }
  input {
    user-select: none;
    flex-shrink: 0;
    height: 1em;
    width: 1em;
    color: #18acc4;
    border: 1px solid #303d40;
    border-radius: 2px;
    display: inline-block;
    vertical-align: middle;
    background-origin: border-box;
    appearance: none;
    padding: 0;

    &:checked {
      background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
      border-color: transparent;
      background-color: currentColor;
      background-size: 120% 120%;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
`;

export const RowCheckbox = styled.div`
  display: flex;
  margin-top: 25px;
`;
export const TableHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  h5 {
    font-size: 1rem;
  }
`;
export const ButtonOrder = styled.button`
  background: none;
  border: none;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  b {
    color: #18acc4;
    margin-left: 5px;
  }
  svg {
    width: 18px;
    height: 18px;
    color: #18acc4;
  }
`;

export const ContainerTable = styled.div`
  margin-top: 15px;
  max-height: 430px;
  overflow-y: auto;
  display: flex;
  border-bottom: 2px solid #eeefef;

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #e5e5e5;
  }

  &::-webkit-scrollbar {
    width: 5px;
    background-color: #e5e5e5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #c5c5c5;
  }
`;
export const TableList = styled.table`
  width: 100%;
  border-collapse: collapse;
  tbody {
    tr {
      td {
        border-top: 2px solid #eeefef;
        padding: 20px 15px;

        &:first-child {
          max-width: 35px;
          padding-left: 0;
        }
        &:nth-child(2) {
          width: 135px;
        }
        &:nth-child(3) {
          width: 55%;
          strong {
            color: #007a8d;
          }
        }
        &:last-child {
          padding-right: 5px;
          div {
            text-align: right;
            b,
            strong {
              color: #287d37;
            }
          }
        }

        div {
          display: flex;
          flex-direction: column;
          line-height: 20px;
          img {
            max-height: 28px;
            max-width: 106px;
            display: block;
            align-self: center;
          }
        }
      }
    }
  }
`;
