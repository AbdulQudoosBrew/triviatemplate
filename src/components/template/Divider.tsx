import React from "react";
import styled from "styled-components";

const Divider = ({ margin }: { margin?: string }) => {
  return <DividerComponent margin={margin} />;
};
const DividerComponent = styled.div<{ margin?: string }>`
  align-self: stretch;
  width: 100%;
  height: 1px;
  margin: ${({ margin }) => margin ? margin : ""};
  border: none;
  border-top: 2px dashed rgba(219, 53, 18, 1);
  border-image: repeating-linear-gradient(
      to right,
      rgba(219, 53, 18, 1),
      rgba(219, 53, 18, 1) 10px,
      transparent 10px,
      transparent 20px
    )
    1;
`;
export default Divider;
