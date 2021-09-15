import styled from "styled-components";

export const StyledLanguageContainer = styled.div`
  z-index: 200;
  position: fixed;
  right: 4rem;
  top: 3rem;
  width: 100px;
  height: 50px;
  background-color: white;
  border-radius: 20px 4px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

export const StyledLanguageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
