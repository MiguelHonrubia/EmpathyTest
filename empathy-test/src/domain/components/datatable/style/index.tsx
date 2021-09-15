import styled from "styled-components";

export const StyledLink = styled.span`
  color: white;
  font-weight: 500;
  &:hover {
    color: ${({ color }) => color};
  }
`;

export const StyledCellText = styled.span`
  color: white;
  font-weight: 500;
`;

export const StyledTableContainer = styled.div`
  margin-bottom: 24;
  display: flex;
  max-height: ${({ maxHeight }) => maxHeight};
  overflow-y: auto;
  width: 100%;
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
