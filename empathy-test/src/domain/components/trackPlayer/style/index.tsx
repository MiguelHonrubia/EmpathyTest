import styled from "styled-components";
const radius = "0.5rem";

export const StyledTrackPlayerContainer = styled.div`
  position: fixed;
  bottom: 1em;
  right: 2em;
  z-index: 102;
  float: right;
`;

export const StyledTrackPlayerBox = styled.div`
  width: 380px;
  overflow-x: hidden;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

export const StyledTrackContent = styled.div`
  position: relative;
  flex: 1 0 auto;
  border-radius: 0 ${radius} ${radius} 0;
  background-color: #424a52;
  display: flex;
`;

export const StyledTrackIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 72px;
  width: 72px;
  height: 72px;
  font-size: 2rem;
  border-radius: ${radius} 0 0 ${radius};
  background: ${({ color }) => color};
  color: white;
`;

export const StyledTrackInfo = styled.div`
  margin: auto auto auto 10px;
  color: white;
  font-weight: 400;
  max-width: 200px;
  text-overflow: ellipsis;
  overflow-x: hidden;
  white-space: nowrap;
`;

export const StyledImage = styled.img`
  width: 50px;
  height: 50px;
  margin: auto 10px auto auto;
`;

export const StyledNoDataImage = styled.img`
  width: 50px;
  height: 50px;
  margin: auto 10px auto auto;
  background-color: black;
`;

export const StyledCloseButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
