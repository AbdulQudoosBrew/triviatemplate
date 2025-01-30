"use client";
import * as React from "react";
import styled from "styled-components";
import { HeroImage } from "./HeroImage";
import { assests } from "../../../../../public/assests";
import SmallHeading from "../../text/SmallHeading";
import HeaderLarge from "@/components/template/text/HeaderLarge";

interface CookingHeroProps {
  bannerWidth?: string;
  heroText?: string;
  imageSrc?: string;
}

export const CookingHero: React.FC<CookingHeroProps> = ({
  bannerWidth = "190px",
  imageSrc = assests.PERFECT_MATCH,
}) => {
  return (
    <HeroContainer>
      <HeaderLarge fontSize="semiLarge">YOUR PERFECT MATCH</HeaderLarge>
      <Banner />
      <TextContainer>
        <SmallHeading fontSize="semiMedium">
          <EmphasidText>Discover</EmphasidText> the joy of cooking with fresh,
          pre-portioned ingredients <EmphasidText>delivered</EmphasidText> to
          your <EmphasidText>door!</EmphasidText>
        </SmallHeading>
      </TextContainer>
      <HeroImage src={imageSrc} />
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  border-radius: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 373px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  margin-top: 10px;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
    /* align-items: flex-start; */
  }

  @media (max-width: 480px) {
    padding: 0 10px;
  }
`;
const Banner = styled.div`
  background-color: rgba(150, 220, 20, 1);
  display: flex;
  width: 180px;
  height: 36px;
  margin-top: 10px;
`;

const EmphasidText = styled.span`
  font-size: 1.125rem;
  font-family: var(--font-hind-semi-bold);
  line-height: 1.375;
  font-weight: 600;
  color: #000;
  text-shadow: 0px 12px 56px rgba(0, 0, 0, 0.25);
`;

const TextContainer = styled.div`
  text-shadow: 0px 12px 56px rgba(0, 0, 0, 0.25);
  margin-top: 19px;
  max-width: 250px;
`;
