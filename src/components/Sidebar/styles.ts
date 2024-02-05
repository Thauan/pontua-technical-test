import { Link } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

interface SidebarProps {
  opened?: boolean;
  appearFromRight?: string;
}

interface LogoProps {
  opened?: boolean;
}

interface ListItemProps {
  active?: boolean;
  appearFromRight?: string;
}

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  height: 100%;
  width: 256px;
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  box-shadow: 6px 0px 18px 0px rgba(0, 0, 0, 0.06);
`;

export const SidebarElement = styled.header<SidebarProps>`
  ${({ opened, appearFromRight }) => css`
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;


    .logo {
      width: 110px;
      height: 35px;
    }

    .divider {
      border-bottom: 1px solid #ebeff2;
      width: 100%;
    }

    ${
      !!opened &&
      `
      width: 256px;
      background: var(--shadow-black-color);
      display: flex;
      align-items: center;
      transition: width .3s;
    `
    }

    ${
      !opened &&
      `
      width: 60px;
      flex-direction: column;
      justify-content: space-between;
      transition: width .3s;
      `
    }


    nav {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
        box-shadow: 6px 0px 18px 0px rgba(0, 0, 0, 0.06);
        background: var(--white, #fff);

        ul {
          margin-top: 16px;
          width: 100%;
          text-align: center;
          display: flex;
          align-items: center;
          flex-direction: column;

          .link {
            gap: 10px;

            &--active {
              animation: ${appearFromRight} 0.4s;
              color: #f21a05;
            }

            svg {
              width: 24px;
              height: 24px;
              stroke: #000;
            }

            &--active > svg {
              width: 24px;
              height: 24px;
              stroke: #f21a05;
            }
          }
          a {
            width: 100%;
            padding: 16px 0;
            border-radius: 8px 0 0 8px;

            display: flex;
            align-items: center;
            justify-content: center;

            transition: background 0.3s;

            &:hover {
              background: var(--primary-background);

              svg {
                path {
                  color: var(--third-color);
                }
              }
            }
          }
        }
      }

        ul {
          margin-bottom: 16px;
          text-align: center;
          width: 100%;
          display: flex;
          align-items: center;
          flex-direction: column;

          li {
            cursor: pointer;
          }

          ul {
            margin-top: 15px;
            width: 100%;
            text-align: left;
            display: flex;
            flex-direction: column;

            .link {
              &--active {
                animation: ${appearFromRight} 0.4s;
                color: #f21a05;
              }

              svg {
                width: 24px;
                height: 24px;
              }

              &--active > svg {
                width: 24px;
                height: 24px;
                stroke: #f21a05;
              }
            }

            a {
              color: #000000;
              padding: 16px 20px;
              border-radius: 8px 0 0 8px;

              display: flex;
              align-items: center;
              gap: 16px;

              transition: background 0.3s;
            }
          }
  `}
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
  box-shadow: 6px 0px 18px 0px rgba(0, 0, 0, 0.06);
  background: var(--white, #fff);

  > button {
    width: 100%;
    padding: 18px;

    &:hover {
      svg {
        path {
          color: var(--third-color);
        }
      }
    }
  }

  > button svg {
    width: 24px;
    height: 24px;

    color: #c4c4c4;
  }
`;

export const Box = styled.div`
  margin: 13px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  width: 100%;
  gap: 0px;
  padding: 3px;

  h1 {
    color: #fff;
    font-size: 14px;

    animation: ${appearFromRight} 0.4s;
  }
`;

export const LogoContainer = styled.div<LogoProps>`
  width: 90%;
  display: flex;
  justify-content: center;

  img {
    margin-left: ${(props) => props.opened ? '30px' : '0'};
  }
`;

export const Divider = styled.div`
  border-bottom: 1px solid #ebeff2;
  width: 100%;
`;

export const List = styled.ul`
  margin-top: 16px;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ListItem = styled(Link)<ListItemProps>`
  ${({ active, appearFromRight }) => css`
    cursor: pointer;

    color: #000000;
    padding: 16px 20px;
    border-radius: 8px 0 0 8px;

    display: flex;
    align-items: center;
    gap: 10px;

    width: 100%;
    padding: 16px 0;
    border-radius: 8px 0 0 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background 0.3s;

    &:hover {
      background: var(--primary-background);

      svg {
        path {
          color: var(--third-color);
        }
      }
    }

    svg {
      width: 24px;
      height: 24px;
      stroke: #000;
    }

    ${!!active &&
    `
        animation: ${appearFromRight} 0.4s;
        color: #f21a05;

        > svg {
          width: 24px;
          height: 24px;
          stroke: #f21a05;
        }
    `}
  `}
`;
