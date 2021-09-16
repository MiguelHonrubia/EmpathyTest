import styled from "styled-components";

const searchButtonProps = {
  loading: Boolean,
  color: String,
  hoverColor: String,
};

export const StyledSearchBox = styled.div`
  display: flex;
  width: 100%;
`;

export const StyledSearchForm = styled.form`
  margin: auto;
  width: 100%;
`;

export const StyledSecondaryButton = styled("button", searchButtonProps)`
  border: ${({ color }) => `2px solid  ${color}`};
  border-radius: 0.5rem;
  background-color: transparent;
  color: ${({ loading }) =>
    loading == "false" ? "#f7f7f7" : "rgba(255, 255, 255, 0.5)"};
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  height: 2.3rem;
  padding: 0 3rem;
  font-family: inherit;
  font-size: 1.25rem;
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  &:hover {
    background: ${({ hoverColor }) => hoverColor};
  }
  &:focus {
    box-shadow: ${({ hoverColor }) => `0 0 0 3px ${hoverColor}`};
  }
`;

export const StyledPrimaryButton = styled("button", searchButtonProps)`
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  height: 2.3rem;
  padding: 0 3rem;
  font-family: inherit;
  font-size: 1.25rem;
  border: 0;
  border-radius: 0.5rem;
  color: ${({ loading }) =>
    loading == "false" ? "#f7f7f7" : "rgba(255, 255, 255, 0.5)"};
  background: ${({ loading, color }) =>
    loading == "false"
      ? color
      : `${color} repeating-linear-gradient(60deg,transparent,transparent 10px,${color} 10px,${color} 20px)`};
  cursor: pointer;
  outline: none;
  transition-property: background, box-shadow;
  transition-duration: 0.35s;

  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  &:hover {
    background: ${({ hoverColor }) => hoverColor};
  }
  &:focus {
    box-shadow: ${({ hoverColor }) => `0 0 0 3px ${hoverColor}`};
  }

  @media only screen and (min-width: 600px) {
    margin-top: 0px;
  }
`;

export const StyledSearchInput = styled.input`
  height: 2rem;
  display: grid;
  width: 100%;
`;

export const StyledButtonContainer = styled.div`
  justify-content: center;
  margin-top: 35;
  display: grid;
  width: 100%;
  align-items: center;
  margin: auto;

  @media only screen and (min-width: 600px) {
    display: flex;
  }
`;
