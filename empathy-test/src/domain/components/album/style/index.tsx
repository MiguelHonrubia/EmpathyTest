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
  height: "100%";

  @media only screen and (min-width: 1800px) {
    display: flex;
    justify-content: space-around;
  }
`;

export const StyledLabelAlbumCardContainer = styled.div`
  margin: 10px;
`;

export const StyledLabelAlbumCard = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledNoWrapLabel = styled.div`
  margin: 10px;
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const StyledAlbumListTitleContainer = styled.div`
  margin: 24px;
  margin-left: 0px;
`;

export const StyledAlbumImgCard = styled.img`
  margin: 10px 10px auto;
  height: 200px;
  width: 200px;
`;

export const StyledAlbumCardContent = styled.div`
  width: 220px;
  margin-left: 5px;
`;

export const StyledAlbumContainer = styled.div`
  @media only screen and (min-width: 1800px) {
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: center;
    height: 100%;
  }
`;

export const StyledGeneralInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px;
  width: 100%;
  color: white;
`;

export const StyledSeparator = styled.div`
  height: 50px;
  width: 1px;
  background: white;
`;

export const StyledIconLabel = styled.div`
  width: 150px;
  display: flex;
  justify-content: center;
`;

export const StyledAlbumCover = styled.img`
  margin: 10px;
  height: 270px;
  width: 270px;

  @media only screen and (min-width: 1000px) {
    height: 570px;
    width: 570px;
  }
`;
