import styled from "styled-components";

export const StyledArtistCard = styled("div")`
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

  &:hover {
    .textImageBox {
      visibility: visible;
    }
    .img {
      opacity: 0.3;
      filter: blur(2px);
    }
  }
`;

export const StyledArtistCardBox = styled.div`
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
