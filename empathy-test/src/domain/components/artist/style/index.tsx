import styled from "styled-components";

export const StyledArtistCard = styled("div")`
  width: 220;
  height: 270;
  margin: 15px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  background-color: white;

  &:hover {
    transform: scale(1.1);
  }
`;
