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
  lineHeight,
  textAlign,
  Opacity,
}: MediumHeadingProps) => {
  return (
    <Paragraph
      alignment={alignment}
      fontSize={fontSize}
      color={color}
      margin={margin}
      fontWeight={fontWeight}
      fontFamily={fontFamily}
      lineHeight={lineHeight}
      textAlign={textAlign}
      Opacity={Opacity}
    >
      {children}
    </Paragraph>
  );
};

const Paragraph = styled.p<{
  alignment?: string;
  fontSize?: string;
  color?: string;
  margin?: string;
  fontWeight?: string;
  fontFamily?: string;
  lineHeight?: string;
  textAlign?: string;
  Opacity?: string;
}>`
  font-size: ${({ fontSize }) =>
    fontSize === "large" ? "1.125rem" : fontSize === "medium" ? "1rem" : fontSize === "small" ? "0.7rem" : ""};
  font-family: ${({ fontFamily }) =>
    fontFamily === "hindRegular"
      ? "var(--font-Hind-regular)"
      : fontFamily === "hindLight"
        ? "var(--font-Hind-Light)"
      : fontFamily === "molishMixed"
        ? "var(--font-mulish-mixed)"
        : ""};
  letter-spacing: -0.12px;
  line-height: ${({ lineHeight }) => lineHeight ? lineHeight : "1.375rem"};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  color: ${({ color }) => color || "#000"};
  text-shadow: 0px 12px 56px rgba(0, 0, 0, 0.25);
  align-self: ${({ alignment }) => alignment || "auto"};
  margin: ${({ margin }) => margin ? margin : ""};
  text-align: ${({ textAlign }) => textAlign || "center"};
  opacity: ${({ Opacity }) => Opacity ? Opacity : ""};
`;

export default SmallParagraph;
