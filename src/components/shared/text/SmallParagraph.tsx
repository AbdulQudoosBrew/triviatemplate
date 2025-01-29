import { MediumHeadingProps } from "@/types/types";
import React from "react";
import styled from "styled-components";

const SmallParagraph = ({
  alignment,
  fontSize,
  fontFamily,
  color,
  margin,
  fontWeight,
  children,
}: MediumHeadingProps) => {
  return (
    <Paragraph
      alignment={alignment}
      fontSize={fontSize}
      color={color}
      margin={margin}
      fontWeight={fontWeight}
      fontFamily={fontFamily}
    >
      {children}
    </Paragraph>
  );
};

const Paragraph = styled.p<{
  alignment?: string;
  fontSize?: string;
  color?: string;
  margin?: number;
  fontWeight?: string;
  fontFamily?: string;
}>`
  font-size: ${({ fontSize }) =>
    fontSize === "large" ? "1.125rem" : fontSize === "medium" ? "1rem" : ""};
  font-family: ${({ fontFamily }) =>
    fontFamily === "hindRegular"
      ? "var(--font-Hind-regular)"
      : fontFamily === "hindLight"
      ? "var(--font-Hind-Light)"
      : ""};
  letter-spacing: -0.12px;
  line-height: 1.563rem;
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  color: ${({ color }) => color || "#000;"};
  text-shadow: 0px 12px 56px rgba(0, 0, 0, 0.25);
  align-self: ${({ alignment }) => alignment || "auto"};
`;

export default SmallParagraph;
