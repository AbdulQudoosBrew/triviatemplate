import { LargeHeadingProps } from "@/types/types";
import React from "react";
import styled from "styled-components";

const HeaderLarge = ({
  alignment,
  fontSize,
  color,
  margin,
  fontWeight,
  children,
  padding,
  border,
}: // position,
LargeHeadingProps) => {
  return (
    <Heading
      alignment={alignment}
      fontSize={fontSize}
      color={color}
      margin={margin}
      fontWeight={fontWeight}
      padding={padding}
      border={border}
      // position={position}
    >
      {children}
    </Heading>
  );
};
const Heading = styled.h1<{
  alignment?: string;
  fontSize?: string;
  color?: string;
  margin?: number;
  fontWeight?: string;
  padding?: string;
  border?: string;
}>`
  padding: ${({ padding }) => (padding ? padding : "")};
  font-size: ${({ fontSize }) =>
    fontSize === "large"
      ? "2.5rem"
      : fontSize === "medium"
      ? "2.125rem"
      : "1.375rem"};
  font-family: var(--font-palmerlakeprint-regular);
  letter-spacing: -0.12px;
  line-height: 1.875rem;
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  color: ${({ color }) => color || "#000;"};
  text-shadow: 0px 12px 56px rgba(0, 0, 0, 0.25);
  align-self: ${({ alignment }) => alignment || "auto"};
  border: ${({ border }) => (border ? border : "")};
  /* position: relative; */
`;

export default HeaderLarge;
