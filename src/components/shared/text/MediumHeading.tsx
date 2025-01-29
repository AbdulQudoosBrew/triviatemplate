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
}: MediumHeadingProps) => {
  return (
    <Heading
      alignment={alignment}
      fontSize={fontSize}
      color={color}
      margin={margin}
      fontWeight={fontWeight}
    >
      {children}
    </Heading>
  );
};
const Heading = styled.h2<{
  alignment?: string;
  fontSize?: string;
  color?: string;
  margin?: number;
  fontWeight?: string;
}>`
  font-size: ${({ fontSize }) =>
    fontSize === "large" ? "1.875rem" : "1.375rem"};
  font-family: var(--font-palmerlakeprint-regular);
  letter-spacing: -0.12px;
  line-height: 1.875rem;
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  color: ${({ color }) => color || "#000;"};
  text-shadow: 0px 12px 56px rgba(0, 0, 0, 0.25);
  align-self: ${({ alignment }) => alignment || "auto"};
`;

export default MediumHeading;
