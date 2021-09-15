import styled from "styled-components";

export const StyledHomeButtonContainer = styled.div`
  position: fixed;
  top: 1em;
  right: 2em;
  z-index: 102;
  float: right;
`;

export const StyledBackButtonContainer = styled.div`
  position: fixed;
  top: 1em;
  left: 2em;
  z-index: 102;
  float: left;
`;

export const StyledHomeIconButton = styled.div`
  color: white;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;
