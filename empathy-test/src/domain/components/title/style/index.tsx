import styled from "styled-components";

const titleProps = {
  color: String,
  content: String,
};

export const StyledTitle = styled("h1", titleProps)`
  font-size: 6rem;
  position: relative;
  color: ${({ color }) => color};

  &::after {
    position: absolute;
    z-index: 1;
    right: 0;
    bottom: -80px;
    left: 0;
    display: block;
    content: "EMPATHY.CO";
    transform: scaleY(-1);
    background-image: ${({ color }) =>
      `linear-gradient(0deg, ${color} 0, transparent 75%)`};
    -webkit-background-clip: text;
    color: transparent;
    opacity: 0.5;
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
    content: "Search history";
    transform: scaleY(-1);
    background-image: ${({ color }) =>
      `linear-gradient(0deg, ${color} 0, transparent 75%)`};
    -webkit-background-clip: text;
    color: transparent;
    opacity: 0.1;
  }
`;