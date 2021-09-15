import styled from "styled-components";

export const StyledGlassContainer = styled.div`
  width: 200px;
  height: 80px;
  margin-top: 24px;

  background-color: ${({ color }) => color};
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
`;
