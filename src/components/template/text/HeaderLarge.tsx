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
  fontFamily,
  lineHeight,
}: LargeHeadingProps) => {
  return (
    <Heading
      alignment={alignment}
      fontSize={fontSize}
      color={color}
      margin={margin}
      fontWeight={fontWeight}
      padding={padding}
      border={border}
      fontFamily={fontFamily}
      lineHeight={lineHeight}
    >
      {children}
    </Heading>
  );
};
const Heading = styled.h1<{
  alignment?: string;
  fontSize?: string;
  color?: string;
  margin?: string;
  fontWeight?: string;
  padding?: string;
  border?: string;
  fontFamily?: string;
  lineHeight?: string;
}>`
  padding: ${({ padding }) => (padding ? padding : "")};

  font-size: ${({ fontSize }) =>
    fontSize === "large"
      ? "2.5rem"
      : fontSize === "medium"
      ? "2.125rem"
      : fontSize === "semiLarge"
      ? "2.75rem"
      : ""};
  font-family: ${({ fontFamily }) =>
    fontFamily === "hindReguler"
      ? "var(--font-Hind-regular)"
      : fontFamily === "hindLight"
      ? "var(--font-Hind-Light)"
      : "var(--font-palmerlakeprint-regular)"};
  letter-spacing: -0.12px;
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "1.875rem")};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  color: ${({ color }) => color || "#000;"};
  text-shadow: 0px 12px 56px rgba(0, 0, 0, 0.25);
  align-self: ${({ alignment }) => alignment || "auto"};
  border: ${({ border }) => (border ? border : "")};
  position: relative;
  margin: ${({ margin }) => (margin ? margin : "")};
`;

export default HeaderLarge;
