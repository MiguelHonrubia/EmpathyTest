import styled from "styled-components";

const ContainerListProps = {
  color: String,
};

export const StyledContainerList = styled("div", ContainerListProps)`
  display: "flex";
  overflow-x: hidden;
  padding-bottom: 20;
  margin: 0px 24px;
`;
