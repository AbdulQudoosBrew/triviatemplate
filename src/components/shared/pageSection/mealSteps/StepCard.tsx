"use client";
import styled from "styled-components";
import * as React from "react";
import { StepCardProps } from "@/types/types";
import SmallHeading from "../../text/SmallHeading";

export const StepCard: React.FC<StepCardProps> = ({
  number,
  title,
  iconSrc,
}) => {
  return (
    <CardContainer>
      <StepNumber>{number}</StepNumber>
      <TitleContainer>
        <SmallHeading fontFamily="hindBold" fontSize="medium" fontWeight="700">
          {title}
        </SmallHeading>
        {/* <StepTitle>{title}</StepTitle> */}
        {iconSrc && <StepIcon src={iconSrc} loading="lazy" alt="" />}
      </TitleContainer>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  border-radius: 15px;
  background-color: rgba(247, 209, 197, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  width: 100px;
  min-height: 158px;
  flex: 1;
  padding: 0 20px 0;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  padding: 15px 20px 15px;
`;

const StepNumber = styled.div`
  text-shadow: 0px 12px 56px rgba(0, 0, 0, 0.25);
  background-color: rgba(219, 53, 18, 1);
  border-radius: 50%;
  z-index: 10;
  margin-top: -14px;
  color: rgba(255, 255, 255, 1);
  white-space: nowrap;
  width: 41px;
  height: 41px;
  padding: 0 15px;

  font: 400 40px/1 var(--font-palmerlakeprint-regular), Helvetica, sans-serif;
`;


const StepIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 29px;
  margin-top: 23px;
`;
