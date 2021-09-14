import styled from "styled-components";

const ContainerListProps = {
  color: String,
};

export const StyledContainerList = styled("div", ContainerListProps)`
  display: "flex";
  overflow-x: auto;
  padding-bottom: 20;

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
