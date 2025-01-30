import { MediumHeadingProps } from "@/types/types";
import React from "react";
import styled from "styled-components";

const MediumHeading = ({
  alignment,
  fontSize,
  color,
  margin,
  fontWeight,
  children,
  fontFamily,
  textAlign,
  lineHeight,
}: MediumHeadingProps) => {
  return (
    <Heading
      alignment={alignment}
      fontSize={fontSize}
      color={color}
      margin={margin}
      fontWeight={fontWeight}
      fontFamily={fontFamily}
      textAlign={textAlign}
      lineHeight={lineHeight}
    >
      {children}
    </Heading>
  );
};
const Heading = styled.h2<{
  alignment?: string;
  fontSize?: string;
  color?: string;
  margin?: string;
  fontWeight?: string;
  fontFamily?: string;
  textAlign?: string;
  lineHeight?: string;
}>`
  /* font-size: ${({ fontSize }) =>
    fontSize === "large" ? "1.875rem" : "1.375rem"}; */
  font-family: var(--font-palmerlakeprint-regular);
  font-size: ${({ fontSize }) =>
    fontSize === "large"
      ? "1.875rem"
      : fontSize === "medium"
      ? "1.375rem"
      : "1.5rem"};
  font-family: ${({ fontFamily }) =>
    fontFamily === "hindRegular"
      ? "var(--font-Hind-regular)"
      : fontFamily === "hindMedium"
      ? "var(--font-hind-medium)"
      : fontFamily === "hindBold"
      ? "var(--font-hind-bold)"
      : "var(--font-palmerlakeprint-regular)"};
  letter-spacing: -0.12px;
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "1.875rem")};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  color: ${({ color }) => color || "var(--color-basic-black)"};
  text-shadow: 0px 12px 56px rgba(0, 0, 0, 0.25);
  align-self: ${({ alignment }) => alignment || "auto"};
  text-align: ${({ textAlign }) => textAlign || "auto"};
  margin: ${({ margin }) => margin || "auto"};
`;

export default MediumHeading;
