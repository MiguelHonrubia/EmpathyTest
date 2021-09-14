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
