import React from "react";
import styled from "styled-components";

const Divider = () => {
  return <DividerComponent />;
};
const DividerComponent = styled.div`
  align-self: stretch;
  width: 100%;
  height: 1px;
  /* margin: 15px 0; */
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
