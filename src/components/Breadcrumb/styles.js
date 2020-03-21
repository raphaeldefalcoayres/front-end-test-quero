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
    display: none;
  }

  @media screen and (max-width: 996px) {
    padding-top: 10px;
    padding-bottom: 5px;

    li {
      display: none;
      font-size: 1rem;
      &::after {
        display: none;
      }
      a::before {
        content: '‹';
        font-size: 2rem;
        margin-right: 10px;
        color: #007a8d;
        top: 3px;
        position: relative;
      }
    }
    li:nth-last-child(2) {
      display: block;
    }
  }
`;
