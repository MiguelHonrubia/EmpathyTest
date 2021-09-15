import { url } from "inspector";
import styled from "styled-components";

export const StyledAlbumCard = styled("div")`
  width: 220;
  height: 270;
  margin: 15px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  background-color: white;
  opacity: 0.6;

  &:hover {
    transform: scale(1.1);
    opacity: 1;
  }
`;

export const StyledDetailAlbumCard = styled.div`
  display: inline-block;
  margin: 15px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  background-color: white;
`;

export const StyledAlbumsCardBox = styled.div`
  overflow-x: auto;
  display: flex;
  padding-bottom: 24px;
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

export const StyledAlbumDetailContainer = styled.div`
  display: flex;
  height: "100%";
  justify-content: space-around;
`;
