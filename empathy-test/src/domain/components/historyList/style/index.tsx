import styled from "styled-components";

const historyListProps = {
  color: String,
  colorSecondary: String,
};

export const StyledHistoryListBox = styled("div", historyListProps)`
  display: "flex";
  height: 30rem;
  overflow-x: auto;
  margin: 24;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

  &::-webkit-scrollbar {
    width: 12px;
    border-radius: 4px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ color }) => color};
    border-radius: 4px;
  }
`;

export const StyledHistoryItem = styled("div", historyListProps)`
  border-radius: 4px;
  color: white;

  background: rgb(136, 141, 142);
  background: ${({ color, colorSecondary }) => `linear-gradient(
    0deg,
    ${colorSecondary} 0%,
    ${color} 100%
  )`};
  margin: 15px 35px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  &:hover {
    background: ${({ color, colorSecondary }) => `linear-gradient(
    0deg,
    ${color} 0%,
    ${colorSecondary} 100%
  )`};
  }
`;

export const StyledHistoryItemBox = styled.div`
  /* display: flex; */
  justify-content: space-around;

  @media only screen and (min-width: 620px) {
    display: flex;
  }

  @media only screen and (min-width: 1200px) {
    display: grid;
  }

  @media only screen and (min-width: 1800px) {
    display: flex;
  }
`;

export const StyledSearchLabelItem = styled.div`
  margin: 12px;
  width: 20rem;
  overflow-x: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
`;

export const StyledIconLabel = styled.div`
  margin: 12px;
  display: flex;
`;

export const StyledHistoryItemBoxContent = styled.div`
  display: grid;

  @media only screen and (min-width: 920px) {
    display: flex;
  }

  @media only screen and (min-width: 1200px) {
    display: grid;
  }

  @media only screen and (min-width: 1800px) {
    display: flex;
  }
`;
