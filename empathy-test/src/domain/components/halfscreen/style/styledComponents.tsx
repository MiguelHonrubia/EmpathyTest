import styled from "styled-components";

const themeProps = {
  bgColor: String,
  colorSecondary: String,
};

export const LeftSideContainer = styled("div", themeProps)`
  background-color: ${({ bgColor }) => bgColor};
  width: 50%;
  height: 100%;
  vertical-align: middle;
  display: flex;
  align-items: center;
`;

export const FullContainer = styled("div", themeProps)`
  width: 100vw;
  height: 100vh;
  background-color: ${({ bgColor }) => bgColor};
  background-position: 100% 0%;
  background-size: contain;
  background-repeat: no-repeat;
`;
