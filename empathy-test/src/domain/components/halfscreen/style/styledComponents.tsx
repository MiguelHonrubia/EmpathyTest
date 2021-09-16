import styled from "styled-components";

const themeProps = {
  bgColor: String,
  colorSecondary: String,
};

export const LeftSideContainer = styled("div", themeProps)`
  background: linear-gradient(
    0deg,
    rgba(66, 74, 82, 1) 0%,
    rgba(94, 98, 102, 1) 100%
  );
  width: 50%;
  height: 100%;
  vertical-align: middle;
  display: flex;
  align-items: center;

  width: 100%;

  @media only screen and (min-width: 1200px) {
    width: 50%;
  }
`;

export const FullContainer = styled("div", themeProps)`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    0deg,
    rgba(66, 74, 82, 1) 0%,
    rgba(94, 98, 102, 1) 100%
  );
  background-repeat: no-repeat;

  @media only screen and (max-width: 600px) {
    background-size: 0%;
  }

  @media only screen and (min-width: 600px) {
    background-size: 0%;
  }

  @media only screen and (min-width: 1200px) {
    background-position: 100% 0%;
    background-size: cover;
  }

  @media only screen and (min-width: 1800px) {
    background-size: contain;
    background-position: 130% 0%;
  }
`;

export const FullAlbumContainer = styled("div", themeProps)`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(66, 74, 82, 1) 0%,
    rgba(94, 98, 102, 1) 100%
  );

  @media only screen and (min-width: 1800px) {
    height: 100vh;
  }
`;
