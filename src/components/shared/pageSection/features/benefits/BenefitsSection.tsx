"use client";
import * as React from "react";
import styled from "styled-components";
import { BenefitCard } from "./BenefitCard";
import { assests } from "../../../../../../public/assests";

interface BenefitItem {
  title: string;
  description: string;
  icon: string;
}

const benefitsData: BenefitItem[] = [
  {
    title: "Deliciousness",
    description:
      "Our chef-created recipes are tested 200 times to ensure your meals are as delicious to eat as they are easy to make.",
    icon: assests.DELICIOUSNESS,
  },
  {
    title: "Flexibility",
    description:
      "We accommodate every appetite, household size, and schedule. Need to skip a week or cancel? No problem.",
    icon: assests.FLEXIBILTY,
  },
  {
    title: "Stress-free",
    description:
      "Take back your evenings with fewer trips to the store, pre-planned meals, and little cleanup.",
    icon: assests.STRESSFREE,
  },
];

export function BenefitsSection() {
  return (
    <BenefitsContainer>
      {benefitsData.map((benefit, index) => (
        <BenefitCard
          key={index}
          title={benefit.title}
          description={benefit.description}
          icon={benefit.icon}
        />
      ))}
    </BenefitsContainer>
  );
}

const BenefitsContainer = styled.section`
  display: flex;
  width: 100%;
  max-width: 430px;
  flex-direction: column;
  color: rgba(0, 0, 0, 1);
  justify-content: center;
  align-items: center;
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
