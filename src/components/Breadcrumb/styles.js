import styled from 'styled-components';

export const Container = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 30px 0;

  li {
    margin-right: 10px;
    font-size: 12px;
    &:after {
      content: '/';
      margin-left: 10px;
    }
    a {
      text-decoration: none;
      font-weight: 700;
      color: #007a8d;
    }
  }

  li:last-child:after {
    content: '';
    margin: 0;
  }
`;
