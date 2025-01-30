"use client";
import React from "react";
import { ProgressBar } from "../QuestionCard/ProgressBar";
import { assests } from "../../../../public/assests";
import styled from "styled-components";
import MediumHeading from "../text/MediumHeading";
import RangeSlider from "@/components/template/form/input/RangeSlider";
import { ActionButton } from "@/components/template/button/NextQuestionButton";

export default function BudgetPage() {
  const handleNext = () => {
    // Quiz start logic here
  };
  return (
    <MainContainer>
      <BrandLogo loading="lazy" src={assests.SOYUMMY_MAIN_LOGO_SMALL} />
      <ProgressBar current={5} total={5} />
      <HeaderImage loading="lazy" src={assests.BUDGET_PAGE} />
      <TextWrapper>
        <MediumHeading fontSize="medium" fontFamily="hindMedium"  color="var(--color-basic-black)"  margin="0">  What&apos;s your buget per meal? </MediumHeading>
      </TextWrapper>
      
      <RangeSlider />

      <ActionButton setMarginTop="30px"  height="56px"  type="button"  onClick={handleNext} >   Next  </ActionButton>
    </MainContainer>
  );
}
const BrandLogo = styled.img`
  aspect-ratio: 1.59;
  object-fit: contain;
  object-position: center;
  width: 35px;
  height: 22px;
  margin-bottom: 10px;
`;

const MainContainer = styled.div`
  background-color: #fefaf5;
  display: flex;
  padding: 30px;
  margin: 0 auto;
  align-items: center;
  text-align: center;
  flex-direction: column;
  max-width: 480px;
  width: 100%;
  height: 100vh;
`;

const HeaderImage = styled.img`
  aspect-ratio: 1.62;
  object-fit: contain;
  object-position: center;
  width: 100%;
  border-radius: 0;
  margin-top: 10px;
`;

const TextWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  text-align: left;
`;
