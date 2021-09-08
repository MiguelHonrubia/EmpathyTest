import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
0% {
    opacity:0;
    transform: translateY(2px)
}
100%{
    opacity: 1;
    transform: translateY(0);
}
`;

export const StyledCoolBox = styled.div`
  animation: ${fadeIn} 0.5s;
`;
