import styled from "styled-components";

const titleProps = {
  color: String,
  text: String,
};

export const StyledTitle = styled("h1", titleProps)`
  position: relative;
  color: ${({ color }) => color};

  &::after {
    position: absolute;
    z-index: 1;
    right: 0;
    bottom: -28px;
    left: 0;
    display: block;
    content: "${({ text }) => `${text}`}";
    transform: scaleY(-1);
    background-image: ${({ color }) =>
      `linear-gradient(0deg, ${color} 0, transparent 75%)`};
    -webkit-background-clip: text;
    color: transparent;
    opacity: 0.5;

    @media only screen and (min-width: 400px) {
      bottom: -54px;
    }

    @media only screen and (min-width: 600px) {
      bottom: -80px;
    }
  }

  @media only screen and (max-width: 400px) {
    font-size: 2rem;
  }

  @media only screen and (min-width: 400px) {
    font-size: 4rem;
  }

  @media only screen and (min-width: 600px) {
    font-size: 6rem;
  }
`;

export const StyledSubTitle = styled("h2", titleProps)`
  font-size: 1.2rem;
  position: relative;
  color: ${({ color }) => color};
  text-transform: uppercase;

  &::after {
    position: absolute;
    z-index: 1;
    right: 0;
    bottom: -17px;
    left: 0;
    display: block;
    content: "${({ text }) => `${text}`}";
    transform: scaleY(-1);
    background-image: ${({ color }) =>
      `linear-gradient(0deg, ${color} 0, transparent 75%)`};
    -webkit-background-clip: text;
    color: transparent;
    opacity: 0.2;
  }
`;

export const StyledResultTitle = styled("h2", titleProps)`
  font-size: 2rem;
  position: relative;
  color: ${({ color }) => color};
  text-transform: uppercase;
  &::after {
    position: absolute;
    z-index: 1;
    right: 0;
    bottom: -28px;
    left: 0;
    display: block;
    content: "${({ text }) => `${text}`}";
    transform: scaleY(-1);
    background-image: ${({ color }) =>
      `linear-gradient(0deg, ${color} 0, transparent 75%)`};
    -webkit-background-clip: text;
    color: transparent;
    opacity: 0.2;
  }
`;

export const StyledPrimaryTitleContainer = styled.div`
  text-align: center;
  color: ${({ color }) => color};
  width: 100%;
  margin-bottom: 50px;
`;

export const StyledTitleContainer = styled.div`
  margin: 0px 24px;
  padding-top: 24px;

  @media only screen and (max-width: 600px) {
    display: grid;
  }

  @media only screen and (min-width: 800px) {
    display: flex;
  }
`;
