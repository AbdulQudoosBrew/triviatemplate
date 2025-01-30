import { MediumHeadingProps } from "@/types/types";
import React from "react";
import styled from "styled-components";

const SmallHeading = ({
  alignment,
  fontSize,
  color,
  margin,
  fontWeight,
  children,
  fontFamily,
}: MediumHeadingProps) => {
  return (
    <Heading
      alignment={alignment}
      fontSize={fontSize}
      color={color}
      margin={margin}
      fontWeight={fontWeight}
      fontFamily={fontFamily}
    >
      {children}
    </Heading>
  );
};
const Heading = styled.h2<{
  alignment?: string;
  fontSize?: string;
  fontFamily?: string;
  color?: string;
  margin?: string;
  fontWeight?: string;
}>`
  font-size: ${({ fontSize }) =>
    fontSize === "medium"
      ? "1rem"
      : fontSize === "semiMedium"
      ? "1.125rem"
      : "0.75rem"};
  font-family: ${({ fontFamily }) =>
    fontFamily === "hindBold"
      ? "var(--font-hind-bold);"
      : fontFamily === "hindSemiBold"
      ? "var(--font-hind-semi-bold);"
      : "var(--font-Hind-Light);"};
  line-height: 1.375;
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  color: ${({ color }) => color || "#000;"};
  text-shadow: 0px 12px 56px rgba(0, 0, 0, 0.25);
  align-self: ${({ alignment }) => alignment || "auto"};
`;

export default SmallHeading;
