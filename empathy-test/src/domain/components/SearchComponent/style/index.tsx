import styled from "styled-components";

const searchButtonProps = { loading: Boolean };

export const StyledSearchBox = styled.div`
  display: flex;
  width: 100%;
`;

export const StyledSearchForm = styled.form`
  display: flex;
  margin: auto;
`;

export const StyledSearchButton = styled("button", searchButtonProps)`
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 2.3rem;
  padding: 0 3rem;
  font-family: inherit;
  font-size: 1.25rem;
  border: 0;
  border-radius: 0.5rem;
  color: ${({ loading }) =>
    loading == "false" ? "#f7f7f7" : "rgba(255, 255, 255, 0.5)"};
  background: ${({ loading }) =>
    loading == "false"
      ? "#5d2fdf"
      : "#5d2fdf repeating-linear-gradient(60deg,transparent,transparent 10px,#5526c5 10px,#5526c5 20px)"};
  cursor: pointer;
  outline: none;
  transition-property: background, box-shadow;
  transition-duration: 0.35s;
  &:hover {
    background: #5526c5;
  }
  &:focus {
    box-shadow: 0 0 0 3px #8659e9;
  }
`;

export const StyledSearchInput = styled.input`
  height: 2rem;
`;
