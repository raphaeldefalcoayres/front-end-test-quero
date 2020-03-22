import styled from 'styled-components';

export const Container = styled.header`
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
        small {
          display: none;
        }
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

  @media screen and (max-width: 996px) {
    height: 60px;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;

    #item-call {
      display: none;
    }
    img {
      height: 40px;
    }

    ul {
      li {
        a {
          flex-direction: column;
          padding: 0 20px;
          small {
            display: block;
            font-size: 0.875rem;
          }
          span {
            display: none;
          }
          svg {
            margin: 0;
            width: 28px;
            height: 28px;
          }
        }
      }
    }
  }
`;
export const Nav = styled.nav`
  background: #18acc4;
  display: flex;
  align-items: center;

  small,
  button {
    display: none;
  }

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

  @media screen and (max-width: 996px) {
    height: 40px;
    font-size: 1rem;
    font-weight: 600;
    color: #fff;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
    }

    button {
      border: none;
      background: none;
      padding: 0;
      font-size: 1rem;
      font-weight: 600;
      color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;

      svg {
        margin-left: 5px;
      }

      &:focus ~ ul,
      &:focus-within ~ ul {
        display: block;
      }
    }

    small {
      display: block;
      font-size: 1rem;
    }
    ul {
      display: none;
      position: absolute;
      flex-direction: column;
      right: 0;
      top: 28px;
      background: #18acc4;
      box-shadow: inset -5px 10px 12px -11px rgba(0, 0, 0, 0.5);
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
  small {
    display: none;
  }

  div {
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 996px) {
    justify-content: flex-end;
    div {
      border-left: 3px solid #eeefef;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding-left: 15px;
    }
    small {
      display: block;
      font-size: 0.875rem;
    }
    span {
      display: none;
    }
    svg {
      margin: 0;
      width: 24px;
      height: 24px;
    }
  }
`;

export const Logo = styled.div`
  @media screen and (max-width: 996px) {
  }
`;
