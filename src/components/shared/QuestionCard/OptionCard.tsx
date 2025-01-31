import styled from "styled-components";
import SmallParagraph from "../text/SmallParagraph";
import React from "react";
import { OptionCardProps } from "@/types/types";

export const OptionCard: React.FC<OptionCardProps> = ({
  icon,
  text,
  handleOptionClick,
  isselected,
}) => {
  return (
    <CardWrapper>
      <CardContainer onClick={handleOptionClick} isselected={isselected}>
        <CardIcon loading="lazy" src={icon} alt="" />
        <SmallParagraph
          textalign="left"
          fontSize="large"
          fontFamily="hindRegular"
          color="#615F5F"
          lineheight="27.6px"
        >
          {text}
        </SmallParagraph>
      </CardContainer>
    </CardWrapper>
  );
};

// Styled Components
const CardWrapper = styled.div`
  display: flex;
  margin-top: 12px;
  width: 100%;
  flex-direction: column;
`;

// const CardContainer = styled.div<{ iscorrect: boolean; iswrong: boolean }>`
//   border-radius: 10px;
//   background-color: ${({ iscorrect, iswrong }) =>
//     iscorrect ? "#d4edda" : iswrong ? "#f8d7da" : "white"};
//   box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
//   display: flex;
//   min-height: 57px;
//   width: 100%;
//   align-items: center;
//   gap: 14px;
//   padding: 10px;
//   cursor: pointer;
//   transition: background-color 0.3s ease, transform 0.2s ease;

//   &:hover {
//     transform: translateY(-2px);
//   }
// `;
// Prevent `isselected` from being forwarded to the DOM
const CardContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isselected",
})<{ isselected?: boolean }>`
  border-radius: 10px;
  background-color: ${({ isselected }) => (isselected ? "#eca393" : "white")};
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  min-height: 57px;
  width: 100%;
  align-items: center;
  gap: 14px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const CardIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 32px;
`;
