"use client";
import * as React from "react";
import styled from "styled-components";
import { StepCard } from "./StepCard";
import { MealStepsProps } from "@/types/types";
import Divider from "@/components/template/Divider";
import HeaderLarge from "@/components/template/text/HeaderLarge";
import { assests } from "../../../../../public/assests";
export const MealSteps: React.FC = () => {
  const steps = [
    {
      number: "1",
      title: "Choose Your Recipes",
      iconSrc: assests.DISH,
    },
    {
      number: "2",
      title: "We Deliver Everything You Need",
      iconSrc: assests.TRUCK,
    },
    {
      number: "3",
      title: "Cook & Enjoy",
      iconSrc: assests.CHEIF,
    },
  ];

  return (
    <Container>
      <PromoBanner>
        <Divider />
        <PromoText>
          Enjoy Up to 10 FREE Meals
          <StepIcon src={assests.PRICE_TAG} loading="lazy" alt="" />
        </PromoText>

        <Divider />
      </PromoBanner>
      <HeaderLarge fontSize="medium">How it works:</HeaderLarge>
      {/* <SectionTitle>How it works:</SectionTitle> */}
      <StepsContainer>
        {steps.map((step, index) => (
          <StepCard
            key={index}
            number={step.number}
            title={step.title}
            iconSrc={step.iconSrc}
          />
        ))}
      </StepsContainer>
    </Container>
  );
};

const Container = styled.section`
  border-radius: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 373px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
    /* align-items: flex-start; */
  }

  @media (max-width: 480px) {
    padding: 0 10px;
  }
`;
const StepIcon = styled.img`
  /* aspect-ratio: 1; */
  /* object-fit: contain; */
  /* object-position: center; */
  /* width: 29px; */
`;
const PromoBanner = styled.div`
  display: flex;
  width: 100%;
  max-width: 288px;
  flex-direction: column;
  align-items: center;
  color: rgba(219, 53, 18, 1);
  margin-bottom: 12px;
`;

const DashedLine = styled.div`
  min-height: 1px;
  width: 100%;
  border: 1px dashed rgba(219, 53, 18, 1);
`;

const PromoText = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: space-between;
  text-shadow: 0px 12px 56px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 1);
  padding: 18px 20px;
  border: 1px solid rgba(219, 53, 18, 1);
  margin: 18px 0;
  font: 600 18px/1 var(--font-hind-semi-bold);
`;

const SectionTitle = styled.h2`
  color: rgba(0, 0, 0, 1);
  text-shadow: 0px 12px 56px rgba(0, 0, 0, 0.25);
  margin-top: 15px;
  font: 400 34px/1 Palmer Lake Print, -apple-system, Roboto, Helvetica,
    sans-serif;
`;

const StepsContainer = styled.div`
  align-self: stretch;
  display: flex;
  margin-top: 23px;
  width: 100%;
  gap: 9px;
`;
