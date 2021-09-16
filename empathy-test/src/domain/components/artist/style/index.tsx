import styled from "styled-components";

export const StyledArtistCard = styled("div")`
  cursor: pointer;
  .textImage {
    text-transform: uppercase;
    color: white;
    width: 100px;
    text-align: center;
  }

  .textImageBox {
    visibility: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 220px;
    width: 220px;
    left: -220px;
    margin-right: -210px;
  }

  .imgDetail {
    width: 300px;
    height: 300px;
    @media only screen and (min-width: 600px) {
      width: 500px;
      height: 500px;
    }
  }

  &:hover {
    .textImageBox {
      visibility: ${({ activeHover }) => (activeHover ? "visible" : "hidden")};
    }
    .img {
      opacity: ${({ activeHover }) => (activeHover ? 0.3 : 1)};
      filter: ${({ activeHover }) => (activeHover ? "blur(2px)" : null)};
    }
  }
`;

export const StyledArtistCardBox = styled.div`
  overflow-x: auto;
  display: flex;
  padding-bottom: 24px;
  box-shadow: ${({ hiddenBox }) =>
    hiddenBox
      ? null
      : "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"};

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

export const StyledTitleContainer = styled.div`
  margin: 24px;
  margin-left: 0px;
`;

export const StyledImage = styled.img`
  margin: 15px 10px auto;
  border-radius: 50%;
`;

export const StyledIconLabel = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
`;

export const StyledSeparator = styled.div`
  height: 1px;
  width: 220px;
  margin-top: 20px;
  margin-bottom: 20px;
  background: white;

  @media only screen and (min-width: 600px) {
    height: 50px;
    width: 1px;
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;

export const StyledInfoContainer = styled.div`
  display: grid;
  justify-content: space-around;
  align-items: center;
  margin: 10px;
  width: 100%;
  color: white;

  @media only screen and (min-width: 600px) {
    display: flex;
  }
`;

export const StyledArtistInfoContainer = styled.div`
  padding-top: 30px;

  @media only screen and (min-width: 1600px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const StyledArtistInfoContainerBox = styled.div``;
