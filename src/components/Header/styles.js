import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Separator = styled.div`
  width: 3px;
  align-self: stretch;
  background: #eeefef;
`;

export const Head = styled.div`
  height: 80px;
  padding: 15px 0;
  background: #fff;

  > div {
    justify-content: space-between;
    display: flex;
    align-items: center;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    margin-left: -25px;
    display: flex;
    width: 525px;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      a {
        text-decoration: none;
        font-size: 18px;
        color: #007a8d;
        font-weight: 700;
        display: flex;
        align-items: center;
        padding: 5px 25px;
        div {
          display: flex;
          flex-direction: column;
          align-items: start;
          font-weight: 700;
          padding-left: 5px;
          span {
            font-size: 12px;
            margin-top: 5px;
          }
        }
        svg {
          font-size: 26px;
          margin-right: 5px;
        }
      }
    }
  }

  img {
    height: 50px;
  }
  z-index: 1;
  box-shadow: 0 0 8px 0px rgba(0, 0, 0, 0.3);
`;
export const Nav = styled.nav`
  background: #18acc4;
  display: flex;
  align-items: center;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    margin-left: -25px;
    margin-right: -25px;

    li {
      display: flex;
      a {
        display: flex;
        text-decoration: none;
        color: #fff;
        font-size: 16px;
        font-weight: 700;
        padding: 10.4px 25px;
        &.active,
        &:hover {
          background: #007a8d;
        }
      }
    }
  }
`;

export const ProfileUser = styled.div`
  font-size: 18px;
  color: #007a8d;
  font-weight: 700;
  width: 500px;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  svg {
    font-size: 26px;
    margin-left: 10px;
  }
`;
